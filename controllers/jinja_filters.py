import json
from datetime import datetime, timedelta

from natsort import natsorted

from controllers import highlight_python_code
from flask import request
from werkzeug.urls import url_encode
from markdown import Markdown


def attempt_json_load(data):
    try:
        return json.loads(data)
    except json.decoder.JSONDecodeError:
        return {}


def get_setting(assignment, *keys):
    if assignment.settings:
        settings = json.loads(assignment.settings)
    else:
        settings = {}
    for key in keys:
        if key in settings:
            settings = settings[key]
        else:
            return None
    return settings


def date_description(date):
    if not date:
        return "Never"
    if date > datetime.now()-timedelta(days=1):
        return "Today, " +date.strftime("%I:%M") + date.strftime("%p").lower()
    return date.strftime("%B %d %Y, %I:%M") + date.strftime("%p").lower()

FRIENDLY_DATE_FORMAT = "%B %d %Y, %I%M %p"

def to_friendly_date(date):
    return date.strftime(FRIENDLY_DATE_FORMAT)


def from_friendly_date(date):
    return datetime.strptime(date, FRIENDLY_DATE_FORMAT)


def modify_query(new_values):
    args = request.args.copy()

    for key, value in new_values.items():
        args[key] = value

    return '{}?{}'.format(request.path, url_encode(args))

def make_readonly_form(assignment, submission):
    data = {
        "assignment": assignment.encode_json(),
        "submission": submission.encode_json(),
        "user": {"role": "owner"}
    }
    data['assignment']['forked_id'] = assignment.id
    data['assignment']['forked_version'] = assignment.version
    data['assignment']['id'] = None
    data['assignment']['url'] = ""
    data['assignment']['course_id'] = None
    data['submission']['id'] = None
    data['submission']['endpoint'] = ""
    data['submission']['url'] = ""
    data['submission']['user_id'] = None
    data['submission']['course_id'] = None
    data['submission']['assignment_id'] = None
    data['submission']['grading_status'] = "NotReady"
    data['submission']['submission_status'] = "inProgress"
    return json.dumps(data)


def setup_jinja_filters(app):
    app.jinja_env.filters['markdown'] = Markdown(extensions=['fenced_code']).convert
    app.jinja_env.filters['zip'] = zip
    app.jinja_env.filters['json_load'] = attempt_json_load
    app.jinja_env.filters['list'] = list
    app.jinja_env.filters['natsorted'] = natsorted
    app.jinja_env.filters['get_setting'] = get_setting
    app.jinja_env.filters['highlight_python_code'] = highlight_python_code
    app.jinja_env.filters['to_friendly_date'] = to_friendly_date
    app.jinja_env.filters['from_friendly_date'] = from_friendly_date
    app.jinja_env.filters['modify_query'] = modify_query
    app.jinja_env.filters['date_description'] = date_description
    app.jinja_env.filters['make_readonly_form'] = make_readonly_form
