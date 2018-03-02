import os
import json
from pprint import pprint
import logging

from flask_wtf import Form
from wtforms import IntegerField, BooleanField

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from main import app
from interaction_logger import StructuredEvent

from models.models import db, Assignment, Log

from controllers.helpers import (lti, highlight_python_code)
app.jinja_env.filters['highlight_python_code'] = highlight_python_code

blueprint_worked_examples = Blueprint('worked_examples', __name__, url_prefix='/worked_examples')

@blueprint_worked_examples.route('/', methods=['GET', 'POST'])
def index():
    we_folder = os.path.join(app.config['ROOT_DIRECTORY'], 'templates', 'worked_examples', 'files')
    wes = os.listdir(we_folder)
    return render_template('worked_examples/index.html', wes=wes)

@blueprint_worked_examples.route('/load/', methods=['GET', 'POST'])
@blueprint_worked_examples.route('/load', methods=['GET', 'POST'])
def load():
    embed = request.values.get("embed", "False") == "True"
    filename = request.values.get('filename', 'error.html')
    name='worked_examples/files/{filename}'.format(filename=filename)
    if not os.path.exists(os.path.join(app.config['ROOT_DIRECTORY'], 'templates', name)):
        name = 'worked_examples/files/error.html'
    assignment_id = request.values.get('assignment_id', -1)
    return render_template('worked_examples/load.html',
                           assignment_id=assignment_id,
                           filename=filename,
                           name=name, embed=embed)
    
@blueprint_worked_examples.route('/_log/', methods=['GET', 'POST'])
@blueprint_worked_examples.route('/_log', methods=['GET', 'POST'])
def log_event():
    if 'user_id' in request.values:
        user_id = request.values.get('user_id')
    elif 'user' in g and g.user and g.user.id:
        user_id = g.user.id
    else:
        user_id = str(request.remote_addr)
    assignment_id = request.values.get('assignment_id', "-1")
    if assignment_id == "":
        assignment_id = -1
    else:
        assignment_id = int(assignment_id)
    event = request.values.get('event', "")
    action = request.values.get('action', "")
    body = request.values.get('body', "")
    timestamp = request.values.get('timestamp', "")
    Log.new(event, action, assignment_id, user_id, body, timestamp)
    return jsonify(success=True)
