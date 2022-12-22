import json
import time
import random

import flask_security
from flask import Blueprint, request, Response, jsonify, abort, g, url_for

from controllers.helpers import get_course_id, get_user, check_resource_exists, require_request_parameters
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.course import Course
from models.portation import export_bundle, import_bundle
from models.user import User
from main import celery

blueprint_api = Blueprint('api', __name__, url_prefix='/api')


@blueprint_api.route('/test/', methods=['GET'])
@blueprint_api.route('/test', methods=['GET'])
def test():
    return jsonify("success")


@celery.task(bind=True)
def do_long_task(self):
    """Background task that runs a long function with progress reports."""
    verb = ['Starting up', 'Booting', 'Repairing', 'Loading', 'Checking']
    adjective = ['master', 'radiant', 'silent', 'harmonic', 'fast']
    noun = ['solar array', 'particle reshaper', 'cosmic ray', 'orbiter', 'bit']
    message = ''
    total = random.randint(10, 50)
    for i in range(total):
        if not message or random.random() < 0.25:
            message = '{0} {1} {2}...'.format(random.choice(verb),
                                              random.choice(adjective),
                                              random.choice(noun))
        self.update_state(state='PROGRESS',
                          meta={'current': i, 'total': total,
                                'status': message})
        time.sleep(1)
    return {'current': 100, 'total': 100, 'status': 'Task completed!',
            'result': 42}


@blueprint_api.route('/long_task/', methods=['GET'])
@blueprint_api.route('/long_task', methods=['GET'])
def long_task():
    task = do_long_task.apply_async()
    location = url_for('api.taskstatus', task_id=task.id)
    return jsonify({'taskstatus': location}), 202, {'Location': location}


@blueprint_api.route('/status/<task_id>')
def taskstatus(task_id):
    task = do_long_task.AsyncResult(task_id)
    if task.state == 'PENDING':
        # job did not start yet
        response = {
            'state': task.state,
            'current': 0,
            'total': 1,
            'status': 'Pending...'
        }
    elif task.state != 'FAILURE':
        response = {
            'state': task.state,
            'current': task.info.get('current', 0),
            'total': task.info.get('total', 1),
            'status': task.info.get('status', '')
        }
        if 'result' in task.info:
            response['result'] = task.info['result']
    else:
        # something went wrong in the background job
        response = {
            'state': task.state,
            'current': 1,
            'total': 1,
            'status': str(task.info),  # this is the exception raised
        }
    return jsonify(response)


def load_api_user():
    email = request.json.get('email')
    password = request.json.get('password')
    if email is None or password is None:
        if g.user is None:
            abort(400, "Missing email or password arguments")  # missing arguments
        return g.user
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
        group = AssignmentGroup.by_url(group['url'])
        if not user.is_instructor(group.course_id):
            return abort(400, "Not an instructor in this assignment groups' course.")
    # TODO: Verify that memberships are all attached to a group owned by this user
    import_bundle(request.json, owner_id=user.id, course_id=course_id)
    return jsonify(success=True)

# export_progsnap2