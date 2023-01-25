"""
Controllers meant to be run before or after every single request.
For example, to handle user management, permissions.
"""

import uuid
import traceback

from flask import session, g, request, flash, render_template
from flask_security.core import current_user
import flask_security
from controllers.pylti.flask import LTI_SESSION_KEY, LTI, LTIException

from main import app
from models import models
from models.user import User
from models.course import Course


def get_or_start_lti():
    if request.method == 'POST' and request.form.get('lti_message_type') == 'basic-lti-launch-request':
        lti = LTI([], {'app': app, 'request': 'initial'})
        lti.verify_request()
    # Already in LTI session?
    elif session.get(LTI_SESSION_KEY, False):
        lti = LTI([], {'app': app, 'request': 'session'})
    # Oops no LTI
    else:
        lti = None
    return lti


def load_lti_user():
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
                               g.user.id,
                               session.get("lis_outcome_service_url", ""))
    session['lti_course_id'] = g.course.id
    session['is_lti_active'] = True
    g.user.update_roles(g.roles, g.course.id)
    if old_user != g.user:
        flask_security.utils.logout_user()
        flask_security.utils.login_user(g.user, remember=True)
    elif not old_user:
        flask_security.utils.login_user(g.user, remember=True)


def load_nonlti_user():
    if 'lti_course_id' in session and g.user:
        g.course = models.Course.by_id(session['lti_course'])
        g.roles = g.user.get_course_roles(g.course.id)
    session['is_lti_active'] = False


@app.before_request
def load_user():
    # If new LTI launch or LTI is in session, create LTI object
    try:
        g.lti = get_or_start_lti()
    except LTIException as lti_exception:
        app.logger.error(f"LTI Error: {lti_exception}")
        if app.config['DEBUG']:
            flash(f"LTI Error: {lti_exception}")
            lti_exception = ''.join(traceback.TracebackException.from_exception(lti_exception).format())
            return render_template('lti/lti_error.html', message=f"Error during LTI: <pre>{lti_exception}</pre>")
        else:
            return render_template('lti/lti_error.html', message=f"Error during LTI. Please consult with Dr. Bart.")
    # Get user from Flask-Login, if available
    if current_user.is_authenticated:
        g.user = current_user
    else:
        g.user = None
    # Get user data from LTI, if that's possible
    if g.lti is not None:
        load_lti_user()
    # Otherwise maybe we have some cached settings?
    else:
        load_nonlti_user()
    # Get anonymous user, if all else fails
    if g.user is None:
        if not request.endpoint or not request.endpoint.startswith('security.'):
            # Have we already created an anonymous user for this user?
            if 'uid' in session:
                uid = session['uid']
                g.user = models.User.find_anonymous_user(uid)
            # If not, then make them a new one
            if 'uid' not in session or g.user is None:
                uid = uuid.uuid4().hex
                session['uid'] = uid
                g.user = models.User.make_anonymous_user(uid)

