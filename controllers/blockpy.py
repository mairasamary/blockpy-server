from datetime import datetime
import time
import os
import json
from typing import Tuple

from slugify import slugify
from natsort import natsorted

from flask import Blueprint, url_for, session, request, jsonify, g, render_template, redirect, Response, \
    send_from_directory
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
    course_id = get_course_id(True)
    user, user_id = get_user()
    submission = Submission.by_id(submission_id)
    read_only = maybe_bool(request.values.get('read_only', "true"))
    # Check that the resource exists
    check_resource_exists(submission, "Submission", submission_id)
    # If it is this user's submission, redirect to load the assignment
    if submission.user_id == user_id:
        if course_id is None:
            course_id = submission.course_id
        return redirect(url_for('blockpy.load', assignment_id=submission.assignment.id,
                                course_id=course_id))
    # Check that it is public or you are a grader
    elif user.is_grader(submission.course_id):
        role = 'grader'
    elif not submission.assignment.public:
        # TODO: Handle this more gracefully
        return ajax_failure(
            "Cannot view submission. This is not a public submission, and you do not own the submission, and you are "
            "not an instructor in its course.")
    else:
        role = 'anonymous'
    # Get the assignment
    assignment_data = submission.assignment.for_editor(submission.user_id, submission.course_id)
    return load_editor(lti, {
        "user": user,
        "user_id": user_id,
        "embed": embed,
        "read_only": read_only,
        "current_submission_id": submission_id,
        "course_id": course_id,
        "role": role,
        "assignment_group_id": None,
        "assignment_data": assignment_data
    })


@blueprint_blockpy.route('/load_readonly/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_readonly', methods=['GET', 'POST'])
def load_readonly(lti=lti):
    embed = maybe_bool(request.values.get('embed'))
    user, user_id = get_user()
    assignment_data = json.loads(request.values.get("assignment_data", "{}"))
    # Handle Passcode
    # Handle IP Addresses
    #print(assignment_data)
    return load_editor(lti, {
        "user": user,
        "user_id": user_id,
        "embed": embed,
        "read_only": True,
        "current_submission_id": None,
        "course_id": None,
        "role": assignment_data.get('user', {}).get('role', 'owner'),
        "assignment_group_id": None,
        "assignment_data": assignment_data
    })


def parse_form_data(fields):
    result = {}
    current = result
    for key, value in fields:
        keys = key.split(".")
        for subkey in keys[:-1]:
            if subkey not in current:
                current[subkey] = {}
            current = current[subkey]
        current[keys[-1]] = value
        current = result
    return result


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
    quiz_questions, readings, textbooks = [], [], []
    for assignment in editor_information.get('assignments', []):
        if assignment.type == 'quiz':
            quiz_questions.append(assignment.id)
        elif assignment.type == 'reading':
            readings.append(assignment.id)
        elif assignment.type == 'textbook':
            textbooks.append(assignment.id)
    return render_template('blockpy/editor.html', lti=lti, ip=request.remote_addr,
                           quiz_questions=quiz_questions, readings=readings,
                           textbooks=textbooks,
                           **editor_information)


@blueprint_blockpy.route('/load_assignment/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_assignment', methods=['GET', 'POST'])
@require_request_parameters('assignment_id')
def load_assignment(lti=lti):
    # Get arguments
    assignment_id = int(request.values.get('assignment_id'))
    assignment = Assignment.by_id(assignment_id)
    student_id = maybe_int(request.values.get('user_id'))
    course_id = get_course_id(True)
    user, user_id = get_user()
    force_download = maybe_bool(request.values.get('force_download', "false"))
    force_quiz = maybe_bool(request.values.get("force_quiz", "false"))
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    if user_id != student_id and not user.is_grader(course_id):
        return ajax_failure("Only graders can see submissions for other people.")
    is_quiz = force_quiz or (assignment.type == 'quiz' and not user.is_grader(course_id))
    if course_id is None:
        editor_information = assignment.for_read_only_editor(student_id, is_quiz)
    else:
        editor_information = assignment.for_editor(student_id, course_id, is_quiz)
        browser_info = json.dumps({
            'platform': request.user_agent.platform,
            'browser': request.user_agent.browser,
            'version': request.user_agent.version,
            'language': request.user_agent.language,
            'user_agent': request.user_agent.string,
            'ip_address': request.remote_addr
        })
        # Log the event
        if user is not None:
            if user_id != student_id:
                make_log_entry(assignment_id, assignment.version, course_id,
                               user_id, 'X-Submission.Get', message=str(student_id))
            else:
                make_log_entry(assignment_id, assignment.version, course_id,
                               user_id, 'Session.Start', message=browser_info)
    # Verify passcode, if necessary
    if assignment.passcode_fails(request.values.get('passcode')):
        return ajax_failure("Passcode {!r} rejected".format(request.values.get("passcode")))

    if force_download:
        student_filename = User.by_id(student_id).get_filename("")
        filename = assignment.get_filename("") + "_"+student_filename+'_submission.json'
        return Response(json.dumps(editor_information), mimetype='application/json',
                        headers={'Content-Disposition': 'attachment;filename={}'.format(filename)})
    else:
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
    part_id = request.values.get("part_id")
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
    new_code = submission.save_code(filename, code, part_id)
    make_log_entry(submission.assignment_id, submission.assignment_version,
                   course_id, user.id, "File.Edit", filename + ("#"+part_id if part_id else ""), message=new_code)
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
        require_course_grader(user, assignment.course_id, allow_fork=course_id)
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
    assignment_id = (request.values.get('assignment_id'))
    student_id = (request.values.get('user_id'))
    page_limit = maybe_int(request.values.get('page_limit'))
    page_offset = maybe_int(request.values.get('page_offset'))
    with_submission = maybe_bool(request.values.get('with_submission'))
    user, user_id = get_user()
    # Verify user can see the submission
    if str(user_id) != str(student_id) and not user.is_grader(course_id):
        return ajax_failure("Only graders can see logs for other people.")
    history = Log.get_history(course_id, assignment_id, student_id,
                                            page_offset=page_offset,
                                            page_limit=page_limit)
    history = list(reversed(history))
    submissions = []
    if with_submission:
        submissions = Submission.get_submissions(course_id, assignment_id, student_id)
    return ajax_success({"history": history, "submissions": submissions})


@blueprint_blockpy.route('/log_event/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/log_event', methods=['GET', 'POST'])
@require_request_parameters('event_type')
@login_required
def log_event(lti=lti):
    course_id = get_course_id()
    user, user_id = get_user()
    assignment_id = request.values.get('assignment_id')
    assignment_version = request.values.get('assignment_version') or 0
    event_type = request.values.get("event_type")
    file_path = request.values.get("file_path", "")
    category = request.values.get('category', "")
    label = request.values.get('label', "")
    message = request.values.get('message', "")
    # Make the entry
    if None in (assignment_id, course_id, user_id) or '' in (assignment_id, course_id, user_id):
        return ajax_failure(f"Missing either course_id ({course_id}, user ({user_id}), or assignment_id ({assignment_id}.")
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
    total_possible = sum(assignment.get_points() for assignment in assignments)
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
            return ajax_failure(f"No submission for the given course, user, and group.")
        elif submission.user_id != viewer_id:
            if not viewer.is_grader(submission.course_id):
                return ("<h3>↑ The submission could not be loaded. If you "
                        "are loading this assignment through the Grades menu in Canvas, then you can click "
                        "the link directly above to open your latest submission. If you want to edit your submission "
                        "assignment, then use the link at the top of the page to open the assignment.</h3>"
                        "<br><br><br><h3>If you are not in Canvas, then you may not have Grader permissions "
                        "for this course, or this might not be your submission.</h3>")
    # Do action
    points_total, points_possible = calculate_submissions_score(assignments, submissions)
    if points_possible:
        score = round(points_total / points_possible, 2)
    else:
        score = 0
    # TODO: Handle tags
    is_grader = viewer.is_grader(course_id)
    tags = []
    if is_grader:
        tags = [tag.encode_json() for tag in AssignmentTag.get_all()]
    for a, s in zip(assignments, submissions):
        make_log_entry(a.id, a.version,
                       course_id, user_id, "X-View.Submission", "answer.py",
                       category="group",
                       message=json.dumps({"viewer": viewer_id}))
    return render_template("reports/group.html", embed=embed,
                           points_total=points_total, points_possible=points_possible,
                           score=score, tags=tags, is_grader=is_grader,
                           assignment_group=group,
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
    make_log_entry(submission.assignment, submission.assignment_version,
                   submission.course_id, submission.user_id, "X-View.Submission", "answer.py",
                   category="single",
                   message=json.dumps({"viewer": viewer_id}))
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
    # If quiz, then update the settings
    quiz = submission.regrade_if_quiz()
    if quiz:
        if quiz.graded_successfully:
            score, correct, feedbacks = quiz.score, quiz.correct, quiz.feedbacks
        else:
            submission.update_grading_status(GradingStatuses.FAILED)
            make_log_entry(submission.assignment_id, submission.assignment_version,
                           course_id, user_id, "X-Quiz.Grade.Failure", "answer.py", message=quiz.error)
            return ajax_failure({"submitted": False, "changed": False, "correct": submission.correct,
                                 "message": quiz.error, "feedbacks": quiz.feedbacks,
                                 'submission_status': submission.submission_status,
                                 "grading_status": submission.grading_status})
    else:
        feedbacks = {}

    # Do action
    was_changed = submission.update_submission(score, correct)
    if assignment_group_id is None:
        assignment_group_id = submission.assignment_group_id
    # TODO: Document that we currently only pass back grade if it changed
    # TODO: If failure on previous submission grading, then retry
    if was_changed or force_update:
        submission.save_block_image(image)
        if submission.user.is_grader():
            return ajax_success({"submitted": False, "changed": was_changed, "correct": correct,
                                 "feedbacks": feedbacks, 'submission_status': submission.submission_status,
                                 "grading_status": submission.grading_status,
                                 "message": "Submission user is grader, cannot submit to LMS."})
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
            return ajax_failure({"submitted": False, "changed": was_changed, "correct": correct,
                                 "message": error, "feedbacks": feedbacks, 'submission_status': submission.submission_status,
                                 "grading_status": submission.grading_status})
    return ajax_success({"submitted": was_changed or force_update, "changed": was_changed, "correct": correct,
                         "feedbacks": feedbacks, 'submission_status': submission.submission_status,
                         "grading_status": submission.grading_status})


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


@blueprint_blockpy.route('/upload_file/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/upload_file', methods=['GET', 'POST'])
@require_request_parameters('placement', 'directory')
def upload_file():
    # Get parameters
    placement = request.values.get('placement')
    directory = request.values.get('directory')
    filepond_mode = False
    if 'filename' not in request.values and 'filepond' in request.files:
        contents = request.files.get('filepond')
        filename = secure_filename(contents.filename)
        filepond_mode = True
    else:
        filename = secure_filename(request.values.get('filename'))
        contents = request.files.get('contents')
    delete = maybe_bool(request.values.get('delete', 'False'))
    user, user_id = get_user()
    if None in (placement, directory, filename, contents):
        return ajax_failure("No placement, directory, filename, contents given!")
    if placement not in ("global", "course", "assignment", "submission", "user"):
        return ajax_failure(f"Invalid placement: {placement!r}")
    files_folder = os.path.join(app.config['UPLOADS_DIR'], 'files', placement)
    # Check file size
    contents.seek(0, os.SEEK_END)
    file_length = contents.tell()
    contents.seek(0, 0)
    if app.config["MAXIMUM_CODE_SIZE"] < file_length:
        return ajax_failure(
            "Maximum size of file exceeded. Current limit is {}, you uploaded {} characters.".format(
                app.config["MAXIMUM_CODE_SIZE"], file_length
            ))
    # Global file
    if placement == "global" and not user.is_admin():
        return ajax_failure(f"Invalid permissions to upload global file. User is not an admin.")
    # Course file
    if placement == "course":
        course = Course.by_id(directory)
        if not course:
            return ajax_failure(f"Course {directory} does not exist.")
        if not user.is_instructor(course_id=course.id) and not user.is_admin():
            return ajax_failure(f"You do not have sufficient permissions to upload files for this course.")
    # Assignment file
    if placement == "assignment":
        assignment = Assignment.by_id(directory)
        if not assignment:
            return ajax_failure(f"Assignment {directory} does not exist.")
        if not user.is_instructor(course_id=assignment.course_id) and not user.is_admin():
            return ajax_failure(f"You do not have sufficient permissions to upload files for this assignment's course ({assignment.course_id}).")
    # Submission file
    if placement == "submission":
        submission = Submission.by_id(directory)
        if not submission:
            return ajax_failure(f"Submission {directory} does not exist.")
        if user_id != submission.user_id and not user.is_instructor(submission.course_id) and not user.is_admin():
            return ajax_failure(
                f"You do not have sufficient permissions to upload files for this submission; you must either own it or be an instructor in its course.")
    # User file
    if placement == "user":
        folder_user = User.by_id(directory)
        if not folder_user:
            return ajax_failure(f"User {directory} does not exist.")
        if user_id != folder_user.id and not user.is_admin():
            return ajax_failure(f"You do not have permissions to upload files for this user.")
    # Okay, we got this far, create it!
    files_folder = os.path.join(files_folder, secure_filename(directory))
    ensure_dirs(files_folder)
    file_path = os.path.join(files_folder, secure_filename(filename))
    if delete:
        if os.path.exists(file_path):
            try:
                os.remove(file_path)
                return jsonify(success=True, ip=request.remote_addr)
            except Exception as e:
                app.logger.info(f"Could not delete file {file_path} because: {e}")
                return ajax_failure(f"Could not delete the file!")
    else:
        try:
            contents.save(file_path)
            endpoint = url_for("blockpy.download_file", _external=True,
                               placement=placement, directory=directory, filename=filename)
            if filepond_mode:
                return endpoint
            return ajax_success({"success": True, "endpoint": endpoint})
        except IOError as e:
            return ajax_failure(str(e))


@blueprint_blockpy.route('/download_file/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/download_file', methods=['GET', 'POST'])
@require_request_parameters('placement', 'directory', 'filename')
def download_file():
    """
    Files are not private. Anyone can see them if you upload them.

    :return:
    """
    # Get parameters
    placement = request.values.get('placement')
    directory = request.values.get('directory')
    filename = secure_filename(request.values.get('filename'))
    user, user_id = get_user()
    if None in (placement, directory, filename):
        return ajax_failure("No placement, directory, filename given!")
    if placement not in ("global", "course", "assignment", "submission", "user"):
        return ajax_failure(f"Invalid placement: {placement!r}")
    # app.config['UPLOADS_DIR']
    files_folder = "/".join(('uploads', 'files', placement))
    # Okay, we got this far, create it!
    file_path = "/".join((files_folder, secure_filename(directory), filename))
    return send_from_directory(
        app.static_folder, file_path, attachment_filename=filename
    )


@blueprint_blockpy.route('/list_files/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/list_files', methods=['GET', 'POST'])
@require_request_parameters('submission_id')
def list_files():
    submission_id = maybe_int(request.values.get("submission_id"))
    global_directory = request.values.get('global_directory', 'any')
    only_placements = {p for p in request.values.get('only_placements', '').split(',') if p}
    course_id = get_course_id()
    user, user_id = get_user()
    # Get submission
    submission = Submission.by_id(submission_id)
    check_resource_exists(submission, "Submission", submission_id)
    # Get assignment
    assignment = Assignment.by_id(submission.assignment_id)
    check_resource_exists(assignment, "Assignment", submission.assignment_id)
    # Get all possible file placements
    placements = [('global', 'global', global_directory),
                  ('user', 'user', user_id),
                  ('submission user', 'user', submission.user_id),
                  ('given course', 'course', course_id),
                  ('submission course', 'course', submission.course_id),
                  ('assignment course', 'course', assignment.course_id),
                  ('assignment', 'assignment', assignment.id),
                  ('submission', 'submission', submission.id)]
    file_lists = {}
    for name, placement, directory in placements:
        if only_placements and placement not in only_placements:
            continue
        files_folder = os.path.join(app.config['UPLOADS_DIR'], 'files', placement, str(directory))
        if os.path.exists(files_folder):
            for filename in os.listdir(files_folder):
                if name not in file_lists:
                    file_lists[name] = []
                url = url_for('blockpy.download_file', placement=placement, directory=directory, filename=filename)
                file_lists[name].append([filename, url])
    return ajax_success({"success": True, "files": file_lists})

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
    print(relative_image_path)
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
        # TODO: New workflow for "Forking" the assignment
        """It looks like you want to edit this assignment, but you are not an instructor
        or designer in the course that owns it ("Course Name"). Would you like to fork
        this assignment (or its entire group) so that you can save your modifications?
        
        You will need to update the Launch URL in the assignments' settings on Canvas!
        ([How do I do that?])
        
        [Fork just this assignment]
        [Fork entire assignment group]
        [Cancel]"""
        require_course_grader(user, assignment.course_id, allow_fork=course_id)
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
    if "points" in request.values:
        updates['points'] = maybe_int(request.values.get('points'))
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
    embed = maybe_bool(request.values.get('embed'))
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
                           student=student, course=course, history=history,
                           embed=embed)


@blueprint_blockpy.route('/list_urls/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/list_urls', methods=['GET', 'POST'])
def list_urls():
    partial = request.values.get('partial', "")
    # TODO: Allow filtering by course?
    course_id = maybe_int(request.values.get('course_id'))
    # Do action
    return jsonify(success=True, urls=Assignment.list_urls(partial)[:5])


@blueprint_blockpy.route('/fork_assignment/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/fork_assignment', methods=['GET', 'POST'])
@login_required
def fork_assignment(lti=lti):
    assignment_id = request.values.get('assignment_id')
    assignment_group_id = request.values.get('assignment_group_id')
    if assignment_id is None and assignment_group_id is None:
        return ajax_failure("No Assignment or Assignment Group ID given!")
    user, user_id = get_user()
    course_id = get_course_id()
    updated_settings = request.values.get('updated_settings', '')
    transfer_submissions = maybe_bool(request.values.get('transfer_submissions', False))
    # Verify permissions: They only need to be an instructor in this course
    require_course_instructor(user, course_id)
    # Load and verify resources
    if assignment_group_id:
        group = AssignmentGroup.query.get(assignment_group_id)
        check_resource_exists(group, "AssignmentGroup", assignment_group_id)
        # Create forked group, assignment, memberships
        new_group, new_assignments = group.fork()
    else:
        assignment = Assignment.query.get(assignment_id)
        check_resource_exists(assignment, "Assignment", assignment_id)
        # Create forked assignment, set it as target
        new_assignments = [assignment.fork(user_id, course_id)]
    # Transfer all submissions, if desired
    if transfer_submissions:
        for new_assignment in new_assignments:
            # TODO: Need old assignment IDs
            submission = Submission.by_assignment(new_assignment.id, course_id)
            submission.edit({'assignment_id': new_assignment.id})
            # TODO: Also need to grab this for Log, Review
    # TODO: Parse updated settings for the assignment_id, if it's not None

    # TODO: Perform update
    modified = assignment.edit(updated_settings)
    # TODO: Log
    make_log_entry(assignment.id, assignment.version,
                   course_id or assignment.course_id,
                   user.id, "X-Instructor.Settings.Edit", "assignment_settings.blockpy",
                   message=json.dumps(updated_settings))
    return ajax_success({"modified": modified})


@blueprint_blockpy.route('/get_recent_logs_for_course/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_recent_logs_for_course', methods=['GET', 'POST'])
@require_request_parameters("course_id")
def get_recent_logs_for_course():
    # Get parameters
    course_id = maybe_int(request.values.get('course_id'))
    duration_amount = maybe_int(request.values.get('duration_amount', 1))
    duration_type = request.values.get('duration_type', 'days')
    embed = maybe_bool(request.values.get('embed'))
    user, user_id = get_user()
    # Get resources
    course = Course.by_id(course_id)
    # Verify user is a grader
    if not user.is_grader(course_id):
        return ajax_failure("Only graders can see logs for the entire course.")
    history = Log.get_recent_logs_for_course(course_id, duration_amount, duration_type)
    return ajax_success({'history': history})


@blueprint_blockpy.route('/recent_submissions/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/recent_submissions', methods=['GET', 'POST'])
@login_required
def recent_submissions():
    ''' List all recent submissions in this course visible to the given user '''
    # Get the grader
    user, user_id = get_user()
    # Get the user
    student_email = request.values.get('email')
    student, student_id = None, None
    if student_email:
        student = User.find_student(student_email)
        if student:
            student_id = student.id
    else:
        student_id = maybe_int(request.values.get('id'))
        if student_id:
            student = User.by_id(student_id)

    # Get their submissions
    if student and student_id:
        submissions = Submission.all_by_student(student_id)
        # Filter by permissions
        submissions = [
            (s, u, a, Course.by_id(s.course_id)) for s, u, a in submissions
            if g.user.is_grader(int(s.course_id))
        ]
        submissions = sorted(submissions, key=lambda suac: suac[0].date_modified, reverse=True)
        if submissions:
            return render_template('blockpy/recent_submissions.html', submissions=submissions, student=student)
    return "Access denied for that user, or user not found. Check spelling!"


@blueprint_blockpy.route('/estimate_duration/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/estimate_duration', methods=['GET', 'POST'])
@require_request_parameters("submission_id")
def estimate_duration():
    # Get parameters
    submission_id = maybe_int(request.values.get('submission_id'))
    user, user_id = get_user()
    # Get resources
    submission = Submission.by_id(submission_id)
    check_resource_exists(submission, "Submission", submission_id)
    # Verify user is a grader
    if not user.is_grader(submission.course_id) and user_id != submission.user_id:
        return ajax_failure("Only graders or the assignment owner can see their submission duration estimate.")
    return ajax_success({'duration': submission.estimate_duration()})
