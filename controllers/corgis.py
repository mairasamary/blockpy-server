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

from models.models import db, Assignment

from controllers.helpers import lti

from interaction_logger import StructuredEvent

blueprint_corgis = Blueprint('corgis', __name__, url_prefix='/corgis')

@blueprint_corgis.route('/_images/<path:path>', methods=['GET', 'POST'])
def corgis_static_images(path):
    return app.send_static_file('images/'+path)
    
@blueprint_corgis.route('/_lib/<path:path>', methods=['GET', 'POST'])
def corgis_static_libs(path):
    return app.send_static_file('libs/'+path)

@blueprint_corgis.route('/', methods=['GET', 'POST'])    
def index():
    return render_template('corgis/generic.html', name='corgis/libraries.html')
    
@blueprint_corgis.route('/<language>/', methods=['GET', 'POST'])    
@blueprint_corgis.route('/<language>/index.html', methods=['GET', 'POST'])
def language_index(language, assignments=None, submissions=None, lti=None, embed=None):
    if embed == None:
        embed = request.values.get("embed", "False") == "True"
    return render_template('corgis/generic.html', name='corgis/{language}/{language}.html'.format(language=language), embed=embed)

@blueprint_corgis.route('/<language>/<dataset>/', methods=['GET', 'POST'])    
@blueprint_corgis.route('/<language>/<dataset>/<path:path>', methods=['GET', 'POST'])
def language_dataset(language, dataset, path):
    if path == dataset+'.html' or path is None:
        return render_template('corgis/generic.html', name='corgis/{language}/{dataset}/{dataset}.html'.format(language=language, dataset=dataset))
    else:
        return app.send_static_file('corgis/{language}/{dataset}/{path}'.format(language=language, dataset=dataset, path=path))
        
blueprint_datasets = Blueprint('datasets', __name__, url_prefix='/datasets')

@blueprint_datasets.route('/', methods=['GET', 'POST'])    
def redirect_index():
    return redirect(url_for('corgis.index'))
    
@blueprint_datasets.route('/<language>/', methods=['GET', 'POST'])    
@blueprint_datasets.route('/<language>/index.html', methods=['GET', 'POST'])
def redirect_language_index(language, assignments=None, submissions=None, lti=None, embed=False):
    embed = embed or 'iframe' == request.form.get('launch_presentation_document_target')
    return redirect(url_for('corgis.language_index', language=language, assignments=None, submissions=None, lti=None, embed=embed))

@blueprint_datasets.route('/<language>/<dataset>/', methods=['GET', 'POST'])    
@blueprint_datasets.route('/<language>/<dataset>/<path:path>', methods=['GET', 'POST'])
def redirect_language_dataset(language, dataset, path):
    return redirect(url_for('corgis.language_dataset', language=language, dataset=dataset, path=path))

@blueprint_datasets.route('/_log/', methods=['GET', 'POST'])
@blueprint_datasets.route('/_log', methods=['GET', 'POST'])
def log_event():
    if 'user_id' in request.values:
        user_id = request.values.get('user_id')
    elif 'user' in g and g.user and g.user.id:
        user_id = g.user.id
    else:
        user_id = str(request.remote_addr)
    assignment_id = request.values.get('assignment_id', "")
    event = request.values.get('event', "")
    action = request.values.get('action', "")
    body = request.values.get('body', "")
    external_interactions_logger = logging.getLogger('StudentInteractions')
    external_interactions_logger.info(
        StructuredEvent(user_id, assignment_id, event, action, body)
    )
    return jsonify(success=True)
