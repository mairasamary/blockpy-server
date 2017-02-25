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

from models.models import db, Assignment

from controllers.helpers import lti

blueprint_course_materials = Blueprint('course_materials', __name__, url_prefix='/course_materials')

@app.route('/ct', methods=['GET', 'POST'])
@app.route('/ctvt', methods=['GET', 'POST'])
@app.route('/ctatvt', methods=['GET', 'POST'])
@app.route('/computational_thinking', methods=['GET', 'POST'])
@app.route('/computationalthinking', methods=['GET', 'POST'])
@app.route('/ct/', methods=['GET', 'POST'])
@app.route('/ctvt/', methods=['GET', 'POST'])
@app.route('/ctatvt/', methods=['GET', 'POST'])
@app.route('/computational_thinking/', methods=['GET', 'POST'])
@app.route('/computationalthinking/', methods=['GET', 'POST'])
def ct():
    return redirect(url_for('course_materials.index'))

@blueprint_course_materials.route('/', methods=['GET', 'POST'])
def index():
    return render_template('course_materials/index.html')
