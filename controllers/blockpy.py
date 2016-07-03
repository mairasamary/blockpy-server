import os
import json
from pprint import pprint

from flask.ext.wtf import Form
from wtforms import IntegerField, BooleanField

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from main import app

from models.models import (db, Assignment, User, Submission, Log)

from controllers.helpers import lti, get_assignments_from_request

blueprint_blockpy = Blueprint('blockpy', __name__, url_prefix='/blockpy')
                           
@blueprint_blockpy.route('/static/<path:path>', methods=['GET', 'POST'])
def blockpy_static(path):
    return app.send_static_file(path)

@blueprint_blockpy.route('/', methods=['GET', 'POST'])    
@blueprint_blockpy.route('/index', methods=['GET', 'POST'])
@blueprint_blockpy.route('/index/', methods=['GET', 'POST'])
def index():
    return render_template('blockpy/index.html')

@blueprint_blockpy.route('/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load', methods=['GET', 'POST'])
def load(lti=lti, assignments=None, submissions=None):
    """
    
    """
    if assignments is None or submissions is None:
        assignments, submissions = get_assignments_from_request()
    if assignments:
        course_id = assignments[0].course_id
        instructor_mode = g.user.is_instructor(course_id)
    else:
        instructor_mode = False
    return render_template('blockpy/blockpy.html',
                           group=zip(assignments, submissions),
                           user_id=g.user.id if g.user is not None else -1,
                           instructor_mode=instructor_mode)
                               

@blueprint_blockpy.route('/save_code/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_code', methods=['GET', 'POST'])
def save_code(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    assignment_version = int(request.form.get('version', -1))
    if assignment_id is None:
        return jsonify(success=False, message="No Assignment ID given!")
    print(request.form)
    code = request.form.get('code', '')
    filename = request.form.get('filename', '__main__')
    is_version_correct = True
    if filename == "__main__":
        submission, is_version_correct = Submission.save_code(g.user.id, assignment_id, code, assignment_version)
    elif g.user.is_instructor(g.course.id):
        if filename == "on_run":
            Assignment.edit(assignment_id=assignment_id, on_run=code)
        elif filename == "on_change":
            Assignment.edit(assignment_id=assignment_id, on_step=code)
        elif filename == "starting_code":
            Assignment.edit(assignment_id=assignment_id, on_start=code)
    return jsonify(success=True, is_version_correct=is_version_correct)
    
@blueprint_blockpy.route('/save_events/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_events', methods=['GET', 'POST'])
def save_events(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    event = request.form.get('event', "blank")
    action = request.form.get('action', "missing")
    if assignment_id is None:
        return jsonify(success=False, message="No Assignment ID given!")
    log = Log.new(event, action, assignment_id, g.user.id)
    return jsonify(success=True)
    
@blueprint_blockpy.route('/save_correct/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_correct', methods=['GET', 'POST'])
def save_correct(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    status = float(request.form.get('status', "0.0"))
    lis_result_sourcedid = request.form.get('lis_result_sourcedid', None)
    if assignment_id is None:
        return jsonify(success=False, message="No Assignment ID given!")
    assignment = Assignment.by_id(assignment_id)
    if status == 1:
        submission = Submission.save_correct(g.user.id, assignment_id)
    else:
        submission = assignment.get_submission(g.user.id)
    if submission.correct:
        message = "Success!"
    else:
        message = "Incomplete"
    url = url_for('blueprint_blockpy.get_submission_code', submission_id=submission.id, _external=True)
    if lis_result_sourcedid is None:
        return jsonify(success=False, message="Not in a grading context.")
    if assignment.mode == 'maze':
        lti.post_grade(float(submission.correct), "<h1>{0}</h1>".format(message), endpoint=lis_result_sourcedid);
    else:
        lti.post_grade(float(submission.correct), "<h1>{0}</h1>".format(message)+"<div>Latest work in progress: <a href='{0}' target='_blank'>View</a></div>".format(url)+"<div>Touches: {0}</div>".format(submission.version)+"Last ran code:<br>"+highlight(submission.code, PythonLexer(), HtmlFormatter()), endpoint=lis_result_sourcedid)
    return jsonify(success=True)
    
@blueprint_blockpy.route('/get_submission_code/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_submission_code', methods=['GET', 'POST'])
def get_submission_code(lti=lti):
    submission_id = request.values.get('submission_id', None)
    if submission_id is None:
        return "Sorry, no submission ID was given."
    submission = Submission.query.get(submission_id)
    if g.user.is_instructor(g.course.id) or submission.user_id == g.user.id:
        return submission.code if submission.code else "#No code given!"
    else:
        return "Sorry, you do not have sufficient permissions to spy!"
    
@blueprint_blockpy.route('/save_presentation/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_presentation', methods=['GET', 'POST'])
def save_presentation(lti=lti):
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    assignment_id = request.form.get('assignment_id', None)
    if assignment_id is None:
        return jsonify(success=False, message="No Assignment ID given!")
    presentation = request.form.get('introduction', "")
    parsons = request.form.get('parsons', "false") == "true"
    text_first = request.form.get('text_first', "false") == "true"
    name = request.form.get('name', "")
    print(g.user.id, int(course_id))
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this course.")
    if not Assignment.is_in_course(int(assignment_id), int(course_id)):
        return jsonify(success=False, message="That assignment group does not belong to that course.")
    Assignment.edit(assignment_id=assignment_id, presentation=presentation, name=name, parsons=parsons, text_first=text_first)
    return jsonify(success=True)
        
@blueprint_blockpy.route('/grade', methods=['POST'])
def grade(lti=lti):
    """ post grade

    :param lti: the `lti` object from `pylti`
    :return: grade rendered by grade.html template
    """
    assignment_id = request.form.get('assignment_id', None)
    if assignment_id is None:
        return jsonify(success=False, message="No Assignment ID given!")
    submission = Submission.save_correct(g.user.id, assignment_id)
    if 'lis_result_sourcedid' not in session:
        return "Failure"
    #session[''] = session['lis_outcome_service_url']
    lti.post_grade(1, "<h1>Success</h1>"+highlight(submission.code, PythonLexer(), HtmlFormatter()))
    return "Successful!"
