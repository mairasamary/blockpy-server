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

blueprint_homework = Blueprint('homework', __name__, url_prefix='/homework')

@blueprint_homework.route('/launch', methods=['GET', 'POST'])
def launch():
    print(session.keys())
    print(request.values.get('ext_content_return_url'))
    return redirect(request.values.get('ext_content_return_url')+"?url=http%3A%2F%2Fi.imgur.com%2Fabcde.jpg&return_type=url")
    #return render_template('homework/launch.html')
