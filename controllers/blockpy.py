import os
import json
from pprint import pprint

from flask.ext.wtf import Form
from wtforms import IntegerField, BooleanField

# Pygments, for reporting nicely formatted Python snippets
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

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
def load(lti=None, assignments=None, submissions=None, embed=False):
    """
    
    """
    if assignments is None or submissions is None:
        assignments, submissions = get_assignments_from_request()
    if assignments:
        if submissions:
            course_id = submissions[0].course_id
        else:
            course_id = assignments[0].course_id
        instructor_mode = g.user.is_instructor(course_id)
        if 'course_id' in request.form:
            course_id = int(request.form.get('course_id'))
    else:
        instructor_mode = False
        if 'course_id' in request.form:
            course_id = int(request.form.get('course_id'))
        else:
            course_id = None
    return render_template('blockpy/blockpy.html',
                           group=zip(assignments, submissions),
                           course_id=course_id,
                           user_id=g.user.id if g.user is not None else -1,
                           embed=embed,
                           instructor_mode=instructor_mode)
                               

@blueprint_blockpy.route('/save_code/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_code', methods=['GET', 'POST'])
def save_code(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    assignment_version = int(request.form.get('version', -1))
    course_id = request.form.get('course_id', g.course.id)
    if None in (assignment_id, course_id):
        return jsonify(success=False, message="No Assignment ID or Course ID given!")
    code = request.form.get('code', '')
    filename = request.form.get('filename', '__main__')
    is_version_correct = True
    if filename == "__main__":
        submission, is_version_correct = Submission.save_code(g.user.id, assignment_id, int(course_id), code, assignment_version)
    elif g.user.is_instructor(int(course_id)):
        if filename == "give_feedback":
            Assignment.edit(assignment_id=assignment_id, give_feedback=code)
        elif filename == "on_change":
            Assignment.edit(assignment_id=assignment_id, on_step=code)
        elif filename == "starting_code":
            Assignment.edit(assignment_id=assignment_id, starting_code=code)
    return jsonify(success=True, is_version_correct=is_version_correct)
    
@blueprint_blockpy.route('/save_events/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_events', methods=['GET', 'POST'])
def save_events(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    event = request.form.get('event', "blank")
    action = request.form.get('action', "missing")
    body = request.form.get('body', "")
    if assignment_id is None:
        return jsonify(success=False, message="No Assignment ID given!")
    log = Log.new(event, action, assignment_id, g.user.id, body=body)
    return jsonify(success=True)
    
@blueprint_blockpy.route('/save_correct/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_correct', methods=['GET', 'POST'])
@lti()
def save_correct(lti, lti_exception=None):
    assignment_id = request.form.get('assignment_id', None)
    status = float(request.form.get('status', "0.0"))
    image = request.form.get('image', "")
    course_id = request.form.get('course_id', g.course.id)
    if None in (assignment_id, course_id):
        return jsonify(success=False, message="No Assignment ID or Course ID given!")
    assignment = Assignment.by_id(assignment_id)
    if status == 1:
        submission = Submission.save_correct(g.user.id, assignment_id, course_id=int(course_id))
    else:
        submission = assignment.get_submission(g.user.id, course_id=course_id)
    if submission.correct:
        message = "Success!"
    else:
        message = "Incomplete"
    sub_blocks_folder = os.path.join(app.config['UPLOADS_DIR'], 'submission_blocks')
    image_path = os.path.join(sub_blocks_folder, str(submission.id)+'.png')
    if image != "":
        converted_image = image[22:].decode('base64')
        with open(image_path, 'wb') as image_file:
            image_file.write(converted_image);
        image_url = url_for('blockpy.get_submission_image', submission_id=submission.id, _external=True)
    elif os.path.exists(image_path):
        try:
            os.remove(image_path)
        except Exception:
            app.logger.info("Could not delete")
    lis_result_sourcedid = request.form.get('lis_result_sourcedid', submission.url) or None
    url = url_for('blockpy.get_submission_code', submission_id=submission.id, _external=True)
    print url
    if lis_result_sourcedid is None:
        return jsonify(success=False, message="Not in a grading context.")
    else:
        session['lis_result_sourcedid'] = lis_result_sourcedid
    if assignment.mode == 'maze':
        lti.post_grade(float(submission.correct), "<h1>{0}</h1>".format(message), endpoint=lis_result_sourcedid);
    else:
        code = highlight(submission.code, PythonLexer(), HtmlFormatter())
        potential_image = "Submitted Blocks:<br><img src='{0}'>".format(image_url) if image else ""
        body = '''
        <h1>{message}</h1>
        <div>Latest work in progress: <a href='{url}' target='_blank'>View</a></div>
        <div>Touches: {touches}</div>
        {potential_image}
        <br>
        Submitted code:<br>
        {code}
        '''.format(message=message, url=url, touches=submission.version, code=code, potential_image=potential_image)
        lti.post_grade(float(submission.correct), body, endpoint=lis_result_sourcedid)
    return jsonify(success=True)
    
@blueprint_blockpy.route('/get_submission_code/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_submission_code', methods=['GET', 'POST'])
def get_submission_code(lti=lti):
    submission_id = request.values.get('submission_id', None)
    if submission_id is None:
        return "Sorry, no submission ID was given."
    submission = Submission.query.get(submission_id)
    if g.user.is_instructor(g.course.id) or submission.user_id == g.user.id:
        return '<pre>'+submission.code+"</pre>" if submission.code else "#No code given!"
    else:
        return "Sorry, you do not have sufficient permissions to spy!"
        
@blueprint_blockpy.route('/get_submission_image/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_submission_image', methods=['GET', 'POST'])
def get_submission_image(lti=lti):
    submission_id = request.values.get('submission_id', None)
    if submission_id is None:
        return "Sorry, no submission ID was given."
    relative_image_path = 'uploads/submission_blocks/'+str(submission_id)+'.png'
    submission = Submission.query.get(int(submission_id))
    if g.user.is_instructor(g.course.id) or submission.user_id == g.user.id:
        return app.send_static_file(relative_image_path)
    else:
        return "Sorry, you do not have sufficient permissions to spy!"
    
@blueprint_blockpy.route('/save_presentation/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_presentation', methods=['GET', 'POST'])
def save_presentation(lti=lti):
    course_id = request.form.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    assignment_id = request.form.get('assignment_id', None)
    if assignment_id is None:
        return jsonify(success=False, message="No Assignment ID given!")
    presentation = request.form.get('introduction', "")
    parsons = request.form.get('parsons', "false") == "true"
    importable = request.form.get('importable', "false") == "true"
    text_first = request.form.get('text_first', "false") == "true"
    name = request.form.get('name', "")
    modules = request.form.get('modules', "")
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this course.")
    if not Assignment.is_in_course(int(assignment_id), int(course_id)):
        return jsonify(success=False, message="That assignment group does not belong to that course.")
    Assignment.edit(assignment_id=assignment_id, presentation=presentation, name=name, parsons=parsons, text_first=text_first, modules=modules, importable=importable)
    return jsonify(success=True)

@blueprint_blockpy.route('/load_corgis/<path:path>', methods=['GET', 'POST'])
def load_corgis(path):
    return app.send_static_file('corgis/{path}'.format(path=path))
