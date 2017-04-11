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

blueprint_utilities = Blueprint('utilities', __name__, url_prefix='/utilities')

@blueprint_utilities.route('/canvas_dates', methods=['GET', 'POST'])
@blueprint_utilities.route('/canvas_dates/', methods=['GET', 'POST'])
def canvas_dates():
    course_id = request.values.get('course_id', None)
    access_token = request.values.get('access_token', None)
    return render_template('utilities/canvas_dates.html',
                           course_id=course_id, access_token=access_token)