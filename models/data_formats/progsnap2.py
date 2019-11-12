import csv
from datetime import datetime
import io
import time

from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.assignment_group_membership import AssignmentGroupMembership
from models.course import Course
from models.log import Log


PROGSNAP_CSV_WRITER_OPTIONS = {'delimiter': ',', 'quotechar': '"', 'quoting': csv.QUOTE_MINIMAL}


def generate_readme():
    readme_file = io.BytesIO(b"Generated from BlockPy")
    return "Readme.txt", readme_file


def generate_metadata():
    metadata_file = io.StringIO()
    writer = csv.writer(metadata_file, **PROGSNAP_CSV_WRITER_OPTIONS)
    writer.writerow(["Property", "Value"])
    writer.writerow(["Version", "6"])
    writer.writerow(["IsEventOrderingConsistent", "false"])
    writer.writerow(["CodeStateRepresentation", "Directory"])
    return "DatasetMetadata.csv", metadata_file


'''
# Identification
assignment_id = Column(Integer(), ForeignKey('assignment.id'))
assignment_version = Column(Integer())
course_id = Column(Integer(), ForeignKey('course.id'))
subject_id = Column(Integer(), ForeignKey('user.id'))
# Actual event data
event_type = Column(String(255))
file_path = Column(String(255), default="", nullable=True)
category = Column(String(255), default="")
label = Column(String(255), default="")
# Message will be JSON encoded data
message = Column(Text(), default="")
client_timestamp = Column(String(255), default="")
client_timezone = Column(String(255), default="")

assignment = db.relationship("Assignment")
subject = db.relationship("User")
course = db.relationship("Course")

# event_type
# => event_id
# subject_id
# => tool_instances
# => code_state_id
# => server_timestamp
# => server_timezone
# client_timestamp
# => client_timezone
# => session_id
# course_id
# => term_id
# assignment_id
# => edit_type
# file_path
# ? body
# => execution_result
# => SyntaxError: compile_result, compile_message_type, compile_message_data
# => Feedback: intervention_type, intervention_message
# => RunTime Error: program_input, program_output, program_error_output
# => source_location (line of code with error)
# => score
'''


def blockpy_timestamp_to_iso8601(timestamp):
    '''
    Converts blockpy style timestamps into an ISO-8601 compatible timestamp.

    > blockpy_timestamp_to_iso8601(2018-10-31-12-02-25)
    2018-10-31T12:02:25

    Arguments:
        timestamp (str): A blockpy-style timestamp
    Returns:
        str: The ISO-8601 timestamp.
    '''
    if not timestamp:
        return ""
    return datetime.fromtimestamp(int(timestamp)/1000).isoformat()


HEADERS = [
    'EventID', 'Order', 'SubjectID', 'AssignmentID', 'CourseID',
    'EventType', 'CodeStateID',
    'ParentEventID',
    'ClientTimestamp', 'ClientTimezone',
    'Score',
    'EditType',
    'CompileMessageType', 'CompileMessageData', 'SourceLocation',
    'InterventionCategory', 'InterventionType', 'InterventionMessage',
    'ServerTimestamp', 'ServerTimezone', 'ToolInstances'
]


TOOL_INSTANCE_ID = "BPY5"

CODE_STATE_UPDATE_EVENT_TYPES = {
    "File.Edit": "GenericEdit",
    "X-File.Add": "GenericEdit",
    "X-Instructor.File.Edit": "GenericEdit",
    "File.Create": "GenericEdit"
}


def to_progsnap_event(log, order_id, code_states, latest_code_states, scores):
    fields = [log.id, order_id, log.subject_id, log.assignment_id, log.course_id, log.event_type]
    submission_identification = (log.subject_id, log.assignment_id, log.course_id)
    # Figure out code_state
    current_code_base = latest_code_states.get(submission_identification, {})
    edit_type = ""
    if log.event_type in CODE_STATE_UPDATE_EVENT_TYPES:
        current_code_base[log.file_path] = log.message
        edit_type = CODE_STATE_UPDATE_EVENT_TYPES[log.event_type]
    hashed_code_base = tuple(sorted(current_code_base.items()))
    if hashed_code_base in code_states:
        code_state_id = code_states[hashed_code_base]
    else:
        code_state_id = len(code_states)
        code_states[hashed_code_base] = code_state_id
    # Figure out score
    if log.event_type == "Intervention" and log.category == "Complete":
        scores[submission_identification] = score = 1
    elif log.event_type == "X-Submission.LMS":
        scores[submission_identification] = score = log.message
    else:
        score = ""
    # Compile Stuff
    if log.event_type == "Compile.Error":
        compile_message_type = "Error"
        compile_message_data = log.message
    else:
        compile_message_type = ""
        compile_message_data = ""
    # Intervention
    if log.event_type == "Intervention":
        intervention_category = "Feedback"
        intervention_type = log.category + "|" + log.label
        intervention_message = log.message
    else:
        intervention_category = ""
        intervention_type = ""
        intervention_message = ""
    # Result
    return fields + [code_state_id,
                     "", # TODO: ParentEventId
                     blockpy_timestamp_to_iso8601(log.client_timestamp),
                     log.client_timezone,
                     score,
                     edit_type,
                     compile_message_type,
                     compile_message_data,
                     log.file_path,
                     intervention_category,
                     intervention_type,
                     intervention_message,
                     log.date_created.isoformat(),
                     str(time.timezone // 36).zfill(4),
                     TOOL_INSTANCE_ID
                     ]


def generate_maintable(course_id):
    code_states, latest_code_states, scores = {}, {}, {}
    logs = Log.query.filter_by(course_id=course_id).order_by(Log.date_created.asc()).all()
    maintable_file = io.StringIO()
    writer = csv.writer(maintable_file, **PROGSNAP_CSV_WRITER_OPTIONS)
    writer.writerow(HEADERS)
    order_id = 0
    for log in logs:
        writer.writerow(to_progsnap_event(log, order_id, code_states, latest_code_states, scores))
        order_id += 1
    return "MainTable.csv", maintable_file, code_states

def dump_progsnap(course_id):
    yield generate_readme()
    yield generate_metadata()
    filename, contents, code_states = generate_maintable(course_id)
    yield filename, contents
    for code_base, code_state_id in code_states.items():
        for filename, contents in code_base:
            yield "CodeStates/{}/{}".format(code_state_id, filename), io.StringIO(contents)
    # LinkTables/
    #   Subject.csv + Roles
    #   CourseID
    #   AssignmentID
    #   AssignmentGroupID
    #   AssignmentGroupMembership
    #   Tags+Reviews