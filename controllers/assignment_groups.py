import json

from flask import Blueprint, send_from_directory, Response
from flask import Flask, redirect, url_for, session, request, jsonify, g

from controllers.helpers import (lti, require_request_parameters, require_course_instructor, login_required,
                                 check_resource_exists, get_select_menu_link, get_course_id, get_user, ajax_success)

from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.assignment_group_membership import AssignmentGroupMembership
from models.portation import export_bundle

blueprint_assignment_group = Blueprint('assignment_group', __name__, url_prefix='/assignment_group')


@blueprint_assignment_group.route('/add', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/add/', methods=['GET', 'POST'])
@require_request_parameters('course_id', 'name')
@login_required
def add_group(lti=lti):
    ''' Adds a group to a course'''
    # Get arguments
    course_id = int(request.values.get('course_id'))
    new_name = request.values.get('name')
    is_embedded = ('embed' == request.values.get('menu', "select"))
    # Verify permissions
    require_course_instructor(g.user, course_id)
    # Perform action
    assignment_group = AssignmentGroup.new(owner_id=g.user.id, course_id=course_id, name=new_name)
    # Result
    select_url = get_select_menu_link(assignment_group.id, assignment_group.name, is_embedded, True)
    return jsonify(success=True, id=assignment_group.id, name=assignment_group.name, select=select_url)


@blueprint_assignment_group.route('/fork', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/fork/', methods=['GET', 'POST'])
@require_request_parameters('assignment_group_id')
@login_required
def fork_group(lti=lti):
    ''' Adds a group to a course'''
    # Get arguments
    assignment_group_id = int(request.values.get('assignment_group_id'))
    assignment_group = AssignmentGroup.by_id(assignment_group_id)
    is_embedded = ('embed' == request.values.get('menu', "select"))
    # Verify exists
    check_resource_exists(assignment_group, "Assignment Group", assignment_group_id)
    # Verify permissions
    require_course_instructor(g.user, assignment_group.course_id)
    # Perform action
    new_assignment_group = AssignmentGroup.new(owner_id=g.user.id,
                                               course_id=assignment_group.course_id,
                                               name=assignment_group.name)
    new_assignment_group.forked_id = assignment_group_id
    new_assignment_group.forked_version = assignment_group.version
    # Result
    select_url = get_select_menu_link(new_assignment_group.id, new_assignment_group.name, is_embedded, True)
    return jsonify(success=True, id=new_assignment_group.id, name=new_assignment_group.name, select=select_url)


@blueprint_assignment_group.route('/remove', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/remove/', methods=['GET', 'POST'])
@require_request_parameters('assignment_group_id')
@login_required
def remove_group(lti=lti):
    ''' Removes a group from a course'''
    assignment_group_id = int(request.values.get('assignment_group_id'))
    assignment_group = AssignmentGroup.by_id(assignment_group_id)
    # Verify exists
    check_resource_exists(assignment_group, "Assignment Group", assignment_group_id)
    # Verify permissions
    require_course_instructor(g.user, assignment_group.course_id)
    # Perform action
    AssignmentGroup.remove(assignment_group.id)
    # Result
    return jsonify(success=True)


@blueprint_assignment_group.route('/edit', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/edit/', methods=['GET', 'POST'])
@require_request_parameters('assignment_group_id', 'new_name')
@login_required
def edit_group(lti=lti):
    # Get arguments
    assignment_group_id = int(request.values.get('assignment_group_id'))
    assignment_group = AssignmentGroup.by_id(assignment_group_id)
    new_name = request.values.get('new_name')
    # Verify exists
    check_resource_exists(assignment_group, "Assignment Group", assignment_group_id)
    # Verify permissions
    require_course_instructor(g.user, assignment_group.course_id)
    # Perform action
    group = assignment_group.edit(name=new_name)
    # Result
    return jsonify(success=True, name=group.name)


@blueprint_assignment_group.route('/move_membership', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/move_membership/', methods=['GET', 'POST'])
@require_request_parameters('assignment_id', 'old_group_id', 'new_group_id')
@login_required
def move_membership(lti=None):
    # Get arguments
    assignment_id = int(request.values.get('assignment_id'))
    old_group_id = int(request.values.get('old_group_id'))
    new_group_id = int(request.values.get('new_group_id'))
    assignment = Assignment.by_id(assignment_id)
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    require_course_instructor(g.user, assignment.course_id)

    # Verify permissions
    if new_group_id != -1:
        new_assignment_group = AssignmentGroup.by_id(new_group_id)
        require_course_instructor(g.user, new_assignment_group.course_id)
    if old_group_id != -1:
        old_assignment_group = AssignmentGroup.by_id(old_group_id)
        require_course_instructor(g.user, old_assignment_group.course_id)
    # Perform action
    AssignmentGroupMembership.move_assignment(assignment_id, new_group_id)
    # Result
    return jsonify(success=True)


@blueprint_assignment_group.route('/export/', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/export', methods=['GET', 'POST'])
@require_request_parameters('assignment_group_id')
def export():
    assignment_group_id = int(request.values.get('assignment_group_id'))
    assignment_group = AssignmentGroup.by_id(assignment_group_id)
    course_id = get_course_id(True)
    user, user_id = get_user()
    # Verify exists
    check_resource_exists(assignment_group, "Assignment Group", assignment_group_id)
    # Perform action
    assignments = assignment_group.get_assignments()
    memberships = assignment_group.get_memberships()
    bundle = export_bundle(groups=[assignment_group], assignments=assignments,
                           memberships=memberships)
    filename = assignment_group.get_filename()
    return Response(json.dumps(bundle, indent=2), mimetype='application/json',
                    headers={'Content-Disposition': 'attachment;filename={}'.format(filename)})