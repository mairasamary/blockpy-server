import csv
import os
import tempfile
from datetime import datetime
import io
import time

from natsort import natsorted
from tqdm import tqdm

from models.assignment_group import AssignmentGroup
from models.course import Course
from models.log import Log
from models.user import User

PROGSNAP_CSV_WRITER_OPTIONS = {'delimiter': ',', 'quotechar': '"', 'quoting': csv.QUOTE_MINIMAL}


def generate_readme(output_dir):
    with open(output_dir+"Readme.txt", 'w', newline='\n', encoding='utf-8') as out:
        out.write("Generated from BlockPy")
        return out.name


def generate_metadata(output_dir):
    with open(output_dir+"DatasetMetadata.csv", 'w', newline='\n', encoding='utf-8') as metadata_file:
        writer = csv.writer(metadata_file, **PROGSNAP_CSV_WRITER_OPTIONS)
        writer.writerow(["Property", "Value"])
        writer.writerow(["Version", "6"])
        writer.writerow(["IsEventOrderingConsistent", "false"])
        writer.writerow(["CodeStateRepresentation", "Directory"])
        return metadata_file.name


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
    'CompileMessageType', 'CompileMessageData', 'CodeStateSection',
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


def generate_maintable(output_dir, course_id):
    code_states, latest_code_states, scores = {}, {}, {}
    estimated_size = Log.query.filter_by(course_id=course_id).count()
    logs = Log.query.filter_by(course_id=course_id).order_by(Log.date_created.asc()).yield_per(100)
    with open(output_dir+"MainTable.csv", 'w', newline='\n', encoding='utf-8') as maintable_file:
        writer = csv.writer(maintable_file, **PROGSNAP_CSV_WRITER_OPTIONS)
        writer.writerow(HEADERS)
        order_id = 0
        for log in tqdm(logs, total=estimated_size):
            writer.writerow(to_progsnap_event(log, order_id, code_states, latest_code_states, scores))
            order_id += 1
        return maintable_file.name, code_states


def generate_link_subjects(output_dir, course_id):
    with open(output_dir+"LinkTables/Subject.csv", 'w', newline='\n', encoding='utf-8') as linktable_file:
        writer = csv.writer(linktable_file, **PROGSNAP_CSV_WRITER_OPTIONS)
        writer.writerow(["SubjectID", "X-IsStaff", "X-Roles",
                         "X-Name.Last", "X-Name.First", "X-Email"])

        # Get any users explicitly in this course
        users_with_roles = Course.by_id(course_id).get_users()
        users, user_roles = {}, {}
        for role, user in users_with_roles:
            if user.id not in users:
                users[user.id] = user
                user_roles[user.id] = set()
            user_roles[user.id].add(role.name)

        # Get any additional users found in the logs
        log_users = Log.get_users_for_course(course_id)
        for log_user in log_users:
            if log_user.id not in users:
                users[log_user.id] = log_user
                user_roles[log_user.id] = {role.name for role in log_user.get_course_roles(course_id)}

        # Report their information
        for user_id, user in natsorted(users.items(), lambda u: (u[1].last_name, u[1].first_name)):
            roles = user_roles[user_id]
            display_roles = ", ".join(sorted(roles))
            writer.writerow([
                user.id, # SubjectId
                bool(User.is_lti_instructor(roles)), # X-IsStaff
                display_roles, # X-Roles
                user.last_name, # X-Name.Last
                user.first_name, # X-Name.First
                user.email, # X-Email
            ])
        return linktable_file.name


def generate_link_assignments(output_dir, course_id):
    with open(output_dir+"LinkTables/Assignment.csv", 'w', newline='\n', encoding='utf-8') as assignment_file:
        assignment_writer = csv.writer(assignment_file, **PROGSNAP_CSV_WRITER_OPTIONS)
        assignment_writer.writerow(["AssignmentId", "X-Version",
                                    "X-Name", "X-URL", "X-Instructions",
                                    "X-Reviewed", "X-Hidden", "X-Settings",
                                    "X-Code.OnRun", "X-Code.OnChange", "X-Code.OnEval",
                                    "X-Code.Starting", "X-Code.ExtraInstructor", "X-Code.ExtraStarting",
                                    "X-Forked.Id", "X-Forked.Version",
                                    "X-Owner.Id", "X-Course.Id",
                                    "X-AssignmentGroup.Ids"])

        assignments = Log.get_assignments_for_course(course_id)
        all_groups = set()
        for assignment in natsorted(assignments, key=lambda a: a.name):
            groups = AssignmentGroup.by_assignment(assignment.id)
            assignment_writer.writerow([
                assignment.id, assignment.version,
                assignment.name, assignment.url, assignment.instructions,
                assignment.reviewed, assignment.hidden, assignment.settings,
                assignment.on_run, assignment.on_change, assignment.on_eval,
                assignment.starting_code, assignment.extra_instructor_files, assignment.extra_starting_files,
                assignment.forked_id, assignment.forked_version,
                assignment.owner_id, assignment.course_id,
                ", ".join(map(str, (g.id for g in groups)))
            ])
            all_groups.update(groups)
        yield assignment_file.name

    with open(output_dir+"LinkTables/AssignmentGroup.csv", 'w', newline='\n', encoding='utf-8') as group_file:
        group_writer = csv.writer(group_file, **PROGSNAP_CSV_WRITER_OPTIONS)
        group_writer.writerow(["AssignmentGroupId", "X-Version",
                                "X-Name", "X-URL",
                                "X-Forked.Id", "X-Forked.Version",
                                "X-Owner.Id", "X-Course.Id"])
        for group in natsorted(all_groups, key=lambda g: g.name):
            group_writer.writerow([
                group.id, group.version,
                group.name, group.url,
                group.forked_id, group.forked_version,
                group.owner_id, group.course_id,
            ])
        yield group_file.name


def dump_progsnap(course_id, output_dir):
    yield generate_readme(output_dir)
    yield generate_metadata(output_dir)
    filename, code_states = generate_maintable(output_dir, course_id)
    yield filename
    for code_base, code_state_id in code_states.items():
        for filename, contents in code_base:
            path = output_dir+"CodeStates/{}/".format(code_state_id)
            os.makedirs(path, exist_ok=True)
            path = path+filename
            with open(path, 'w', newline='\n', encoding='utf-8') as out:
                out.write(contents)
    yield "CodeStates/*"
    os.makedirs(output_dir+"LinkTables/")
    yield generate_link_subjects(output_dir, course_id)
    for filename in generate_link_assignments(output_dir, course_id):
        yield filename
    # LinkTables/
    #   Subject.csv + Roles
    #   CourseID
    #   AssignmentID
    #   AssignmentGroupID
    #   AssignmentGroupMembership
    #   Tags+Reviews