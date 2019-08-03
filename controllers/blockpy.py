from datetime import datetime
import os
import json

from slugify import slugify
from natsort import natsorted

from flask import Blueprint, url_for, session, request, jsonify, g, render_template
from werkzeug.utils import secure_filename

from main import app

from models.models import (db)
from models.log import Log
from models.submission import Submission
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup

from controllers.helpers import (lti, highlight_python_code, normalize_url,
                                 ensure_dirs, ajax_failure, parse_assignment_load, require_request_parameters,
                                 get_course_id, maybe_int, get_user, check_resource_exists, ajax_success,
                                 login_required, require_course_instructor, require_course_grader)

blueprint_blockpy = Blueprint('blockpy', __name__, url_prefix='/blockpy')


@blueprint_blockpy.route('/static/<path:path>', methods=['GET', 'POST'])
def blockpy_static(path):
    return app.send_static_file(path)


@blueprint_blockpy.route('/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/index', methods=['GET', 'POST'])
@blueprint_blockpy.route('/index/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load', methods=['GET', 'POST'])
def load(lti=lti):
    editor_information = parse_assignment_load()
    return load_editor(lti, editor_information)


def load_editor(lti, editor_information):
    '''
    Render the actual editor based on the editor information.
    :param lti:
    :param editor_information:
    :return:
    '''
    return render_template('blockpy/editor.html', ip=request.remote_addr, **editor_information)


def make_log_entry(assignment_id, assignment_version, course_id, user_id,
                   event_type, file_path='', category='', label='', message='', timestamp=None, timezone=None):
    timestamp = request.values.get('timestamp') if timestamp is None else timestamp
    timezone = request.values.get('timezone') if timezone is None else timezone
    return Log.new(assignment_id, assignment_version, course_id, user_id,
                   event_type, file_path, category, label, message, timestamp, timezone)


@blueprint_blockpy.route('/load_assignment/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_assignment', methods=['GET', 'POST'])
@require_request_parameters('assignment_id')
def load_assignment(lti=lti):
    # Get arguments
    assignment_id = int(request.values.get('assignment_id'))
    assignment = Assignment.by_id(assignment_id)
    course_id = get_course_id()
    user, user_id = get_user()
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    editor_information = assignment.for_editor(user_id, course_id)
    # Log the event
    if user is not None:
        make_log_entry(assignment_id, assignment.version, course_id, user_id, 'Session.Start')
    return ajax_success(editor_information)


@blueprint_blockpy.route('/save_file/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_file', methods=['GET', 'POST'])
@require_request_parameters('filename')
@login_required
def save_file(lti=lti):
    filename = request.values.get("filename")
    course_id = get_course_id()
    user, user_id = get_user()
    if course_id is None:
        ajax_failure("Course ID was not made available", 400)
    if filename == "answer.py":
        return save_answer(course_id, user)


@require_request_parameters("submission_id", "code")
def save_answer(course_id, user):
    submission_id = request.values.get("submission_id")
    code = request.values.get("code")
    submission = Submission.query.get(submission_id)
    # Verify exists
    check_resource_exists(submission, "Submission", submission_id)
    # Verify permissions
    if submission.user_id != user.id:
        require_course_grader(user.id, submission.course_id)
    # Perform update
    # TODO: What if submission's assignment version conflicts with current assignments' version?
    version_change = submission.assignment.version != submission.assignment_version
    submission.save_code(code)
    make_log_entry(submission.assignment_id, submission.assignment_version,
                   course_id, user.id, "File.Save", "answer.py", message=code)
    return ajax_success({"version_change": version_change})

@blueprint_blockpy.route('/save_code/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_code', methods=['GET', 'POST'])
def save_code(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    assignment_version = int(request.values.get('version', -1))
    course_id = int(request.values.get('course_id', g.course.id if 'course' in g else -1))
    if None in (assignment_id, course_id) or course_id == "":
        return ajax_failure("No Assignment ID or Course ID given!")
    code = request.values.get('code', '')
    timestamp = request.values.get('timestamp', '')
    filename = request.values.get('filename', '__main__')
    is_version_correct = True
    if filename == "__main__":
        submission, is_version_correct = Submission.save_code(g.user.id, assignment_id, int(course_id), code,
                                                              assignment_version, timestamp=timestamp)
    elif g.user.is_instructor(int(course_id)):
        if filename == "give_feedback":
            Assignment.edit(assignment_id=assignment_id, on_run=code)
        elif filename == "on_change":
            Assignment.edit(assignment_id=assignment_id, on_change=code)
        elif filename == "starting_code":
            Assignment.edit(assignment_id=assignment_id, starting_code=code)
        log = Log.new('instructor', filename, assignment_id, assignment_version, course_id, g.user.id,
                      body=code, timestamp=timestamp)
    return jsonify(success=True,
                   is_version_correct=is_version_correct,
                   ip=request.remote_addr)


@blueprint_blockpy.route('/save_events/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_events', methods=['GET', 'POST'])
def save_events(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    assignment_version = request.values.get('assignment_version', None)
    event = request.values.get('event', "blank")
    action = request.values.get('action', "missing")
    body = request.values.get('body', "")
    timestamp = request.values.get('timestamp', "")
    user_id = g.user.id if g.user != None else -1
    course_id = int(request.values.get('course_id', g.course.id if 'course' in g else -1))
    if assignment_id is None:
        return ajax_failure("No Assignment ID given!")
    log = Log.new(event, action, assignment_id, assignment_version, course_id, user_id, body=body, timestamp=timestamp)
    return jsonify(success=True,
                   ip=request.remote_addr)


def get_group_score(group_id, user_id, course_id, hide_correctness):
    group = AssignmentGroup.by_id(group_id)
    assignments = natsorted(group.get_assignments(), key=lambda a: a.title())
    submissions = [a.get_submission(user_id, course_id=course_id)
                   for a in assignments]
    completed = sum([s.correct or s.status / 100 for s in submissions])
    total = len(assignments)
    score = completed / total
    return score


def get_group_report(group_id, user_id, course_id, hide_correctness):
    group = AssignmentGroup.by_id(group_id)
    assignments = natsorted(group.get_assignments(), key=lambda a: a.title())
    submissions = [a.get_submission(user_id, course_id=course_id)
                   for a in assignments]
    completed = sum([s.correct or s.status / 100 for s in submissions])
    total = len(assignments)
    score = completed / total
    table = "\n".join(
        ["<li><a href='#{slug}'>{name}</a> {completed}</li>".format(slug=slugify(a.name),
                                                                    name=a.name,
                                                                    completed=(" - " + "Completed"
                                                                               if s.correct else "<strong>Incomplete</strong>")
                                                                    if not hide_correctness else "")
         for a, s in zip(assignments, submissions)]
    )
    overview = '''
    <h1>Overview</h1>
    <div>Status: {completed}/{total} problems</div>
    <div>Score: {score}%</div>
    <div>Contents:
    <ol>
        {table}
    </ol></div>
    '''.format(completed=completed if not hide_correctness else '?',
               total=total,
               score=int(10000 * score) / 100 if not hide_correctness else '?',
               table=table)
    complete = overview + '<br><br>'.join([
        get_report(assignment.type,
                   assignment.name,
                   submission,
                   submission.get_block_image(), hide_correctness)
        for assignment, submission
        in zip(assignments, submissions)
    ]) + '<br><small>{uid}/{cid}/{aids}</small>'.format(uid=user_id, cid=course_id,
                                                        aids=','.join([str(a.id) for a in assignments]))
    complete = '<div xml:lang="en">' + complete + '</div>'
    return score, complete


def get_report(mode, name, submission, image="", hide_correctness=False):
    url = url_for('blockpy.get_submission_code', submission_id=submission.id, _external=True)
    if hide_correctness:
        status = "????"
    elif submission.correct:
        status = "Success!"
    elif submission.status:
        status = "Incomplete ({}%)".format(submission.status)
    else:
        status = "Incomplete"
    if mode == 'maze':
        return """
        <h2 id='{slug}'>Maze {name}</h2>
        <strong>Status:</strong><span> {status}</span>
        """.format(name=name, status=status, slug=slugify(name))
    else:
        code = highlight_python_code(submission.code)
        if image:
            image = "Submitted Blocks:<br><img alt='Block version of code' src='{0}'>".format(image)
        # time = process_history([h['time'] for h in submission.get_history()])
        time = submission.version / 60.0
        return '''
        <div xml:lang="en">
        <h2 id='{slug}'>{name}</h2>
        <div>Status: {status}</div>
        <div>Latest work in progress: <a href='{url}' target='_blank'>View</a></div>
        <div>Touches: {touches}</div>
        <div>Estimated Duration: {time:.2f} minutes</div>
        {image}
        <br>
        Submitted code:<br>
        {code}
        </div>
        '''.format(name=name, slug=slugify(name),
                   status=status, url=url, time=time,
                   touches=submission.version, code=code,
                   image=image)


@blueprint_blockpy.route('/view_current_group/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/view_current_group', methods=['GET', 'POST'])
def view_current_group(lti=lti):
    assignment_group_id = request.values.get('group_id', None)
    course_id = request.values.get('course_id', None)
    user_id = request.values.get('user_id', None)
    hide_correctness = False
    error_message = verify_user(assignment_group_id, course_id, user_id)
    if error_message:
        return error_message
    # TODO: Implement this
    score, report = get_group_report(int(assignment_group_id), int(user_id), int(course_id), hide_correctness)
    return report


@blueprint_blockpy.route('/view_current_assignment/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/view_current_assignment', methods=['GET', 'POST'])
def view_current_assignment(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    course_id = request.values.get('course_id', None)
    user_id = request.values.get('user_id', None)
    hide_correctness = False
    error_message = verify_user(assignment_id, course_id, user_id)
    if error_message:
        return error_message
    assignment = Assignment.by_id(assignment_id)
    submission = assignment.get_submission(user_id, course_id=course_id)
    score = float(submission.correct) or submission.status
    report = get_report(assignment.type, assignment.name, submission,
                        image=submission.get_block_image(),
                        hide_correctness=hide_correctness)
    return report


def verify_user(a_id, course_id, user_id):
    if None in (a_id, course_id, user_id):
        return "Missing either group, assignment, course, or user id."
    if 'user' not in g or not g.user:
        return "You are not logged in as a grader! Make sure you've visited a BlockPy Canvas."
    print(course_id, g.user.id, g.user.is_grader(course_id))
    if g.user.is_grader(int(course_id)) or user_id == g.user.id:
        return False
    return "Sorry, you do not have sufficient permissions to spy!"


@blueprint_blockpy.route('/save_correct/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_correct', methods=['GET', 'POST'])
@lti()
def save_correct(lti, lti_exception=None):
    assignment_id = request.values.get('assignment_id', None)
    assignment_group_id = request.values.get('group_id', None)
    status = float(request.values.get('status', "0.0"))
    image = request.values.get('image', "")
    hide_correctness = request.values.get('hide_correctness', "false") == "true"
    force_update = request.values.get('force_update', "false") == "true"
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if course_id == -1 or lti is None:
        return ajax_failure("Course ID was negative or LTI is None.")
    if None in (assignment_id, course_id):
        return ajax_failure("No Assignment ID or Course ID given!")
    assignment = Assignment.by_id(assignment_id)
    if status >= 1:
        submission = Submission.save_correct(g.user.id, assignment_id, course_id=int(course_id))
    else:
        submission = assignment.get_submission(g.user.id, course_id=course_id)
    was_changed = submission.set_status(int(100 * status))
    if not force_update and not was_changed:
        return jsonify(success=True, submitted=False,
                       message="No grade change",
                       ip=request.remote_addr)
    lis_result_sourcedid = request.values.get('lis_result_sourcedid', submission.url) or None
    if lis_result_sourcedid is None:
        return jsonify(success=True, submitted=False,
                       message="Not in a grading context.",
                       ip=request.remote_addr)
    session['lis_result_sourcedid'] = lis_result_sourcedid
    image_url = submission.save_block_image(image)

    if assignment_group_id != None and assignment_group_id != '' and assignment_group_id != 'None':
        score = get_group_score(int(assignment_group_id), g.user.id, int(course_id), hide_correctness)
        url = url_for('blockpy.view_current_group',
                      group_id=int(assignment_group_id),
                      course_id=int(course_id), user_id=g.user.id,
                      _external=True)
        report = "<a href='{url}'>View Group</a>".format(url=url)
    else:
        score = float(submission.correct) or status
        url = url_for('blockpy.view_current_assignment',
                      assignment_id=int(assignment_id),
                      course_id=int(course_id), user_id=g.user.id,
                      _external=True)
        report = "<a href='{url}'>View Assignment</a>".format(url=url)
    lti.post_grade(score, report, endpoint=lis_result_sourcedid)
    return jsonify(success=True, submitted=True, ip=request.remote_addr)


@blueprint_blockpy.route('/get_submission_code/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_submission_code', methods=['GET', 'POST'])
def get_submission_code(lti=lti):
    submission_id = request.values.get('submission_id', None)
    if submission_id is None:
        return "Sorry, no submission ID was given."
    submission = Submission.query.get(submission_id)
    if 'user' not in g or not g.user:
        return "You are not logged in as a grader! Make sure you've visited a BlockPy Canvas."
    if 'course' not in g or not g.course:
        return "You're not in a course context! Make sure you've visited a BlockPy Canvas."
    if not submission:
        return '#No submission found!'
    if g.user.is_grader(g.course.id) or submission.user_id == g.user.id:
        if submission.code:
            status = "100%" if submission.correct else str(submission.status) + "%"
            body = "<strong>Status: " + status + "</strong><hr>"
            body += "<pre>" + highlight_python_code(submission.code) + "</pre>"
            return body
        else:
            return "<strong>Status: 0%</strong><hr>#No code given!"
    else:
        return "Sorry, you do not have sufficient permissions to spy!"


@blueprint_blockpy.route('/get_submission_image/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_submission_image', methods=['GET', 'POST'])
def get_submission_image(lti=lti):
    submission_id = request.values.get('submission_id', None)
    if submission_id is None:
        return "Sorry, no submission ID was given."
    relative_image_path = 'uploads/submission_blocks/' + str(submission_id) + '.png'
    submission = Submission.query.get(int(submission_id))
    course_id = request.values.get('course_id', None)
    if course_id is None:
        if 'course' in g:
            course_id = g.course.id
        else:
            return "No course was found or given."
    if g.user.is_grader(course_id) or submission.user_id == g.user.id:
        return app.send_static_file(relative_image_path)
    else:
        return "Sorry, you do not have sufficient permissions to spy!"


@blueprint_blockpy.route('/save_assignment/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_assignment', methods=['GET', 'POST'])
def save_assignment(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id is None:
        return ajax_failure("No Assignment ID given!")
    presentation = request.values.get('introduction', "")
    parsons = request.values.get('parsons', "false") == "true"
    importable = request.values.get('importable', "false") == "true"
    secret = request.values.get('secret', "false") == "true"
    disable_algorithm_errors = request.values.get('disable_algorithm_errors', 'false') == 'true'
    disable_timeout = request.values.get('disable_timeout', 'false') == 'true'
    # text_first = request.values.get('text_first', "false") == "true"
    mode = request.values.get("initial", None)
    name = request.values.get('name', "")
    modules = request.values.get('modules', "")
    files = request.values.get('files', "")
    assignment = Assignment.by_id(int(assignment_id))
    if not g.user.is_instructor(int(assignment.course_id)):
        return jsonify(success=False, message="You are not an instructor in this assignments' course.")
    Assignment.edit(assignment_id=assignment_id, instructions=presentation, name=name, parsons=parsons, mode=mode,
                    modules=modules, importable=importable, disable_algorithm_errors=disable_algorithm_errors,
                    disable_timeout=disable_timeout, files=files, secret=secret)
    return jsonify(success=True, ip=request.remote_addr)


@blueprint_blockpy.route('/get_history/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_history', methods=['GET', 'POST'])
def get_history(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    assignment_version = int(request.values.get('version', -1))
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id) or course_id == "":
        return ajax_failure("No Assignment ID or Course ID given!")
    submission = Submission.load(g.user.id, assignment_id, int(course_id))
    return jsonify(success=True,
                   data=submission.get_history(),
                   ip=request.remote_addr)


@blueprint_blockpy.route('/load_corgis/<path:path>', methods=['GET', 'POST'])
def load_corgis(path):
    return app.send_static_file('corgis/{path}'.format(path=path))


@blueprint_blockpy.route('/load_file/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_file', methods=['GET', 'POST'])
def load_file():
    assignment_id = request.values.get('assignment_id', '0')
    filename = request.values.get('filename', None)
    type = request.values.get('type', None)
    if None in (filename, type, assignment_id):
        return ajax_failure("No Assignment ID, filename, or type given!")
    files_folder = os.path.join(app.config['UPLOADS_DIR'], 'files', assignment_id)
    ensure_dirs(files_folder)
    if type == 'url':
        filename = normalize_url(filename) + ".txt"
    elif type == 'file':
        filename = secure_filename(filename)
    file_path = os.path.join(files_folder, filename)
    try:
        with open(file_path) as inp:
            contents = inp.read()
        return jsonify(success=True, data=contents, ip=request.remote_addr)
    except IOError as e:
        return jsonify(success=False, message=str(e), ip=request.remote_addr)


@blueprint_blockpy.route('/force_right_section/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/force_right_section', methods=['GET', 'POST'])
def force_right_section():
    kaf_students = Submission.query.with_entities(Submission.user_id).filter_by(course_id=5).distinct().all()
    kaf_students = [a[0] for a in kaf_students]
    my_submissions = Submission.query.filter_by(course_id=8).all()
    modified = []
    for submission in my_submissions:
        if submission.user_id in kaf_students:
            submission.course_id = 5
            modified.append(
                {"user": submission.user_id, "course": submission.course_id, "assignment": submission.assignment_id,
                 "id": submission.id})
    db.session.commit()
    return jsonify(result=modified)


GAP_THRESHOLD = 2 * 60


def process_history(history):
    if len(history) <= 1:
        return 0
    total_duration = 0.0
    previous_time = None
    for a_time in history:
        parsed_time = datetime.strptime(a_time[:15], "%Y%m%d-%H%M%S")
        if previous_time != None:
            diff = (parsed_time - previous_time).seconds
            if diff < GAP_THRESHOLD:
                total_duration += diff
        previous_time = parsed_time
    return total_duration / 60.


@blueprint_blockpy.route('/browse_submissions', methods=['GET', 'POST'])
@blueprint_blockpy.route('/browse_submissions/', methods=['GET', 'POST'])
def browse_submissions():
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id is None:
        return ajax_failure("No Assignment ID given!")
    assignment_id = int(assignment_id)
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if course_id == None or course_id == "":
        return ajax_failure("No Course ID given!")
    if g.user is None or not g.user.is_instructor(int(course_id)):
        return ajax_failure("You are not an instructor in this assignments' course.")
    submissions = Submission.by_assignment(assignment_id, int(course_id))
    for submission, user, assignment in submissions:
        submission.highlighted_code = highlight_python_code(submission.code)
        submission.history = process_history([h['time'] for h in submission.get_history()])
    return render_template('blockpy/browse_submissions.html',
                           course_id=course_id,
                           assignment_id=assignment_id,
                           submissions=submissions,
                           ip=request.remote_addr)


@blueprint_blockpy.route('/watch', methods=['GET', 'POST'])
@blueprint_blockpy.route('/watch/', methods=['GET', 'POST'])
def watch():
    assignment_list = request.values.get('assignments', '')
    assignments = [int(aid) for aid in assignment_list.split(',') if len(aid) > 0]
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if course_id == None or course_id == "":
        return ajax_failure("No Course ID given!")
    if g.user is None or not g.user.is_instructor(int(course_id)):
        return ajax_failure("You are not an instructor in this assignments' course.")
    update = request.values.get('update', 'false') == "true"
    if update:
        data = []
        for aid in assignments:
            submissions = Submission.by_assignment(aid, int(course_id))
            completions = sum([int(sua[0].correct) for sua in submissions])
            workings = Submission.get_latest(aid, int(course_id))
            histories = [process_history([h['time'] for h in sua[0].get_history()])
                         for sua in submissions]
            touches = [int(sua[0].version) for sua in submissions]
            feedbacks = [l[0] for l in Log.calculate_feedbacks(aid, course_id)]
            data.append({'id': aid,
                         'Completions': completions,
                         'Workings': workings,
                         'Time': histories,
                         'Touches': touches,
                         'Feedbacks': feedbacks})
        return jsonify(success=True, data=data)
    else:
        assignments = [Assignment.by_id(aid) for aid in assignments]
        return render_template('blockpy/watch.html', course_id=course_id, assignments=assignments,
                               assignment_list=assignment_list)


@blueprint_blockpy.route('/images/<path:path>', methods=['GET', 'POST'])
def assignments_static_images(path):
    return app.send_static_file('images/' + path)


@blueprint_blockpy.route('/load_assignment_give_feedback/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_assignment_give_feedback', methods=['GET', 'POST'])
def load_assignment_give_feedback():
    '''
    Very random function necessary for syncing with JN - we need to expose the 'on_run'
    field from assignments in public courses.

    TODO: Do this for public courses only, not just private ones

    :return:
    '''
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id is None:
        return ajax_failure("No Assignment ID given!")
    assignment = Assignment.by_id(assignment_id)
    return jsonify(success=True, give_feedback=assignment.on_run)
