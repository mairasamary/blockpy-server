import os
import json
from pprint import pprint

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

blueprint_resources = Blueprint('resources', __name__, url_prefix='/resources')

@blueprint_resources.route('/', methods=['GET', 'POST'])
def index():
    return render_template('resources/index.html')

@blueprint_resources.route('/ct-kcs', methods=['GET', 'POST'])
def ct_kcs():
    return render_template('resources/ct-kcs.html')
    
@blueprint_resources.route('/ct-protocol', methods=['GET', 'POST'])
def ct_protocol():
    return render_template('resources/ct-protocol.html')
