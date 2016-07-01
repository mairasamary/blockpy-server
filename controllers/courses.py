from pprint import pprint

from flask.ext.wtf import Form
from wtforms import IntegerField, BooleanField, TextField, SubmitField, SelectField

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template, flash
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from controllers.helpers import instructor_required, login_required

from main import app
from models.models import db, Assignment, AssignmentGroup, Course, Role

courses = Blueprint('courses', __name__, url_prefix='/courses')

class AddCourseForm(Form):
    name = TextField("Name")
    visibility = SelectField(u'Visibility', choices=[('private', 'Private'), ('public', 'Public')])
    submit = SubmitField("Add new course")

@courses.route('/add/', methods=['GET', 'POST'])
@courses.route('/add', methods=['GET', 'POST'])
@instructor_required
def add():
    """ Create a new assignment with the given information
    """
    add_form = AddCourseForm(request.form)
    if request.method == 'POST':
        Course.new(name=add_form.name.data,
                   owner_id = g.user.id,
                   visibility=add_form.visibility.data)
        flash('New course added')
        return redirect(url_for('courses.index'))
    return render_template('courses/add.html', add_form=add_form)
    
@courses.route('/remove/', methods=['GET', 'POST'])
@courses.route('/remove', methods=['GET', 'POST'])
def remove_course():
    course_id = request.values.get('course_id', None)
    if course_id is None:
        if request.method == 'POST':
            return jsonify(success=False, message="No course id")
        else:
            flash('No course ID')
            return redirect(url_for('courses.index'))
    if not g.user.is_instructor(int(course_id)):
        if request.method == 'POST':
            return jsonify(success=False, message="You are not an instructor in this course.")
        else:
            flash('You are not an instructor in this course.')
            return redirect(url_for('courses.course', course_id=course_id))
    Course.remove(course_id)
    if request.method == 'POST':
        return jsonify(success=True)    
    else:
        flash('Course deleted.')
        return redirect(url_for('courses.index'))
        
@courses.route('/rename/', methods=['GET', 'POST'])
@courses.route('/rename', methods=['GET', 'POST'])
def rename_course():
    course_id = request.values.get('course_id', None)
    new_name = request.values.get('name', "Untitled Course")
    if course_id is None:
        if request.method == 'POST':
            return jsonify(success=False, message="No course id")
        else:
            flash('No course ID')
            return redirect(url_for('courses.index'))
    if not g.user.is_instructor(int(course_id)):
        if request.method == 'POST':
            return jsonify(success=False, message="You are not an instructor in this course.")
        else:
            flash('You are not an instructor in this course.')
            return redirect(url_for('courses.course', course_id=course_id))
    Course.rename(course_id, new_name)
    if request.method == 'POST':
        return jsonify(success=True)    
    else:
        flash('Course renamed.')
        return redirect(url_for('courses.course', course_id=course_id))
    
@courses.route('/add_canvas/', methods=['GET', 'POST'])
@courses.route('/add_canvas', methods=['GET', 'POST'])
@instructor_required
def add_canvas():
    """
    Create a new assignment with the given information
    """
    return render_template('courses/add_canvas.html')
    
@courses.route('/<course_id>/', methods=['GET', 'POST'])
@courses.route('/<course_id>', methods=['GET', 'POST'])
@login_required
def course(course_id):
    course = Course.query.filter_by(id=course_id).first()
    assignments = (db.session.query(Assignment)
                             .filter(Assignment.course_id==course.id)
                             .all())
    is_instructor = g.user.is_instructor(int(course_id))
    return render_template('courses/course.html', 
                           course=course,
                           is_instructor=is_instructor,
                           assignments=assignments)
                           
@courses.route('/assignments/<course_id>/', methods=['GET', 'POST'])
@courses.route('/assignments/<course_id>', methods=['GET', 'POST'])
@login_required
def assignments(course_id):
    #TODO: ensure in course
    course = Course.query.filter_by(id=course_id).first()
    assignments = Assignment.by_course(course_id, exclude_builtins=False)
    groups = [(group, group.get_assignments())
              for group in AssignmentGroup.by_course(course_id)]
    strays = AssignmentGroup.get_ungrouped_assignments(course_id)
    
    return render_template('courses/assignments.html', 
                           course=course,
                           groups=groups,
                           strays=strays,
                           assignments=assignments)

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

@courses.route('dashboard/', methods=['GET', 'POST'])
@courses.route('dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    course = Course.query.filter_by(id=course_id).first()
    assignments = (db.session.query(Assignment)
                             .filter(Assignment.course_id==course.id)
                             .all())
    return render_template('courses/course.html', 
                           course=course,
                           assignments=assignments)

                           
@courses.route('/config/', methods=['GET', 'POST'])
@courses.route('/config', methods=['GET', 'POST'])
def config():
    """ Create a new assignment with the given information
    """
    return Response(render_template('courses/config.xml',
                                    version='1'), mimetype='text/xml')