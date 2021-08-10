import json

import flask_security
from flask import Blueprint, request, Response, jsonify, abort

from controllers.helpers import get_course_id, get_user, check_resource_exists, require_request_parameters
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.course import Course
from models.portation import export_bundle, import_bundle
from models.user import User

blueprint_api = Blueprint('api', __name__, url_prefix='/api')


@blueprint_api.route('/test/', methods=['GET'])
@blueprint_api.route('/test', methods=['GET'])
def test():
    return jsonify("success")


def load_api_user():
    email = request.json.get('email')
    password = request.json.get('password')
    if email is None or password is None:
        abort(400, "Missing email or password arguments")  # missing arguments
    user = User.find_student(email)
    if not user:
        abort(400, "No user with email '{}' found.".format(email))  # Could not find user
    if not flask_security.utils.verify_password(password, user.password):
        abort(400, "Password verification failed.")
    return user


@blueprint_api.route('/list/courses/', methods=['GET', 'POST'])
@blueprint_api.route('/list/courses', methods=['GET', 'POST'])
def list_courses():
    user = load_api_user()
    courses = user.get_editable_courses()
    return jsonify(courses=[course.encode_json() for course in courses])


@blueprint_api.route('/export/', methods=['GET', 'POST'])
@blueprint_api.route('/export', methods=['GET', 'POST'])
def export():
    user = load_api_user()
    assignment_url = request.json.get("assignment_url")
    assignment_id = request.json.get("assignment_id")
    if assignment_id or assignment_url:
        if assignment_url:
            assignment = Assignment.by_url(assignment_url)
        else:
            assignment = Assignment.by_id(assignment_id)
        check_resource_exists(assignment, "Assignment", assignment_id or assignment_url)
        if not user.is_instructor(assignment.course_id):
            return abort(400, "Not an instructor in this assignments' course.")
        return json.dumps(export_bundle(assignments=[assignment]))
    group_id = request.json.get("assignment_group_id")
    if group_id:
        assignment_group = AssignmentGroup.by_id(group_id)
        assignments = assignment_group.get_assignments()
        memberships = assignment_group.get_memberships()
        if not user.is_instructor(assignment_group.course_id):
            return abort(400, "Not an instructor in this assignment group's course.")
        for assignment in assignments:
            if not user.is_instructor(assignment.course_id):
                return abort(400, "Not an instructor in this assignments' course.")
        bundle = export_bundle(groups=[assignment_group], assignments=assignments,
                               memberships=memberships)
        return json.dumps(bundle)
    course_id = request.json.get("course_id")
    if course_id:
        if not user.is_instructor(course_id):
            return abort(400, "Not an instructor in this course.")
        course = Course.by_id(course_id)
        groups = course.get_assignment_groups()
        assignment_and_memberships = course.get_assignments()
        assignments = [a for a, m in assignment_and_memberships]
        memberships = [m for a, m in assignment_and_memberships]
        bundle = export_bundle(groups=groups, assignments=assignments,
                               memberships=memberships)
        return json.dumps(bundle)
    abort(400, "No assignment_id or assignment_group_id given")


@blueprint_api.route('/import/', methods=['GET', 'POST'])
@blueprint_api.route('/import', methods=['GET', 'POST'])
def import_endpoint():
    user = load_api_user()
    course_id = request.json.get('course_id')
    if course_id is None:
        abort(400, "You need to specify the course_id")
    assignments = request.json.get('assignments', [])
    for assignment in assignments:
        assignment = Assignment.by_url(assignment['url'])
        if ((assignment and not user.is_instructor(assignment.course_id))
                or (not assignment and not user.is_instructor(course_id))):
            return abort(400, "Not an instructor in this assignments' course.")
    groups = request.json.get('groups', [])
    for group in groups:
        group = Assignment.by_url(group['url'])
        if not user.is_instructor(group.course_id):
            return abort(400, "Not an instructor in this assignments' course.")
    # TODO: Verify that memberships are all attached to a group owned by this user
    import_bundle(request.json, owner_id=user.id, course_id=course_id)
    return jsonify(success=True)
