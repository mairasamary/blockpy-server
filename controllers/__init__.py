import os
import uuid
from urllib.parse import unquote

from flask import session, g, send_from_directory, request, jsonify, render_template
from flask import redirect, url_for
from flask_security.core import current_user

from main import app
from models import models
from controllers.helpers import admin_required
from utilities import highlight_python_code

import controllers.per_request
from controllers.admin import admin
import controllers.security

from controllers.courses import courses
app.register_blueprint(courses)

from controllers.assignments import blueprint_assignments
app.register_blueprint(blueprint_assignments)

from controllers.assignment_groups import blueprint_assignment_group
app.register_blueprint(blueprint_assignment_group)

from controllers.blockpy import blueprint_blockpy
app.register_blueprint(blueprint_blockpy)

from controllers.maze import blueprint_maze
app.register_blueprint(blueprint_maze)

from controllers.external import blueprint_external
app.register_blueprint(blueprint_external)

from controllers.grading import blueprint_grading
app.register_blueprint(blueprint_grading)

from controllers.quizzes import blueprint_quizzes
app.register_blueprint(blueprint_quizzes)

from controllers.api import blueprint_api
app.register_blueprint(blueprint_api)


@app.route('/', methods=['GET', 'POST'])
def index():
    """ initial access page to the lti provider.  This page provides
    authorization for the user.

    :param lti: the `lti` object from `pylti`
    :return: index page for lti provider
    """
    return render_template('index.html')


@app.route('/about/', methods=['GET', 'POST'])
@app.route('/about', methods=['GET', 'POST'])
@app.route('/public/', methods=['GET', 'POST'])
@app.route('/public', methods=['GET', 'POST'])
@app.route('/contact/', methods=['GET', 'POST'])
@app.route('/contact', methods=['GET', 'POST'])
def about():
    """
    Information about the various projects.
    """
    return render_template('about.html')


@app.route('/favicon.ico', methods=['GET', 'POST'])
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route("/site-map", methods=['GET', 'POST'])
def site_map():
    output = []
    for rule in app.url_map.iter_rules():
        options = {}
        for arg in rule.arguments:
            options[arg] = "[{0}]".format(arg)

        methods = ','.join(rule.methods)
        try:
            url = url_for(rule.endpoint, **options)
        except:
            url = "Unknown error"
        line = unquote("<td>{:50s}</td><td>{:20s}</td><td>{}</td>".format(rule.endpoint, methods, url))
        output.append(line)
    return "<table><tr>{}</tr></table>".format("</tr><tr>".join(sorted(output)))
