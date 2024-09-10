import json

from flask import Blueprint, send_from_directory, Response, render_template, flash
from flask import Flask, redirect, url_for, session, request, jsonify, g, current_app

from common.maybe import maybe_bool
from controllers.auth import get_user
from controllers.helpers import (require_request_parameters, require_course_instructor, login_required,
                                 check_resource_exists, get_select_menu_link, get_course_id, ajax_success,
                                 maybe_int, require_course_grader, make_log_entry)
from models import Course, Submission

from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.assignment_group_membership import AssignmentGroupMembership
from models.portation import export_bundle, import_bundle, export_zip, export_pdf_zip

blueprint_assignment_group = Blueprint('assignment_group', __name__, url_prefix='/assignment_group')


@blueprint_assignment_group.route('/add', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/add/', methods=['GET', 'POST'])
@require_request_parameters('course_id', 'name')
@login_required
def add_group():
    ''' Adds a group to a course'''
    # Get arguments
    course_id = int(request.values.get('course_id'))
    new_name = request.values.get('name')
    new_url = request.values.get('url')
    is_embedded = ('embed' == request.values.get('menu', "select"))
    # Verify permissions
    require_course_instructor(g.user, course_id)
    # Perform action
    assignment_group = AssignmentGroup.new(owner_id=g.user.id, course_id=course_id,
                                           name=new_name, url=new_url)
    # Result
    select_url = get_select_menu_link(assignment_group.id,
                                      assignment_group.name, is_embedded, True)
    return jsonify(success=True, id=assignment_group.id, url=assignment_group.url,
                   link=assignment_group.get_select_url(),
                   name=assignment_group.name, select=select_url)


@blueprint_assignment_group.route('/fork', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/fork/', methods=['GET', 'POST'])
@require_request_parameters('assignment_group_id')
@login_required
def fork_group():
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
    new_assignment_group, assignments = assignment_group.fork(new_owner_id=g.user.id,
                                                              new_course_id=assignment_group.course_id)
    # Result
    select_url = get_select_menu_link(new_assignment_group.id, new_assignment_group.name, is_embedded, True)
    return jsonify(success=True, id=new_assignment_group.id,
                   link=new_assignment_group.get_select_url(),
                   name=new_assignment_group.name, select=select_url)


@blueprint_assignment_group.route('/remove', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/remove/', methods=['GET', 'POST'])
@require_request_parameters('assignment_group_id')
@login_required
def remove_group():
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
def edit_group():
    # Get arguments
    assignment_group_id = int(request.values.get('assignment_group_id'))
    assignment_group = AssignmentGroup.by_id(assignment_group_id)
    new_name = request.values.get('new_name')
    new_url = request.values.get('new_url')
    # Verify exists
    check_resource_exists(assignment_group, "Assignment Group", assignment_group_id)
    # Verify permissions
    require_course_instructor(g.user, assignment_group.course_id)
    # Perform action
    changed = assignment_group.edit(dict(name=new_name, url=new_url))
    # Result
    return jsonify(success=True, name=assignment_group.name,
                   link=assignment_group.get_select_url(),
                   url=assignment_group.url)


@blueprint_assignment_group.route('/move_membership', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/move_membership/', methods=['GET', 'POST'])
@require_request_parameters('assignment_id', 'old_group_id', 'new_group_id')
@login_required
def move_membership():
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


@blueprint_assignment_group.route('/edit_security_settings', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/edit_security_settings/', methods=['GET', 'POST'])
@login_required
def edit_security_settings():
    # Get arguments
    assignment_group_id = maybe_int(request.values.get('assignment_group_id'))
    assignment_group_url = request.values.get("assignment_group_url")
    if assignment_group_id is None and not assignment_group_url:
        return render_template('courses/edit_security.html',
                               group_name=None,
                               ip_ranges="",
                               passcode="",
                               warning="Set an assignment group id or url via the URL.")
    if not assignment_group_id:
        assignment_group = AssignmentGroup.by_url(assignment_group_url)
    else:
        assignment_group = AssignmentGroup.by_id(assignment_group_id)
        assignment_group_id = assignment_group_url
    ip_ranges = request.values.get('ip_ranges')
    protected_ip_ranges = request.values.get('protected_ip_ranges')
    passcode = request.values.get('passcode')
    # Verify exists
    check_resource_exists(assignment_group, "Assignment Group", assignment_group_id)
    # Verify permissions
    require_course_grader(g.user, assignment_group.course_id)
    # Perform action
    if request.method == 'POST':
        assignments = assignment_group.get_assignments()
        if ip_ranges is not None:
            message = []
            for assignment in assignments:
                is_instructor =g.user.is_instructor(assignment.course_id)
                # Update protected_ip_ranges
                if is_instructor:
                    assignment.update_setting('protected_ip_ranges', protected_ip_ranges)
                # Update ip_ranges
                old_ranges = assignment.ip_ranges
                #if old_ranges != ip_ranges:
                if assignment.update_ip_address(ip_ranges, is_instructor):
                    message.append(f"{assignment.name} ip_ranges is now <code>{assignment.ip_ranges}</code>")
                else:
                    message.append(f"Failed to update {assignment.name} ip_ranges.")
                # Update passcode
                if g.user.is_instructor(assignment.course_id):
                    if assignment.update_setting("passcode", passcode):
                        message.append(f"{assignment.name} passcode to <code>{passcode}</code>")
                # Record a log of this
                make_log_entry(assignment.id, assignment.version,
                               assignment.course_id, g.user.id,
                               "X-Instructor.Settings.Edit", "assignment_settings.blockpy",
                               message=json.dumps({
                                   "is_instructor": is_instructor,
                                   "old_ranges": old_ranges,
                                   "ip_ranges": ip_ranges,
                                   "protected_ip_ranges": protected_ip_ranges,
                                   "passcode": passcode
                               }))
            if message:
                flash("Updating:<br>" + "<br>".join(message))
            else:
                flash("No updates made.")
        return redirect(request.url)
    # Result
    else:
        assignments = assignment_group.get_assignments()
        passcode = assignments[0].get_setting("passcode", "")
        ip_ranges = merge_assignment_ranges([assignment.ip_ranges for assignment in assignments])
        protected_ip_ranges = merge_assignment_ranges([assignment.get_setting('protected_ip_ranges', '')
                                                       for assignment in assignments])
        return render_template('courses/edit_security.html',
                               group_name=assignment_group.name,
                               protected_ip_ranges=protected_ip_ranges,
                               is_instructor=g.user.is_instructor(assignment_group.course_id),
                               ip_ranges=ip_ranges if ip_ranges else "",
                               passcode=passcode if passcode else "",
                               warning="")


def merge_assignment_ranges(set_of_ranges):
    ip_ranges = [ip_range.strip()
                 for ip_ranges in set_of_ranges
                 for ip_range in ip_ranges.split(",")
                 if ip_range.strip()]
    return ",".join(list(set(ip_ranges)))


@blueprint_assignment_group.route('/export_submissions/', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/export_submissions', methods=['GET', 'POST'])
@login_required
@require_request_parameters('assignment_group_id')
def export_submissions():
    assignment_group_id = int(request.values.get('assignment_group_id'))
    with_history = maybe_bool(request.values.get('history', "false"))
    assignment_group = AssignmentGroup.by_id(assignment_group_id)
    course_id = get_course_id(True)
    user, user_id = get_user()
    # File format of results: {"pdf", "code"}
    format = request.values.get("format", "code")
    # Verify exists
    check_resource_exists(assignment_group, "Assignment Group", assignment_group_id)
    # Get associated assignments and memberships
    assignments = assignment_group.get_assignments()
    # Verify permissions
    for assignment in assignments:
        assignment_id = assignment.id
        assignment = Assignment.by_id(int(assignment_id))
        if course_id is None or not user.is_instructor(int(course_id)):
            return "You are not an instructor or the owner of the assignment: " + str(assignment_id)
    # Get data
    course = Course.by_id(course_id)
    submissions, users = set(), set()
    for assignment in assignments:
        suas = Submission.by_assignment(assignment.id, course_id)
        assignment_submissions = [sua[0] for sua in suas]
        assignment_users = [sua[1] for sua in suas]
        submissions.update(assignment_submissions)
        users.update(assignment_users)
    # Generate the bundle
    if format == "pdf":
        bundle = export_pdf_zip(assignments=assignments, submissions=submissions, users=users,
                                jinja_environment=current_app.jinja_env)
    else:
        bundle = export_zip(assignments=assignments, submissions=submissions,
                            users=users, with_history=with_history)
    filename = course.get_url_or_id() + '-' + assignment_group.get_filename(extension='.zip')
    return Response(bundle, mimetype='application/zip',
                    headers={'Content-Disposition': 'attachment;filename={}'.format(filename)})
