import json
import re
from datetime import datetime, timedelta

from natsort import natsorted

from controllers.helpers import compare_string_equality
from utilities import highlight_python_code, highlight_java_code
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


def to_iso_time(date):
    date = (date - date.astimezone().utcoffset())
    return date.strftime("%Y%m%dT%H%M%S.%fZ")

def date_description(date):
    if not date:
        return "Never"
    date = (date + date.astimezone().utcoffset())
    is_today = date > datetime.now().replace(hour=0, minute=0)
    if is_today:
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

def make_readonly_form(assignment, submission, is_grader):
    data = {
        "assignment": assignment.encode_json(),
        "submission": submission.encode_json(),
        "user": {"role": "owner" if is_grader else "student"}
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

#export const matchKeyInBrackets = (key: string) => new RegExp(`(?<!\\\))(\\[${key}\\])(?!\\()`);


def make_readonly_quiz_body(question, feedback, student, check, is_grader):
    text = question['body']
    if question['type'] in ('multiple_dropdowns_question', 'fill_in_multiple_blanks_question'):
        for key, value in student.items():
            if 'correct' in check:
                correct = check.get('correct', {}).get(key) == value
            elif 'correct_exact' in check:
                correct = compare_string_equality(value, check.get('correct_exact', {}).get(key, []))
            elif 'correct_regex' in check:
                correct = any(re.match(str(reg), value) for reg in check.get('correct_regex', {}).get(key, ""))
            text = re.sub(rf"(?<!\\)(\[{key}\])(?!\()",
                          f"<span class='mdq mdq-{correct if is_grader else 'unknown'}'>{value}</span>",
                          text)
    return Markdown(extensions=['fenced_code']).convert(text)


def check_quiz_answer(question, feedback, student, check, is_grader, part=None):
    if question['type'] == 'true_false_question':
        return student.lower() == str(check.get('correct')).lower() if is_grader else 'unknown'
    elif question['type'] == 'multiple_answers_question':
        return (part in check.get('correct', [])) == (part in student)
    elif question['type'] == 'matching_question':
        return student == check.get('correct', [])[part]
    elif question['type'] == 'multiple_choice_question':
        return student == check.get('correct')
    elif question['type'] in ("short_answer_question", "numerical_question"):
        if 'correct_exact' in check:
            return student in check['correct_exact']
        elif 'correct_regex' in check:
            return any(re.match(reg, student) for reg in check['correct_regex'])
        else:
            return False

def setup_jinja_filters(app):
    app.jinja_env.filters['markdown'] = Markdown(extensions=['fenced_code']).convert
    app.jinja_env.filters['zip'] = zip
    app.jinja_env.filters['json_load'] = attempt_json_load
    app.jinja_env.filters['list'] = list
    app.jinja_env.filters['natsorted'] = natsorted
    app.jinja_env.filters['get_setting'] = get_setting
    app.jinja_env.filters['highlight_python_code'] = highlight_python_code
    app.jinja_env.filters['highlight_java_code'] = highlight_java_code
    app.jinja_env.filters['to_friendly_date'] = to_friendly_date
    app.jinja_env.filters['from_friendly_date'] = from_friendly_date
    app.jinja_env.filters['modify_query'] = modify_query
    app.jinja_env.filters['date_description'] = date_description
    app.jinja_env.filters['make_readonly_form'] = make_readonly_form
    app.jinja_env.filters['make_readonly_quiz_body'] = make_readonly_quiz_body
    app.jinja_env.filters['check_quiz_answer'] = check_quiz_answer
