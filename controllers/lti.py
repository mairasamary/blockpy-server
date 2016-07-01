from pprint import pprint
from lxml import etree
from urllib import quote as url_quote
from urllib import urlencode
import logging

# Pygments, for reporting nicely formatted Python snippets
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

from flask.ext.wtf import Form
from wtforms import IntegerField, BooleanField

from pylti.common import LTI_PROPERTY_LIST 
LTI_PROPERTY_LIST.append('context_title')

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from controllers.helpers import instructor_required, lti

from main import app
from interaction_logger import StructuredEvent
from models.models import (User, Course, 
                           Assignment, AssignmentGroup, AssignmentGroupMembership,
                           Submission, Log)

lti_assignments = Blueprint('lti_assignments', __name__, url_prefix='/lti_assignments')

def error(exception=None):
    """ render error page

    :param exception: optional exception
    :return: the error.html template rendered
    """
    print exception
    if request.method == 'POST':
        params = request.form.to_dict()
    else:
        params = request.args.to_dict()
    return render_template('error.html')


@lti_assignments.route('/dashboard/', methods=['GET', 'POST'])
@lti_assignments.route('/dashboard', methods=['GET', 'POST'])
@lti(request='initial', error=error, role='staff', app=app)
def dashboard(lti=lti):
    """ render the contents of the staff.html template

    :param lti: the `lti` object from `pylti`
    :return: the staff.html template rendered
    """
    return "Choose from the below:<ol><li>Test</li></ol>"
    
@lti_assignments.route('/share/', methods=['GET', 'POST'])
@lti_assignments.route('/share', methods=['GET', 'POST'])
@lti(request='initial', error=error, role='staff', app=app)
def share(lti=lti):
    """ render the contents of the staff.html template

    :param lti: the `lti` object from `pylti`
    :return: the staff.html template rendered
    """
    user, roles, course = ensure_canvas_arguments()
    assignments = Assignment.by_course(course.id, exclude_builtins=True)
    groups = [(group, group.get_assignments())
              for group in AssignmentGroup.by_course(course.id)]
    strays = AssignmentGroup.get_ungrouped_assignments(course.id)
    return_url = session['launch_presentation_return_url']
    
    return render_template('lti/select.html', assignments=assignments, strays=strays, groups=groups, return_url=return_url, menu='share')

@lti_assignments.route('/shared/', methods=['GET', 'POST'])
@lti_assignments.route('/shared', methods=['GET', 'POST'])
@lti(request='session', error=error, app=app)
def shared(lti=lti):
    """ render the contents of the assignment template

    :param lti: the `lti` object from `pylti`
    :return: the staff.html template rendered
    """
    assignment_id = request.args.get('assignment_id', None)
    assignment_group_id = request.args.get('assignment_group_id', None)
    user, roles, course = ensure_canvas_arguments()
    # Assignment group or individual assignment?
    if assignment_group_id is not None:
        group = AssignmentGroup.by_id(assignment_group_id)
        assignments = group.get_assignments()
        submissions = [a.get_submission(user.id) for a in assignments]
    elif assignment_id is not None:
        assignments = [Assignment.by_id(assignment_id)]
        submissions = [assignments[0].get_submission(user.id)]
    else:
        return error()
    # Use the proper template
    if assignments[0].mode == 'maze':
        return render_template('lti/maze.html', lti=lti,
                               assignment= assignments[0], 
                               submission= submissions[0],
                               level=assignments[0].name,
                               user_id=user.id)
    elif assignments[0].mode == 'explain':
        return render_template('lti/explain.html', lti=lti,
                               assignment= assignments[0], 
                               submission= submissions[0],
                               user_id=user.id)
    else:
        return render_template('lti/index.html', lti=lti,
                               group=zip(assignments, submissions),
                               user_id=user.id)

