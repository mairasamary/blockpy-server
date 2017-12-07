import os
import json
from pprint import pprint
import time

from flask_wtf import Form
from wtforms import IntegerField, BooleanField

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from main import app
from models.models import db, Assignment, AssignmentGroup, Course, User, Role, Submission


import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.pyplot

blueprint_utilities = Blueprint('utilities', __name__, url_prefix='/utilities')

@blueprint_utilities.route('/canvas_dates', methods=['GET', 'POST'])
@blueprint_utilities.route('/canvas_dates/', methods=['GET', 'POST'])
def canvas_dates():
    course_id = request.values.get('course_id', None)
    access_token = request.values.get('access_token', None)
    return render_template('utilities/canvas_dates.html',
                           course_id=course_id, access_token=access_token)
                           
@blueprint_utilities.route('/dashboard', methods=['GET', 'POST'])
@blueprint_utilities.route('/dashboard/', methods=['GET', 'POST'])
def dashboard():
    course_id = g.course.id if 'course' in g and g.course else None
    if course_id is None:
        return jsonify(success=False, message="No Course ID available!")
    course = Course.query.filter_by(id=course_id).first()
    assignments = (db.session.query(Assignment)
                             .filter(Assignment.course_id==course.id)
                             .all())
    return render_template('utilities/dashboard.html',
                           course_id=course_id)

@blueprint_utilities.route('/grade_report', methods=['GET', 'POST'])
@blueprint_utilities.route('/grade_report/', methods=['GET', 'POST'])
def grade_report():
    course_id = g.course.id if 'course' in g and g.course else None
    if course_id is None:
        return jsonify(success=False, message="No Course ID available!")
    course_id = int(course_id)
    user_id = g.user.id
    if g.user.is_instructor(course_id):
        pass
        #with open()
    elif g.user.is_grader(course_id):
        pass
    # if TA
    # Get a list of available groups
    # Make that list available
    # if instructor
    # generate the full report for everyone
    return render_template("utilities/grade_report.html")

@blueprint_utilities.route('/ta_grade_report', methods=['GET', 'POST'])
@blueprint_utilities.route('/ta_grade_report/', methods=['GET', 'POST'])
def ta_grade_report():
    course_id = g.course.id if 'course' in g and g.course else None
    if course_id is None:
        return jsonify(success=False, message="No Course ID available!")
    course_id = int(course_id)
    user_id = g.user.id
    group_ids = request.values.get('group_ids', '').split(',')
    
    
    today = time.strftime("%m-%d")
    plt.style.use('seaborn-darkgrid')
    matplotlib.rcParams.update({'font.size': 12})
    from io import BytesIO
    import base64
    def log_plot(size=(3.5, 3)):
        fig = plt.gcf()
        fig.set_size_inches(*size)
        figfile = BytesIO()
        plt.tight_layout()
        plt.savefig(figfile, format='png')
        figfile.seek(0)  # rewind to beginning of file
        figdata_png = base64.b64encode(figfile.getvalue()).decode('utf8')
        log_file.write('<img src="data:image/png;base64,{}">\n'.format(figdata_png))
    
@blueprint_utilities.route('/instructor_grade_report', methods=['GET', 'POST'])
@blueprint_utilities.route('/instructor_grade_report/', methods=['GET', 'POST'])
def instructor_grade_report():
    course_id = g.course.id if 'course' in g and g.course else None
    if course_id is None:
        return jsonify(success=False, message="No Course ID available!")
    course_id = int(course_id)
    user_id = g.user.id
    group_ids = request.values.get('group_ids', '').split(',')
    
    
    today = time.strftime("%m-%d")
    plt.style.use('seaborn-darkgrid')
    matplotlib.rcParams.update({'font.size': 12})
    from io import BytesIO
    import base64
    def log_plot(size=(3.5, 3)):
        fig = plt.gcf()
        fig.set_size_inches(*size)
        figfile = BytesIO()
        plt.tight_layout()
        plt.savefig(figfile, format='png')
        figfile.seek(0)  # rewind to beginning of file
        figdata_png = base64.b64encode(figfile.getvalue()).decode('utf8')
        log_file.write('<img src="data:image/png;base64,{}">\n'.format(figdata_png))
    