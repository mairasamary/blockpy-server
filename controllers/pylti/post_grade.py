from flask import Blueprint, url_for, session, request, jsonify, g, render_template, redirect, Response, \
    send_from_directory
from common.urls import normalize_url
from common.filesystem import ensure_dirs
from controllers.auth import get_user
from controllers.helpers import (ajax_failure, parse_assignment_load, require_request_parameters,
                                 get_course_id, maybe_int, check_resource_exists, ajax_success,
                                 login_required, require_course_instructor, require_course_grader, maybe_bool,
                                 make_log_entry)
from models.assignment_group import AssignmentGroup
from models.course import Course


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


def get_outcomes(submission, assignment_group_id, user_id, course_id) -> 'Tuple[float, str]':
    if assignment_group_id is None:
        score = round(submission.full_score(), 2)
        # url = url_for('blockpy.view_submission', _external=True, embed=True,
        #              submission_id=submission.id)
        url = url_for("assignments.load", _external=True, embed=True,
                      submission_id=submission.id, grade_mode="single")
    else:
        group, assignments, submissions = get_groups_submissions(assignment_group_id, user_id, course_id)
        total, possible = calculate_submissions_score(assignments, submissions)
        score = round(total / possible, 2)
        # url = url_for('blockpy.view_submissions', _external=True, embed=True,
        #              assignment_group_id=assignment_group_id, course_id=course_id,
        #              user_id=user_id)
        url = url_for("assignments.load", _external=True, embed=True,
                      assignment_group_id=assignment_group_id,
                      course_id=course_id, grade_mode="group", graded_user_id=user_id,
                      #single_arg_hack=f"true-group-{assignment_group_id}-{course_id}-{user_id}"
                      )
        # TODO: Add a parameter to control turning off this hideous hack for properly
        #       setup canvas environments.
                      #assignment_group_id=assignment_group_id, course_id=course_id,
                      #embed=True, grade_mode="group", user_id=user_id
    return score, url


def create_grade_post(submission, lis_result_sourcedid, assignment_group_id, user_id, course_id,
                      use_course_service_url=False):
    total_score, view_url = get_outcomes(submission, assignment_group_id, user_id, course_id)
    lis_result_sourcedid = submission.endpoint if lis_result_sourcedid is None else lis_result_sourcedid
    if 'lis_outcome_service_url' not in session or use_course_service_url:
        course = Course.by_id(course_id)
        # TODO: Should this be changed?
        if course.endpoint:
            lis_outcome_service_url = course.endpoint
        else:
            lis_outcome_service_url = session.get('lis_outcome_service_url')
    else:
        lis_outcome_service_url = session['lis_outcome_service_url']
    return total_score, view_url, lis_result_sourcedid, lis_outcome_service_url, submission.assignment.reviewed
