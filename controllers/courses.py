from pprint import pprint
from collections import defaultdict
from natsort import natsorted

from flask_wtf import Form
from wtforms import IntegerField, BooleanField, StringField, SubmitField, SelectField, TextAreaField

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g, \
    make_response, Response, render_template, flash
from werkzeug.utils import secure_filename

from sqlalchemy import Date, cast, func, desc, or_

from controllers.helpers import (lti, strip_tags,
                                 get_lti_property, require_request_parameters, login_required,
                                 require_course_instructor, get_select_menu_link,
                                 check_resource_exists, get_course_id, get_user)

from main import app
from models.models import db, AssignmentGroup
from models.user import User
from models.course import Course
from models.role import Role
from models.submission import Submission
from models.assignment import Assignment

courses = Blueprint('courses', __name__, url_prefix='/courses')


class AddCourseForm(Form):
    name = StringField("Name")
    visibility = SelectField('Visibility', choices=[('private', 'Private'), ('public', 'Public')])
    submit = SubmitField("Add new course")


@courses.route('/add', methods=['GET', 'POST'])
@courses.route('/add/', methods=['GET', 'POST'])
@login_required
def add():
    """ Create a new assignment with the given information
    """
    add_form = AddCourseForm(request.form)
    if request.method == 'POST':
        Course.new(name=add_form.name.data,
                   owner_id=g.user.id,
                   visibility=add_form.visibility.data)
        flash('New course added')
        return redirect(url_for('courses.index'))
    return render_template('courses/add.html', add_form=add_form)


@courses.route('/remove/', methods=['GET', 'POST'])
@courses.route('/remove', methods=['GET', 'POST'])
@require_request_parameters('course_id')
@login_required
def remove_course(course_id):
    course_id = int(request.values.get('course_id'))
    course = Course.by_id(course_id)
    # Verify exists
    check_resource_exists(course, "Course", course_id)
    # Verify permissions
    require_course_instructor(g.user, course_id)
    # Perform action
    Course.remove(course_id)
    flash('Course removed')
    return redirect(url_for('courses.index'))


@courses.route('/rename', methods=['GET', 'POST'])
@courses.route('/rename/', methods=['GET', 'POST'])
@require_request_parameters('course_id', 'name')
@login_required
def rename_course():
    course_id = int(request.values.get('course_id'))
    course = Course.by_id(course_id)
    # Verify exists
    check_resource_exists(course, "Course", course_id)
    # Verify permissions
    require_course_instructor(g.user, course_id)
    # Perform action
    new_name = request.values.get('name')
    Course.rename(course_id, new_name)
    return jsonify(success=True)


@courses.route('/add_canvas/', methods=['GET', 'POST'])
@courses.route('/add_canvas', methods=['GET', 'POST'])
@login_required
def add_canvas():
    """
    Create a new assignment with the given information
    """
    return render_template('courses/add_canvas.html')


@courses.route('/<course_id>/', methods=['GET', 'POST'])
@courses.route('/<course_id>', methods=['GET', 'POST'])
@login_required
def course(course_id):
    course_id = int(course_id)
    if not g.user.in_course(course_id):
        flash("You are not a user in this course.")
        return redirect(url_for('courses.index'))
    course = Course.query.filter_by(id=course_id).first()
    if course is None:
        flash("Course does not exist.")
        return redirect(url_for('courses.index'))
    is_instructor = g.user.is_instructor(course_id)
    return render_template('courses/course.html',
                           course=course,
                           is_instructor=is_instructor)


@courses.route('/assignments/<course_id>/', methods=['GET', 'POST'])
@courses.route('/assignments/<course_id>', methods=['GET', 'POST'])
@login_required
def assignments(course_id):
    if not g.user.in_course(course_id):
        return redirect(url_for('courses.index'))
    assignments = Assignment.get_available()
    groups = AssignmentGroup.query.all()
    course_groups = Course.get_all_groups()
    editable_courses = g.user.get_editable_courses()

    return render_template('courses/assignments.html',
                           assignments=assignments,
                           groups=groups,
                           editable_courses=editable_courses,
                           course_groups=course_groups,
                           course_id=course_id)


@courses.route('/view_assignments/<course_id>/', methods=['GET', 'POST'])
@courses.route('/view_assignments/<course_id>', methods=['GET', 'POST'])
@login_required
def view_assignments(course_id):
    if not g.user.in_course(course_id):
        return redirect(url_for('courses.index'))
    course = Course.by_id(course_id)
    assignments = Assignment.by_course(course_id)
    groups = AssignmentGroup.by_course(course_id)

    return render_template('courses/view_assignments.html', assignments=assignments,
                           groups=groups, course=course,
                           course_id=course_id)


@courses.route('/', methods=['GET', 'POST'])
@login_required
def index():
    """
    List all of the courses associated with the user.
    """

    user_id = g.user.id

    my_courses = g.user.get_courses()
    public_courses = Course.get_public()

    return render_template('courses/index.html', my_courses=my_courses,
                           public_courses=public_courses)


@courses.route('/manage_users/<course_id>/', methods=['GET', 'POST'])
@courses.route('/manage_users/<course_id>', methods=['GET', 'POST'])
@login_required
def manage_users(course_id):
    ''' List all the users in the course '''
    if not g.user.in_course(course_id):
        return redirect(url_for('courses.index'))
    is_instructor = g.user.is_instructor(int(course_id))
    students = Course.by_id(int(course_id)).get_users()
    return render_template('courses/manage_users.html',
                           students=students,
                           course_id=course_id,
                           is_instructor=is_instructor)


class AddStudentForm(Form):
    # invite = BooleanField("Add Without Invitation")
    # send_email = BooleanField('Send Email')
    new_users = TextAreaField("Emails")
    submit = SubmitField("Add student")


@courses.route('/add_users/<course_id>/', methods=['GET', 'POST'])
@courses.route('/add_users/<course_id>', methods=['GET', 'POST'])
@login_required
def add_users(course_id):
    ''' Generate a form to add a student '''
    if not g.user.is_instructor(int(course_id)):
        return redirect(url_for('courses.index'))
    add_form = AddStudentForm(request.form)
    if request.method == 'POST':
        for new_email in add_form.new_users.data.split("\n"):
            first_name, last_name = '', ''
            if '|' in new_email:
                first_name, last_name, new_email = new_email.split('|', maxsplit=2)
            new_user = User.find_student(email=new_email)
            if new_user is None:
                new_user = User.new_from_instructor(first_name=first_name, last_name=last_name,
                                                    email=new_email)
            if not new_user.is_student():
                new_user.add_role('learner', course_id=course_id)
            # TODO: Send an email
        flash('New students added')
        return redirect(url_for('courses.manage_users', course_id=course_id))
    return render_template('courses/add_users.html', add_form=add_form, course_id=course_id)


@courses.route('/remove_role/<role_id>/', methods=['GET', 'POST'])
@courses.route('/remove_role/<role_id>', methods=['GET', 'POST'])
@login_required
def remove_role(role_id):
    ''' Endpoint to bounce a student from the course '''
    role = Role.by_id(int(role_id))
    if role is None:
        return "Role not found"
    course_id = role.course_id
    is_instructor = g.user.is_instructor(course_id)
    if not is_instructor:
        return "You're not an instructor in this course!"
    Role.remove(int(role_id))
    return redirect(url_for('courses.manage_users', course_id=course_id))


@courses.route('/change_role/', methods=['GET', 'POST'])
@courses.route('/change_role', methods=['GET', 'POST'])
@login_required
def change_role():
    ''' Endpoint to change the role of a student '''
    pass


def grader_dashboard(user, course_id):
    pending_review = Submission.by_pending_review(course_id)
    users = {user.email: user.encode_json() for _, user, _ in pending_review}
    return render_template('courses/dashboard_grader.html', embed=True,
                           course_id=course_id, user=user, pending_review=pending_review,
                           users=users)

@courses.route('dashboard/', methods=['GET', 'POST'])
@courses.route('dashboard', methods=['GET', 'POST'])
@lti(request='initial')
def dashboard(lti=lti):
    """
    :type lti: controllers.pylti.flask.lTI
    """
    if 'user' not in g and not g.user:
        return "You are not logged in."
    course_id = get_course_id()
    user, user_id = get_user()
    if course_id is None:
        return "You are not in a course context."
    is_grader = user.is_grader(course_id)
    if is_grader:
        return grader_dashboard(user, course_id)

    course = Course.by_id(course_id)
    assignments = natsorted([a for a, m in course.get_submitted_assignments()],
                            key=lambda r: r.name)
    all_subs = Submission.by_student(user_id, course_id)
    all_subs = {s[0].assignment_id: s for s in all_subs}
    submissions = [all_subs.get(assignment.id, (None, None, assignment))
                   for assignment in assignments]
    return render_template('courses/dashboard.html', embed=True,
                           course_id=course_id, user=user, is_grader=is_grader,
                           submissions=submissions, criteria='student')


@courses.route('/config/', methods=['GET', 'POST'])
@courses.route('/config', methods=['GET', 'POST'])
def config():
    """ Provide course configuration
    """
    return render_template('courses/config.html',
                           xml_content=render_template('courses/config.xml',
                                                       version=app.config['SITE_VERSION']))
    # return Response(render_template('courses/config.xml',
    #                                version=app.config['SITE_VERSION']),
    #                mimetype='text/xml')


@courses.route('/submissions_filter/<course_id>/', methods=['GET', 'POST'])
@courses.route('/submissions_filter/<course_id>', methods=['GET', 'POST'])
@login_required
def submissions_filter(course_id):
    ''' List all the users in the course '''
    is_grader = g.user.is_grader(int(course_id))
    if not is_grader:
        return "You are not an instructor or TA in this course!"
    course_id = int(course_id)
    course = Course.by_id(course_id)
    students = natsorted(course.get_students(), key=lambda r: r.name())
    assignments = natsorted([a for a, m in course.get_submitted_assignments()],
                            key=lambda r: r.name)
    criteria = request.values.get("criteria", "none")
    search_key = int(request.values.get("search_key", "-1"))
    submissions = []
    if criteria == "student":
        all_subs = Submission.by_student(search_key, course_id)
        all_subs = {s[0].assignment_id: s for s in all_subs}
        submissions = [all_subs.get(assignment.id, (None, None, assignment))
                       for assignment in assignments]
    elif criteria == "assignment":
        all_subs = Submission.by_assignment(search_key, course_id)
        all_subs = {s[0].user_id: s for s in all_subs}
        submissions = [all_subs.get(student.id, (None, student, None))
                       for student in students]
    return render_template('courses/submissions_filter.html',
                           course_id=course_id,
                           assignments=assignments,
                           students=students,
                           submissions=submissions,
                           criteria=criteria,
                           search_key=search_key,
                           is_instructor=is_grader)


@courses.route('/submissions_specific/<submission_id>/', methods=['GET', 'POST'])
@courses.route('/submissions_specific/<submission_id>', methods=['GET', 'POST'])
@login_required
def submissions_specific(submission_id):
    ''' List all the users in the course '''
    submission, user, assignment = Submission.full_by_id(int(submission_id))
    if submission is None:
        return "Submission not found"
    course_id = submission.course_id
    if course_id is not None:
        is_instructor = g.user.is_instructor(int(course_id))
    else:
        is_instructor = False
    is_owner = g.user.id == submission.user_id
    if not is_instructor and not is_owner:
        return "You are not an instructor or the owner of the assignment!"
    return render_template('courses/submissions_specific.html',
                           submission=submission,
                           assignment=assignment,
                           user=user,
                           course_id=course_id)


@courses.route('/submissions_grid/<course_id>/', methods=['GET', 'POST'])
@courses.route('/submissions_grid/<course_id>', methods=['GET', 'POST'])
@login_required
def submissions_grid(course_id):
    ''' List all the users in the course '''
    course_id = int(course_id)
    is_instructor = g.user.is_instructor(course_id)
    if not is_instructor:
        return "You are not an instructor!"
    course = Course.by_id(course_id)
    students = course.get_students()
    assignments = natsorted(course.get_submitted_assignments(),
                            key=lambda r: r[0].name)
    grouped_assignments = defaultdict(list)
    for assig_pair in assignments:
        assignment, membership = assig_pair
        grouped_assignments[membership.assignment_group_id].append(assignment)
    assignment_groups = course.get_assignment_groups()
    submissions = {(s.assignment_id, s.user_id): s for s in course.get_submissions()}
    return render_template('courses/submissions_grid.html',
                           course_id=course_id,
                           students=students,
                           submissions=submissions,
                           assignment_groups=assignment_groups,
                           grouped_assignments=grouped_assignments,
                           is_instructor=is_instructor)


@courses.route('/making_problems', methods=['GET', 'POST'])
@courses.route('/making_problems/', methods=['GET', 'POST'])
def making_problems():
    """
    Making problems instructions
    """

    return render_template('courses/making_problems.html')


def switch_course():
    # TODO: Create the ability to switch current course without going through canvas
    pass

# TODO: update course via JSON file or API