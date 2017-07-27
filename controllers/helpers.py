# Built-in imports
from datetime import timedelta
import re
from pprint import pprint
from functools import wraps, update_wrapper
import calendar, datetime
import json
try:
    from html.parser import HTMLParser
except:
    from HTMLParser import HTMLParser
    
# Pygments, for reporting nicely formatted Python snippets
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

# Flask imports
from flask import g, request, redirect, url_for, make_response, current_app
from flask import flash, session, jsonify
import flask_security
from flask_security.core import current_user
from flask import request as r

from controllers.pylti.flask import LTI, LTIException

from main import app

from models.models import (User, Course, AssignmentGroup, Assignment)

def lti(request='any', *lti_args, **lti_kwargs):
    """
    LTI decorator

    :param: request - Request type from
        :py:attr:`pylti.common.LTI_REQUEST_TYPE`. (default: any)
    :return: wrapper
    """

    def lti_outer_wrapper(function):
        @wraps(function)
        def lti_wrapper(*args, **kwargs):
            """
            Pass LTI reference to function or return error.
            """
            try:
                the_lti = LTI(lti_args, lti_kwargs)
                the_lti.verify()
                kwargs['lti'] = the_lti
                old_user = g.user
                g.user = User.from_lti("canvas", 
                                       session["pylti_user_id"], 
                                       session.get("lis_person_contact_email_primary", ""),
                                       session.get("lis_person_name_given", "Canvas"),
                                       session.get("lis_person_name_family", "User"))
                g.roles = session["roles"].split(",") if "roles" in session else []
                g.course = Course.from_lti("canvas", 
                                       session["context_id"], 
                                       session.get("context_title", ""), 
                                       g.user.id)
                session['lti_course'] = g.course.id
                g.user.update_roles(g.roles, g.course.id)
                if old_user != g.user:
                    flask_security.utils.logout_user()
                    flask_security.utils.login_user(g.user, remember = True)
                if not old_user:
                    flask_security.utils.login_user(g.user, remember = True)
            except LTIException as lti_exception:
                kwargs['lti'] = None
                kwargs['lti_exception'] = dict()
                kwargs['lti_exception']['exception'] = lti_exception
                kwargs['lti_exception']['kwargs'] = kwargs
                kwargs['lti_exception']['args'] = args
                flash("LTI Error: "+str(lti_exception)+".\nTry reloading!")
            return function(*args, **kwargs)
        return lti_wrapper
    lti_kwargs['request'] = request
    lti_kwargs['app'] = app
    return lti_outer_wrapper

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('security.login', next=request.url))
        if not g.user.is_admin():
            flash("This portion of the site is only for administrators.")
            return redirect(url_for('users.index'))
        return f(*args, **kwargs)
    return decorated_function

def instructor_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('security.login', next=request.url))
        if not g.user.is_instructor():
            flash("This portion of the site is only for instructors.")
            return redirect(url_for('users.index'))
        return f(*args, **kwargs)
    return decorated_function

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('security.login', next=request.url))
        return f(*args, **kwargs)
    return decorated_function
    
def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods
        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers
            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator
    
def get_assignments_from_request():
    assignment_id = request.args.get('assignment_id', None)
    assignment_group_id = request.args.get('assignment_group_id', None)
    if 'course_id' in request.args:
        course_id = int(request.args.get('course_id'))
    if 'course_id' in request.form:
        course_id = int(request.form.get('course_id'))
    if 'user' in g and g.user != None:
        user_id = g.user.id
    else:
        user_id = None
    if 'course' in g:
        course_id = g.course.id
    else:
        course_id = None
    submission_url = request.form.get('lis_result_sourcedid', '')
    # Assignment group or individual assignment?
    if assignment_group_id is not None:
        group = AssignmentGroup.by_id(int(assignment_group_id) if assignment_group_id != None else None)
        assignments = group.get_assignments()
        submissions = [a.get_submission(user_id, course_id=course_id, submission_url=submission_url) for a in assignments]
    elif assignment_id is not None:
        assignment = Assignment.by_id(int(assignment_id) if assignment_id != None else None)
        assignments = [assignment] if assignment else []
        submissions = [assignment.get_submission(user_id, course_id=course_id, submission_url=submission_url)] if assignment else []
    else:
        assignments = []
        submissions = []
    return assignments, submissions
    
class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.fed = []
    def handle_data(self, d):
        self.fed.append(d)
    def get_data(self):
        return ''.join(self.fed)
def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

def get_lti_property(property_name, default_value=None):
    if property_name in request.form:
        return request.form[property_name]
    elif property_name in session:
        return session[property_name]
    elif default_value is not None:
        return default_value
    raise KeyError('Property {0} not found in form or session.'.format(property_name))

def get_course_id(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        course_id = request.values.get('course_id', None)
        # There is a course_id
        if course_id is None:
            return jsonify(success=False, message="No course id")
        # It's an integer value
        try:
            course_id = int(course_id)
        except ValueError:
            return jsonify(success=False, message="Course ID wasn't an integer")
        # The user is an instructor in the course
        if not g.user.is_instructor(course_id):
            return jsonify(success=False, message="You are not an instructor in this course.")
        return f(*args, course_id=course_id, **kwargs)
    return decorated_function

def get_assignment_id(f):
    @wraps(f)
    def decorated_function(course_id, *args, **kwargs):
        assignment_id = request.values.get('assignment_id', None)
        # there is an assignment_id
        if assignment_id is None:
            return jsonify(success=False, message="No assignment id")
        # It's an integer value
        try:
            assignment_id = int(assignment_id)
        except ValueError:
            return jsonify(success=False, message="Assignment ID wasn't an integer")
        if not Assignment.is_in_course(assignment_id, course_id):
            return jsonify(success=False, message="That assignment id does not belong to that course.")
        return f(*args, course_id=course_id, **kwargs)
    return decorated_function

def highlight_python_code(code):
    formatter = HtmlFormatter(linenos=True, noclasses=True)
    return highlight(code, PythonLexer(), formatter)
