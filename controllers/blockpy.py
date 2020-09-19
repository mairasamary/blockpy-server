from datetime import datetime
import os
import json
from typing import Tuple

from slugify import slugify
from natsort import natsorted

from flask import Blueprint, url_for, session, request, jsonify, g, render_template, redirect
from werkzeug.utils import secure_filename

from controllers.pylti.common import LTIPostMessageException
from main import app
from models.assignment_tag import AssignmentTag
from models.course import Course

from models.models import (db)
from models.log import Log
from models.submission import Submission, GradingStatuses
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup

from controllers.helpers import (lti, highlight_python_code, normalize_url,
                                 ensure_dirs, ajax_failure, parse_assignment_load, require_request_parameters,
                                 get_course_id, maybe_int, get_user, check_resource_exists, ajax_success,
                                 login_required, require_course_instructor, require_course_grader, maybe_bool,
                                 make_log_entry)
from models.user import User

blueprint_blockpy = Blueprint('blockpy', __name__, url_prefix='/blockpy')


@blueprint_blockpy.route('/static/<path:path>', methods=['GET', 'POST'])
def blockpy_static(path):
    return app.send_static_file(path)


@blueprint_blockpy.route('/load_submission/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_submission', methods=['GET', 'POST'])
@require_request_parameters('submission_id')
def load_submission(lti=lti):
    submission_id = int(request.args.get('submission_id'))
    embed = maybe_bool(request.values.get('embed'))
    user = g.get('user', None)
    user_id = user.id if user else None
    course_id = maybe_int(request.args.get('course_id', None))
    if course_id is None:
        course_id = int(g.course.id) if g.course else None
    submission = Submission.query.get(submission_id)
    # Check that the resource exists
    check_resource_exists(submission, "Submission", submission_id)
    # If it is this user's submission, redirect to load the assignment
    if submission.user_id == user_id:
        return redirect(url_for('blockpy.load', assignment_id=submission.assignment.id, ))
    # Check that it is public or you are a grader
    elif user.is_grader(submission.course_id):
        pass
    elif not submission.assignment.public:
        # TODO: Handle this more gracefully
        return ajax_failure(
            "Cannot view submission. This is not a public submission, and you do not own the submission, and you are "
            "not an instructor in its course.")
    # Get the assignment
    assignment_data = submission.assignment.for_editor(submission.user_id, submission.course_id)
    return load_editor(lti, {
        "user": user,
        "user_id": user_id,
        "embed": embed,
        "course_id": course_id,
        "role": 'anonymous',
        "assignment_group_id": None,
        "assignment_data": assignment_data
    })


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


@blueprint_blockpy.route('/load_assignment/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_assignment', methods=['GET', 'POST'])
@require_request_parameters('assignment_id')
def load_assignment(lti=lti):
    # Get arguments
    assignment_id = int(request.values.get('assignment_id'))
    assignment = Assignment.by_id(assignment_id)
    course_id = get_course_id(True)
    user, user_id = get_user()
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    if course_id is None:
        editor_information = assignment.for_read_only_editor(user_id)
    else:
        editor_information = assignment.for_editor(user_id, course_id)
        browser_info = repr({
            'platform': request.user_agent.platform,
            'browser': request.user_agent.browser,
            'version': request.user_agent.version,
            'language': request.user_agent.language,
            'user_agent': request.user_agent.string
        })
        # Log the event
        if user is not None:
            make_log_entry(assignment_id, assignment.version, course_id, user_id, 'Session.Start',
                           message=browser_info)
    # Verify passcode, if necessary
    if assignment.passcode_fails(request.values.get('passcode')):
        return ajax_failure("Passcode {!r} rejected".format(request.values.get("passcode")))
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
        return ajax_failure("Course ID was not made available")
    if filename in Submission.STUDENT_FILENAMES:
        return save_student_file(filename, course_id, user)
    if filename in Assignment.INSTRUCTOR_FILENAMES:
        return save_instructor_file(course_id, user, filename)
    return ajax_failure("Unknown filename: "+str(filename))


@require_request_parameters("submission_id", "code")
def save_student_file(filename, course_id, user):
    submission_id = request.values.get("submission_id")
    code = request.values.get("code")
    submission = Submission.query.get(submission_id)
    # Verify exists
    check_resource_exists(submission, "Submission", submission_id)
    # Verify permissions
    if submission.user_id != user.id:
        require_course_grader(user, submission.course_id)
    # Validate the maximum file size
    if app.config["MAXIMUM_CODE_SIZE"] < len(code):
        return ajax_failure(
            "Maximum size of code exceeded. Current limit is {}, you uploaded {} characters.".format(
                app.config["MAXIMUM_CODE_SIZE"], len(code)
            ))
    # Perform update
    # TODO: What if submission's assignment version conflicts with current assignments' version?
    version_change = submission.assignment.version != submission.assignment_version
    submission.save_code(filename, code)
    make_log_entry(submission.assignment_id, submission.assignment_version,
                   course_id, user.id, "File.Edit", "answer.py", message=code)
    return ajax_success({"version_change": version_change})


@require_request_parameters("assignment_id", "code")
def save_instructor_file(course_id, user, filename):
    assignment_id = request.values.get("assignment_id")
    code = request.values.get("code")
    assignment = Assignment.query.get(assignment_id)
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    if assignment.owner_id != user.id:
        require_course_grader(user, assignment.course_id)
    # Perform update
    assignment.save_file(filename, code)
    make_log_entry(assignment_id, assignment.version, course_id, user.id,
                   "X-Instructor.File.Edit", filename, message=code)
    return ajax_success({})


@blueprint_blockpy.route('/load_history/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_history', methods=['GET', 'POST'])
@require_request_parameters("course_id")
def load_history():
    # Get parameters
    course_id = maybe_int(request.values.get('course_id'))
    assignment_id = maybe_int(request.values.get('assignment_id'))
    student_id = maybe_int(request.values.get('user_id'))
    page_limit = maybe_int(request.values.get('page_limit'))
    page_offset = maybe_int(request.values.get('page_offset'))
    user, user_id = get_user()
    # Verify user can see the submission
    if user_id != student_id and not user.is_grader(course_id):
        return ajax_failure("Only graders can see logs for other people.")
    history = list(reversed(Log.get_history(course_id, assignment_id, student_id,
                                            page_offset=page_offset,
                                            page_limit=page_limit)))
    return ajax_success({"history": history})


@blueprint_blockpy.route('/log_event/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/log_event', methods=['GET', 'POST'])
@require_request_parameters('event_type')
@login_required
def log_event(lti=lti):
    course_id = get_course_id()
    user, user_id = get_user()
    assignment_id = request.values.get('assignment_id')
    assignment_version = request.values.get('assignment_version')
    event_type = request.values.get("event_type")
    file_path = request.values.get("file_path", "")
    category = request.values.get('category', "")
    label = request.values.get('label', "")
    message = request.values.get('message', "")
    # Make the entry
    new_log = make_log_entry(assignment_id, assignment_version, course_id, user_id,
                             event_type, file_path, category, label, message)
    return ajax_success({"log_id": new_log.id})


def get_groups_submissions(group_id, user_id, course_id):
    group = AssignmentGroup.by_id(group_id)
    check_resource_exists(group, "AssignmentGroup", group_id)
    assignments = group.get_assignments()
    submissions = [assignment.load(user_id, course_id=course_id) for assignment in assignments]
    return group, assignments, submissions


def calculate_submissions_score(assignments, submissions):
    total_score = sum(submission.full_score() for submission in submissions)
    total_possible = len(assignments)
    return total_score, total_possible


@blueprint_blockpy.route('/view_submissions/<int:course_id>/<int:user_id>/<int:assignment_group_id>/',
                         methods=['GET', 'POST'])
@blueprint_blockpy.route('/view_submissions/<int:course_id>/<int:user_id>/<int:assignment_group_id>',
                         methods=['GET', 'POST'])
def view_submissions(course_id, user_id, assignment_group_id):
    embed = maybe_bool(request.values.get('embed'))
    viewer, viewer_id = get_user()
    group, assignments, submissions = get_groups_submissions(assignment_group_id, user_id, course_id)
    # Check permissions
    for submission in submissions:
        if not submission:
            return ajax_failure("No submission for the given course, user, and group.")
        elif submission.user_id != viewer_id:
            require_course_grader(viewer, submission.course_id)
    # Do action
    points_total, points_possible = calculate_submissions_score(assignments, submissions)
    score = round(points_total / points_possible, 2)
    # TODO: Handle tags
    is_grader = viewer.is_grader(course_id)
    tags = []
    if is_grader:
        tags = [tag.encode_json() for tag in AssignmentTag.get_all()]
    return render_template("reports/group.html", embed=embed,
                           points_total=points_total, points_possible=points_possible,
                           score=score, tags=tags, is_grader=is_grader,
                           group=list(zip(assignments, submissions)),
                           user_id=user_id, course_id=course_id)


@blueprint_blockpy.route('/view_submission/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/view_submission', methods=['GET', 'POST'])
@require_request_parameters('submission_id')
def view_submission():
    submission_id = request.values.get('submission_id')
    viewer, viewer_id = get_user()
    embed = maybe_bool(request.values.get('embed'))
    submission = Submission.by_id(submission_id)
    # Check exists
    check_resource_exists(submission, "Submission", submission_id)
    # Check permissions
    if submission.user_id != viewer_id:
        require_course_grader(viewer, submission.course_id)
    is_grader = viewer.is_grader(submission.course_id)
    tags = []
    if is_grader:
        tags = [tag.encode_json() for tag in AssignmentTag.get_all()]
    # Do action
    return render_template("reports/alone.html", embed=embed,
                           submission=submission, assignment=submission.assignment,
                           is_grader=is_grader, tags=tags,
                           user_id=submission.user_id, course_id=submission.course_id)


def get_outcomes(submission, assignment_group_id, user_id, course_id) -> 'Tuple[float, str]':
    if assignment_group_id is None:
        score = round(submission.full_score(), 2)
        url = url_for('blockpy.view_submission', _external=True, embed=True,
                      submission_id=submission.id)
    else:
        group, assignments, submissions = get_groups_submissions(assignment_group_id, user_id, course_id)
        total, possible = calculate_submissions_score(assignments, submissions)
        score = round(total / possible, 2)
        url = url_for('blockpy.view_submissions', _external=True, embed=True,
                      assignment_group_id=assignment_group_id, course_id=course_id,
                      user_id=user_id)
    return score, url


def lti_post_grade(lti, submission, lis_result_sourcedid, assignment_group_id, user_id, course_id):
    total_score, view_url = get_outcomes(submission, assignment_group_id, user_id, course_id)
    lis_result_sourcedid = submission.endpoint if lis_result_sourcedid is None else lis_result_sourcedid
    if 'lis_outcome_service_url' not in session:
        course = Course.by_id(course_id)
        session['lis_outcome_service_url'] = course.endpoint
    session['lis_result_sourcedid'] = lis_result_sourcedid
    if lis_result_sourcedid and lti:
        lti.post_grade(total_score, view_url, endpoint=lis_result_sourcedid, url=True)
        return True, total_score
    return False, total_score


@blueprint_blockpy.route('/update_submission/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/update_submission', methods=['GET', 'POST'])
@require_request_parameters('submission_id')
@lti()
def update_submission(lti, lti_exception=None):
    # Get parameters
    submission_id = maybe_int(request.values.get("submission_id"))
    lis_result_sourcedid = request.values.get('lis_result_sourcedid')
    assignment_group_id = maybe_int(request.values.get('assignment_group_id'))
    score = float(request.values.get('score', '0'))
    correct = maybe_bool(request.values.get("correct"))
    # TODO: Only send image if the assignment settings starts as Block or Split
    image = request.values.get('image', "")
    hidden_override = maybe_bool(request.values.get('hidden_override'))
    force_update = maybe_bool(request.values.get('force_update'))
    course_id = get_course_id()
    user, user_id = get_user()
    submission = Submission.by_id(submission_id)
    # Check resource exists
    check_resource_exists(submission, "Submission", submission_id)
    # Verify permissions
    if submission.user_id != user_id and not user.is_grader(submission.course_id):
        return ajax_failure("This is not your submission and you are not a grader in its course.")
    # Do action
    was_changed = submission.update_submission(score, correct)
    if assignment_group_id is None:
        assignment_group_id = submission.assignment_group_id
    # TODO: Document that we currently only pass back grade if it changed
    # TODO: If failure on previous submission grading, then retry
    if was_changed or force_update:
        submission.save_block_image(image)
        error = "Generic LTI Failure - perhaps not logged into LTI session?"
        try:
            success, score = lti_post_grade(lti, submission, lis_result_sourcedid, assignment_group_id,
                                     submission.user_id, submission.course_id)
        except LTIPostMessageException as e:
            success = False
            error = str(e)
        if success:
            make_log_entry(submission.assignment_id, submission.assignment_version,
                           course_id, user_id, "X-Submission.LMS", "answer.py", message=str(score))
        else:
            submission.update_grading_status(GradingStatuses.FAILED)
            make_log_entry(submission.assignment_id, submission.assignment_version,
                           course_id, user_id, "X-Submission.LMS.Failure", "answer.py", message=error)
            return ajax_failure({"submitted": False, "changed": was_changed, "message": error})
    return ajax_success({"submitted": was_changed or force_update, "changed": was_changed})


@blueprint_blockpy.route('/update_submission_status/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/update_submission_status', methods=['GET', 'POST'])
@require_request_parameters('submission_id', 'status')
@lti()
def update_submission_status(lti, lti_exception=None):
    # Get parameters
    submission_id = maybe_int(request.values.get("submission_id"))
    status = request.values.get('status')
    course_id = get_course_id()
    user, user_id = get_user()
    submission = Submission.by_id(submission_id)
    # Check resource exists
    check_resource_exists(submission, "Submission", submission_id)
    # Verify permissions
    if submission.user_id != user_id and not user.is_grader(submission.course_id):
        return ajax_failure("This is not your submission and you are not a grader in its course.")
    # Do action
    success = submission.update_submission_status(status)
    make_log_entry(submission.assignment_id, submission.assignment_version,
                   course_id, user_id, "Submit", "answer.py", category=status, message=str(success))
    return ajax_success({"success": success})


@blueprint_blockpy.route('/save_image/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_image', methods=['GET', 'POST'])
@require_request_parameters('submission_id', 'directory', 'image')
def save_image():
    # Get parameters
    submission_id = maybe_int(request.values.get("submission_id"))
    directory = request.values.get('directory')
    image = request.values.get('image')
    course_id = get_course_id()
    user, user_id = get_user()
    submission = Submission.by_id(submission_id)
    # Check resource exists
    check_resource_exists(submission, "Submission", submission_id)
    # Verify permissions
    if submission.user_id != user_id and not user.is_grader(submission.course_id):
        return ajax_failure("This is not your submission and you are not a grader in its course.")
    # Do action
    success = submission.save_image(directory, image)
    make_log_entry(submission.assignment_id, submission.assignment_version,
                   course_id, user_id, "X-Image.Save", directory)
    return ajax_success({"success": success})


@blueprint_blockpy.route('/get_submission_image/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_submission_image', methods=['GET', 'POST'])
@require_request_parameters('submission_id')
def get_submission_image(lti=lti):
    submission_id = int(request.values.get('submission_id'))
    relative_image_path = 'uploads/submission_blocks/{}.png'.format(submission_id)
    submission = Submission.query.get(submission_id)
    user, user_id = get_user()
    # Check exists
    check_resource_exists(submission, "Submission", submission_id)
    # Check permissions
    if submission.user_id != user_id:
        require_course_grader(user, submission.course_id)
    # Do action
    return app.send_static_file(relative_image_path)


@blueprint_blockpy.route('/get_image/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_image', methods=['GET', 'POST'])
@require_request_parameters('submission_id', 'directory')
def get_image():
    submission_id = int(request.values.get('submission_id'))
    directory = request.values.get('directory')
    relative_image_path = 'uploads/{}/{}.png'.format(directory, submission_id)
    submission = Submission.query.get(submission_id)
    user, user_id = get_user()
    # Check exists
    check_resource_exists(submission, "Submission", submission_id)
    # Check permissions
    if submission.user_id != user_id and not user.is_grader(submission.course_id):
        return ajax_failure("This is not your submission and you are not a grader in its course.")
    # Do action
    return app.send_static_file(relative_image_path)


@blueprint_blockpy.route('/save_assignment/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_assignment', methods=['GET', 'POST'])
@require_request_parameters('assignment_id')
@login_required
def save_assignment(lti=lti):
    assignment_id = request.values.get('assignment_id')
    user, user_id = get_user()
    course_id = get_course_id()
    assignment = Assignment.query.get(assignment_id)
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    if assignment.owner_id != user.id:
        require_course_grader(user, assignment.course_id)
    # Parse new settings
    updates = {}
    if "hidden" in request.values:
        updates["hidden"] = maybe_bool(request.values.get("hidden"))
    if "reviewed" in request.values:
        updates["reviewed"] = maybe_bool(request.values.get("reviewed"))
    if "public" in request.values:
        updates["public"] = maybe_bool(request.values.get("public"))
    if "url" in request.values:
        updates["url"] = request.values.get("url") or None
    if "ip_ranges" in request.values:
        updates["ip_ranges"] = request.values.get("ip_ranges")
    if "name" in request.values:
        updates["name"] = request.values.get("name")
    if "settings" in request.values:
        updates["settings"] = request.values.get("settings")
    # Perform update
    modified = assignment.edit(updates)
    make_log_entry(assignment.id, assignment.version,
                   course_id or assignment.course_id,
                   user.id, "X-Instructor.Settings.Edit", "assignment_settings.blockpy",
                   message=json.dumps(updates))
    return ajax_success({"modified": modified})


@blueprint_blockpy.route('/load_file/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_file', methods=['GET', 'POST'])
def load_file():
    return False
    """
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
        """


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
        submission.history = process_history([h['time']
                                              for h in reversed(submission.get_history())])
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


HISTORY_PAGE_LIMIT = 250


@blueprint_blockpy.route('/browse_history/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/browse_history', methods=['GET', 'POST'])
@require_request_parameters("assignment_id", "course_id", "user_id")
def browse_history():
    # Get parameters
    course_id = maybe_int(request.values.get('course_id'))
    assignment_id = maybe_int(request.values.get('assignment_id'))
    student_id = maybe_int(request.values.get('user_id'))
    page_offset = maybe_int(request.values.get('page_offset', 0))
    user, user_id = get_user()
    # Get resources
    assignment = Assignment.by_id(assignment_id)
    student = User.by_id(student_id)
    course = Course.by_id(course_id)
    # Verify user can see the submission
    if user_id != student_id and not user.is_grader(course_id):
        return ajax_failure("Only graders can see logs for other people.")
    history = Log.get_history(course_id, assignment_id, student_id,
                              page_offset, HISTORY_PAGE_LIMIT)
    return render_template('blockpy/browse_history.html', assignment=assignment,
                           student=student, course=course, history=history)


@blueprint_blockpy.route('/list_urls/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/list_urls', methods=['GET', 'POST'])
def list_urls():
    partial = request.values.get('partial', "")
    # TODO: Allow filtering by course?
    course_id = maybe_int(request.values.get('course_id'))
    # Do action
    return jsonify(success=True, urls=Assignment.list_urls(partial)[:5])
