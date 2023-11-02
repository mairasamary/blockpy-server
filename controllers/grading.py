from datetime import datetime
import os
import csv
import json
import io
from pprint import pprint
from typing import Tuple

from flask.views import MethodView
from slugify import slugify
from natsort import natsorted

from flask import Blueprint, url_for, session, request, jsonify, g, render_template, redirect, make_response

from controllers.blockpy import lti_post_grade
from controllers.pylti.common import LTIPostMessageException
from controllers.pylti.post_grade import create_grade_post
from main import app

from models.review import Review
from models.submission import Submission, GradingStatuses
from models.course import Course

from controllers.helpers import (normalize_url,
                                 ensure_dirs, ajax_failure, parse_assignment_load, require_request_parameters,
                                 get_course_id, maybe_int, get_user, check_resource_exists, ajax_success,
                                 login_required, require_course_instructor, require_course_grader, maybe_bool,
                                 make_log_entry)
from utilities import highlight_python_code
from models.user import User

blueprint_grading = Blueprint('grading', __name__, url_prefix='/grading')


@blueprint_grading.route('/static/<path:path>', methods=['GET', 'POST'])
def grading_static(path):
    return app.send_static_file(path)


@blueprint_grading.route('/update_grading_status', methods=['POST'])
def update_grading_status():
    submission_id = maybe_int(request.values.get("submission_id"))
    # TODO: Pretty sure multiple assignments are broken for grading
    assignment_group_id = maybe_int(request.values.get('assignment_group_id'))
    new_grading_status = request.values.get("new_grading_status", GradingStatuses.FULLY_GRADED)
    user, user_id = get_user()
    submission = Submission.by_id(submission_id)
    # Check resource exists
    check_resource_exists(submission, "Submission", submission_id)
    # Verify permissions
    if not user.is_grader(submission.course_id):
        return ajax_failure("This is not your submission and you are not a grader in its course.")
    submission.update_grading_status(new_grading_status)
    if submission.grading_status != GradingStatuses.FULLY_GRADED:
        return ajax_success({'new_status': new_grading_status, "new_status_human": submission.human_grading_status()})
    # Do action
    if assignment_group_id is None:
        assignment_group_id = submission.assignment_group_id
    if not g.lti:
        return ajax_success({"submitted": False, "new_status": "FullyGraded", "new_status_human": submission.human_grading_status()})
    error = "Generic LTI Failure - perhaps not logged into LTI session?"
    post_params = create_grade_post(submission, None, assignment_group_id, submission.user_id, submission.course_id,
                                    True)
    try:
        success, total_score = lti_post_grade(g.lti, *post_params)
    except LTIPostMessageException as e:
        success = False
        error = str(e)
    if success:
        make_log_entry(submission.assignment_id, submission.assignment_version,
                       submission.course_id, user_id, "X-Submission.LMS", "answer.py", message=str(total_score))
        return ajax_success({"submitted": True, "new_status": "FullyGraded", "new_status_human": submission.human_grading_status()})
    else:
        submission.update_grading_status(GradingStatuses.FAILED)
        make_log_entry(submission.assignment_id, submission.assignment_version,
                       submission.course_id, user_id, "X-Submission.LMS.Failure", "answer.py", message=error)
        return ajax_failure({"submitted": False, "message": error, "new_status": "Failed", "new_status_human": submission.human_grading_status()})


@blueprint_grading.route('/update_submission_status', methods=['POST'])
def update_submission_status():
    submission_id = maybe_int(request.values.get("submission_id"))
    new_submission_status = request.values.get("new_submission_status")
    user, user_id = get_user()
    submission = Submission.by_id(submission_id)
    # Check resource exists
    check_resource_exists(submission, "Submission", submission_id)
    # Verify permissions
    if not user.is_grader(submission.course_id):
        return ajax_failure("You are not a grader in this submission's course.")
    submission.update_submission_status(new_submission_status)
    return ajax_success({'new_status': new_submission_status, 'new_status_human': submission.human_submission_status()})


@blueprint_grading.route('/mass_close_assignment', methods=['GET', 'POST'])
def mass_close_assignment():
    assignment_id = maybe_int(request.values.get("assignment_id"))
    course_id = maybe_int(request.values.get("course_id"))
    new_submission_status = request.values.get("new_submission_status")
    skip_unchanged = maybe_bool(request.values.get("skip_unchanged"))
    user, user_id = get_user()
    submissions = Submission.by_assignment(assignment_id=assignment_id, course_id=course_id)
    # Verify permissions
    if not user.is_grader(course_id):
        return ajax_failure("You are not a grader in this course.")
    # Do action
    changed = []
    for submission, student, assignment in submissions:
        if not skip_unchanged or submission.version:
            submission.update_submission_status(new_submission_status)
            changed.append(student.id)
    return ajax_success({'new_status': new_submission_status, "students": changed})


def get_request_list(name: str, default=None, element_conversion=int):
    if name in request.values:
        values = request.values.get(name).split(",")
        converted = []
        for value in values:
            try:
                if element_conversion:
                    converted.append(element_conversion(value))
                else:
                    converted.append(value)
            except ValueError:
                ajax_failure(f"Invalid value for {name}: {value}")
        return converted
    if default is None:
        return []
    return default

@blueprint_grading.route('/get_grading_spreadsheet/', methods=['GET', 'POST'])
@blueprint_grading.route('/get_grading_spreadsheet', methods=['GET', 'POST'])
@login_required
def get_grading_spreadsheet():
    course_ids = get_request_list('course_ids')
    assignment_ids = get_request_list('assignment_ids')
    assignment_group_ids = get_request_list('assignment_group_ids')
    student_ids = get_request_list('student_ids')
    role_names = get_request_list('role_names', element_conversion=str)
    user, user_id = get_user()
    # Verify existence and permissions of courses
    courses = {}
    for course_id in course_ids:
        course = Course.by_id(course_id)
        check_resource_exists(course, "Course", course_id)
        if not user.is_grader(course_id):
            return ajax_failure(f"You are not a grader in the course {course_id}.")
        courses[course_id] = course
    # Get data
    submissions = [submission for course in courses.values()
                   for submission in course.get_filtered_submissions(assignment_ids=assignment_ids,
                                                      assignment_group_ids=assignment_group_ids,
                                                      student_ids=student_ids,
                                                      role_names=role_names)]
    # Create spreadsheet
    with io.StringIO() as f:
        cw = csv.writer(f)
        cw.writerows([["Course", "Group", "Assignment", "Student", "Role", "Email",
                      "Correct", "Raw Score", "Full Score", "Reviews", "Status", "Submission Status", "Grading Status",
                        "Edit Count", "Date Created", "Date Modified", "Extra Files",
                      "Course ID", "Group ID", "Assignment ID", "User ID",
                       "Assignment Type",
                      ]])
        cw.writerows([[submission.course.name, submission.assignment_group.name, submission.assignment.name, submission.user.name(),
                       ",".join([role.name for role, user in User.get_user_role(submission.course_id, submission.user_id)]),
                       submission.user.email,
                       submission.correct, submission.score, submission.full_score(), len(submission.get_reviews()),
                       submission.full_status(False), submission.submission_status, submission.grading_status,
                        submission.version, submission.date_created, submission.date_modified, submission.extra_files,
                       submission.course_id, submission.assignment_group_id, submission.assignment_id, submission.user_id,
                       submission.assignment.type
                       ]
                      for submission in submissions])
        output = make_response(f.getvalue())
        filename = make_grading_spreadsheet_filename(course_ids, assignment_ids, assignment_group_ids, student_ids, role_names)
        output.headers["Content-Disposition"] = f"attachment; filename={filename}.csv"
        output.headers["Content-type"] = "text/csv"
        return output


def make_grading_spreadsheet_filename(course_ids, assignment_ids, assignment_group_ids, student_ids, role_names):
    parts = []
    if course_ids:
        parts.append(f"c{'-'.join([str(course_id) for course_id in course_ids])}")
    if assignment_ids:
        parts.append(f"a{'-'.join([str(assignment_id) for assignment_id in assignment_ids])}")
    if assignment_group_ids:
        parts.append(f"g{'-'.join([str(assignment_group_id) for assignment_group_id in assignment_group_ids])}")
    if student_ids:
        parts.append(f"s{'-'.join([str(student_id) for student_id in student_ids])}")
    if role_names:
        parts.append(f"r{'-'.join([role_name for role_name in role_names])}")
    return f"grading_spreadsheet_{'_'.join(parts)}.csv"

def fix_nullables(review_data):
    for nullable in ['score', 'tag_id', 'forked_id', 'submission_id']:
        if nullable not in review_data or review_data[nullable] in (None, '', 'null'):
            review_data[nullable] = None


def normalize_score(score: str) -> float:
    try:
        score = score.replace("%", "")
        return float(score)
    except:
        return score


class ReviewAPI(MethodView):

    def get(self, review_id):
        if review_id is None:
            return self.get_all()
        else:
            return self.get_one(review_id)

    def get_all(self):
        submission_id = maybe_int(request.values.get('submission_id'))
        user, user_id = get_user()
        if submission_id is None:
            reviews = Review.get_generic_reviews()
        else:
            submission = Submission.by_id(submission_id)
            check_resource_exists(submission, "Submission", submission_id)
            reviews = Review.get_for_submission(submission_id)
            if submission.user_id != user_id:
                require_course_grader(user, submission.course_id)
        return ajax_success(dict(reviews=[review.encode_json() for review in reviews]))

    def get_one(self, review_id):
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        if submission.user_id != user_id:
            require_course_grader(user, submission.course_id)
        return ajax_success(dict(review=review.encode_json()))

    def post(self):
        user, user_id = get_user()
        submission_id = maybe_int(request.values.get('submission_id'))
        submission = Submission.by_id(submission_id)
        check_resource_exists(submission, "Submission", submission_id)
        require_course_grader(user, submission.course_id)
        review_data = request.values.copy()
        del review_data['id']
        review_data['author_id'] = user_id
        review_data['submission_version'] = submission.version
        review_data['assignment_version'] = submission.assignment_version
        fix_nullables(review_data)
        review_data['score'] = normalize_score(review_data['score'])
        new_review = Review.new(review_data)
        return ajax_success(dict(review=new_review.encode_json()))


    def put(self, review_id):
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        require_course_grader(user, submission.course_id)
        review_data = request.json.copy()
        del review_data['id']
        fix_nullables(review_data)
        review_data['score'] = normalize_score(review_data['score'])
        review_data['author_id'] = user_id
        edited_review = review.edit(review_data)
        return ajax_success(dict(review=edited_review.encode_json()))

    def delete(self, review_id):
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        require_course_grader(user, submission.course_id)
        review.delete()
        return ajax_success(dict(success=True))


review_view = ReviewAPI.as_view('review_api')
blueprint_grading.add_url_rule('/review/', defaults={'review_id': None},
                               view_func=review_view, methods=['GET'])
blueprint_grading.add_url_rule('/review/', view_func=review_view, methods=['POST'])
blueprint_grading.add_url_rule('/review/<int:review_id>', view_func=review_view,
                               methods=['GET', 'PUT', 'DELETE'])
