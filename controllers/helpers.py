# Built-in imports
import logging
import re
import os
from urllib.parse import quote as url_quote, urlencode
from functools import wraps

from models.submission import Submission

try:
    from html.parser import HTMLParser
except:
    from HTMLParser import HTMLParser

from urllib.parse import unquote_plus, urlparse, parse_qsl, quote_plus, urlunparse, urlencode

# Pygments, for reporting nicely formatted Python snippets
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

# Flask imports
from flask import g, request, redirect, url_for, make_response, current_app
from flask import flash, session, jsonify, abort
import flask_security

from controllers.pylti.flask import LTI, LTIException

from main import app

from models.user import User
from models.course import Course
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup


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
                    flask_security.utils.login_user(g.user, remember=True)
                if not old_user:
                    flask_security.utils.login_user(g.user, remember=True)
            except LTIException as lti_exception:
                kwargs['lti'] = None
                kwargs['lti_exception'] = dict()
                kwargs['lti_exception']['exception'] = lti_exception
                kwargs['lti_exception']['kwargs'] = kwargs
                kwargs['lti_exception']['args'] = args
                flash("LTI Error: " + str(lti_exception) + ".\nTry reloading!")
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
            return redirect(url_for('courses.index'))
        return f(*args, **kwargs)

    return decorated_function


def instructor_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('security.login', next=request.url))
        if not g.user.is_instructor():
            flash("This portion of the site is only for instructors.")
            return redirect(url_for('courses.index'))
        return f(*args, **kwargs)

    return decorated_function


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('security.login', next=request.url))
        return f(*args, **kwargs)

    return decorated_function


def require_course_instructor(user, course_id):
    if not user.is_instructor(course_id):
        message = 'You are not an instructor (course ID {}).'.format(course_id)
        abort(make_response(jsonify(success=False, message=message), 200))
        return False
    return True


def require_course_grader(user, course_id):
    if not user.is_grader(course_id):
        message = 'You are not a grader (course ID {}).'.format(course_id)
        abort(make_response(jsonify(success=False, message=message), 200))
        return False
    return True


def check_resource_exists(resource, kind, id):
    if not resource:
        message = "The specified resource does not exist ({} {})".format(kind, id)
        abort(make_response(jsonify(success=False, message=message), 200))
        return False
    return True


def require_request_parameters(*parameters):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            for parameter in parameters:
                if parameter not in request.values:
                    return jsonify(success=False, message="Missing parameter: " + parameter)
            return f(*args, **kwargs)

        return decorated_function

    return decorator


def parse_lookup_code():
    '''
    The best "Security through Obscurity" possible! This obfuscates the url a little so that
    students don't simply increment the value and move to the weird problems.

    > process_lookup_code(AGI_NNYYYY)
    > process_lookup_code(AGI_011)
    1
    > process_lookup_code(AGI_2278129)
    12

    :return: int or None
    '''
    lookup = request.values.get('lookup', None)
    if lookup is None:
        return None
    try:
        _, code = lookup.split("_")
        start, length = map(int, code[:2])
        assignment_group_id = int(code[2 + start:2 + start + length])
    except ValueError:
        message = "I didn't understand the lookup code: " + lookup
        abort(make_response(jsonify(success=False, message=message), 400))
        return None
    return assignment_group_id


def maybe_int(value):
    try:
        return int(value)
    except ValueError:
        return None
    except TypeError:
        return None


def maybe_bool(value):
    if value is None:
        return False
    elif value.lower() == "false":
        return False
    return True


def parse_assignment_load():
    # Lookup Code
    assignment_group_id = parse_lookup_code()
    # Assignment Group ID
    if assignment_group_id is None:
        assignment_group_id = maybe_int(request.args.get('assignment_group_id', None))
    # Assignment ID
    current_assignment_id = maybe_int(request.args.get('assignment_id', None))
    # User
    user = g.get('user', None)
    user_id = user.id if user else None
    # Course ID of the user
    course_id = maybe_int(request.args.get('course_id', None))
    if course_id is None:
        course_id = int(g.course.id) if g.course else None
    # LTI submission URL
    new_submission_url = request.form.get('lis_result_sourcedid', None)
    # Embedded?
    embed = request.values.get('embed', 'false').lower() == 'true'
    # Get group
    assignment_group = AssignmentGroup.by_id(assignment_group_id)
    # Get assignments
    if assignment_group is None:
        assignment = Assignment.by_id(current_assignment_id)
        if assignment:
            assignments = [assignment]
        else:
            assignments = []
    else:
        assignments = assignment_group.get_assignments()
    # Potentially adjust assignment_id
    if current_assignment_id is None and assignments:
        current_assignment_id = assignments[0].id
    # Get submissions
    if user_id is None or course_id is None:
        submissions = []
    else:
        submissions = [assignment.load_or_new_submission(user_id, course_id, new_submission_url, assignment_group_id)
                       for assignment in assignments]
    # Determine the users' role in relation to this information
    role = user.determine_role(assignments, submissions) if user else "anonymous"
    # Combine the submissions and assignments
    group = list(zip(assignments, submissions))
    # Okay we've got everything
    return dict(group=group,
                assignment_group=assignment_group,
                assignments=assignments,
                submissions=submissions,
                assignment_group_id=assignment_group_id,
                current_assignment_id=current_assignment_id,
                user=user,
                user_id=user_id,
                role=role,
                course_id=course_id,
                embed=embed)


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


def get_course_id():
    course_id = request.args.get('course_id')
    if course_id is None:
        if 'course' in g:
            return g.course.id
        ajax_failure("No course_id given and not logged into a course.")
    course_id = maybe_int(course_id)
    if course_id is None:
        ajax_failure("Course ID was not an integer")
    return course_id


class UnknownUser:
    def __bool__(self):
        return False

    def __init__(self):
        self.id = None

    def is_grader(self, *args):
        return False

    def is_instructor(self, *args):
        return False


UNKNOWN_USER = UnknownUser()


def get_user():
    """

    :return: models.user.User
    """
    if 'user' in g and g.user:
        return g.user, g.user.id
    return UNKNOWN_USER, None


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


def highlight_python_code(code, linenos=True):
    formatter = HtmlFormatter(linenos=linenos, noclasses=True,
                              # style='colorful'
                              )
    return highlight(code, PythonLexer(), formatter)


def normalize_url(url):
    url = re.sub(r'http://', r'', url)
    url = re.sub(r'https://', r'', url)
    url = re.sub(r'file://', r'', url)
    parts = urlparse(url, scheme='')
    _query = urlencode(sorted(set(parse_qsl(parts.query))))
    _path = unquote_plus(parts.path)
    parts = parts._replace(query=_query, path=_path, scheme='', fragment='')
    url = "/".join((parts.netloc, _path, _query))
    return quote_plus(url)


def ensure_dirs(path):
    try:
        os.makedirs(path)
    except OSError as e:
        if not os.path.isdir(path):
            app.logger.warning(e.args + (path,))


def get_select_menu_link(id, title, is_embedded, is_group):
    launch_type = 'iframe' if is_embedded else 'lti_launch_url'
    base_url = url_quote(url_for('assignments.load',
                                 assignment_group_id=id,
                                 _external=True,
                                 embed=is_embedded))
    return '&'.join([base_url,
                     "return_type=" + launch_type,
                     "title=" + url_quote(title),
                     "text=BlockPy%20Exercise",
                     "width=100%25",
                     "height=600"])


def ajax_failure(message, error_code=200):
    return abort(make_response(jsonify(success=False, message=message, ip=request.remote_addr), error_code))


def ajax_success(original_data):
    original_data['ip'] = request.remote_addr
    original_data['success'] = True
    return jsonify(original_data)
