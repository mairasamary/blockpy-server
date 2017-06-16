from pprint import pprint
import json

# Pygments, for reporting nicely formatted Python snippets
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template
from werkzeug.utils import secure_filename

from controllers.helpers import lti, get_assignments_from_request

from main import app
from models.models import (User, Course, Assignment, AssignmentGroup,
                           Submission, Log)

blueprint_poll = Blueprint('poll', __name__, url_prefix='/poll')

@blueprint_poll.route('/', methods=['GET', 'POST'])
@blueprint_poll.route('/load', methods=['GET', 'POST'])
@lti(request='initial')
def load(lti=lti, lti_exception=None, assignments=None, submissions=None, embed=False):
    if assignments is None or submissions is None:
        assignments, submissions = get_assignments_from_request()
    if 'course_id' in request.values:
        course_id = int(request.values.get('course_id'))
    else:
        course_id = g.course.id if "course" in g else None
    if assignments:
        if g.user and g.user is not None:
            instructor_mode = g.user.is_instructor(course_id)
        else:
            instructor_mode = False
    else:
        instructor_mode = False
    if submissions:
        code = submissions[0].load_poll()
    else:
        code = []
    return render_template('poll/poll.html',
                           assignment= assignments[0] if assignments else None, 
                           submission= submissions[0] if submissions else None,
                           code = code,
                           course_id = course_id,
                           embed=embed,
                           instructor_mode=instructor_mode,
                           user_id=g.user.id if g.user else None)
                           
@blueprint_poll.route('/save_questions/', methods=['GET', 'POST'])
@blueprint_poll.route('/save_questions', methods=['GET', 'POST'])
def save_questions(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id):
        return jsonify(success=False, message="No Assignment ID or Course ID given!")
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this assignments' course.")
    body = request.form.get('body', '')
    Assignment.edit(assignment_id=assignment_id, presentation=body, type='poll')
    return jsonify(success=True)
    
@blueprint_poll.route('/load_questions/', methods=['GET', 'POST'])
@blueprint_poll.route('/load_questions', methods=['GET', 'POST'])
def load_questions():
    assignment_id = request.form.get('assignment_id', None)
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id):
        return jsonify(success=False, message="No Assignment ID or Course ID given!")
    assignment = Assignment.by_id(assignment_id)
    return jsonify(success=True, body = assignment.body)
@blueprint_poll.route('/submit_answers/', methods=['GET', 'POST'])
@blueprint_poll.route('/submit_answers', methods=['GET', 'POST'])
def submit_answers():
    pass
@blueprint_poll.route('/summarize_answers/', methods=['GET', 'POST'])
@blueprint_poll.route('/summarize_answers', methods=['GET', 'POST'])
def summarize_answers():
    pass
'''
@blueprint_poll.route('/download/', methods=['GET', 'POST'])
@blueprint_poll.route('/download', methods=['GET', 'POST'])
def download():
    assignment_id = request.form.get('assignment_id', None)
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id):
        return jsonify(success=False, message="No Assignment ID or Course ID given!")
        
    user = User.from_lti("canvas", session["pylti_user_id"], 
                         session.get("user_email", ""),
                         session.get("lis_person_name_given", ""),
                         session.get("lis_person_name_family", ""))
    submission = Submission.load(user.id, assignment_id)
    submission_destructured = submission.load_explanation()
    return jsonify(success=True, **submission_destructured)
    
#TODO: I wrote book_id instead of course_id all over the place for the uploading
    
@blueprint_poll.route('/explain/delete/', methods=['GET', 'POST'])
@blueprint_poll.route('/explain/delete', methods=['GET', 'POST'])
def delete():
    directive_id = request.values.get('directive_id', None)
    book_id = request.values.get('book_id', None)
    student_id = request.values.get('student_id', None)
    
    if student_id:
        student = User.query.get(student_id)
    else:
        student = g.user
    
    if not (directive_id or book_id):
        return jsonify(success=False, message="Insufficient parameters! Given {}".format(request.values))
    
    directory = os.path.join(app.config['FLASK_APP_DIR'],
                             'uploads', str(book_id), 
                             directive_id, str(student.id))
    full_file_path = os.path.join(directory, file_name)
    
    try:
        os.remove(full_file_path)
    except OSError as e:
        app.logger.warning(e.args)
    
    any_files = bool(os.listdir(directory))
    save_response(student_id, student.course_id, directive_id,
                  complete=any_files, timestamp=datetime.datetime.utcnow())
    
    return file_name

@blueprint_poll.route('/explain/upload/', methods=['POST'])
@blueprint_poll.route('/explain/upload', methods=['POST'])
@lti(request='session', app=app)
def upload(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id):
        return jsonify(success=False, message="No Assignment ID or Course ID given!")
    max_questions = int(request.values.get('max_questions', '4'))
    submission = Submission.load(g.user.id, int(assignment_id), int(course_id))
    
    # Get the uploaded information
    data_file = request.files.get('files')
    if not data_file:
        return jsonify(success=False, invalid=True, message="No data file!")
    code_submission = data_file.read().strip()
    try:
        elements = find_elements(code_submission)
    except SyntaxError:
        return jsonify(success=True, invalid=True, message="Your python file has errors in it.")
    submission_destructured = submission.save_explanation_code(code_submission, elements)
    
    code, elements = submission.load_explanation(max_questions)
    
    return jsonify(success=True, invalid=False, code=code, elements=elements)
    
@blueprint_poll.route('/explain/save/', methods=['POST'])
@blueprint_poll.route('/explain/save', methods=['POST'])
@lti(request='session', app=app)
def save_explain(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id):
        return jsonify(success=False, message="No Assignment ID or Course ID given!")
    assignment_version = int(request.form.get('version', -1))
    answer = request.form.get('answer', '')
    name = request.form.get('name', '')
    Submission.save_explanation_answer(g.user.id, int(assignment_id), int(course_id), name, answer)
    return jsonify(success=True)

@blueprint_poll.route('/explain/submit/', methods=['POST'])
@blueprint_poll.route('/explain/submit', methods=['POST'])
@lti(request='session', app=app)
def submit_explain(lti=lti):
    assignment_id = request.form.get('assignment_id', None)
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id):
        return jsonify(success=False, message="No Assignment ID or Course ID given!")
    assignment = Assignment.by_id(int(assignment_id))
    submission = Submission.save_correct(g.user.id, int(assignment_id), int(course_id))
    
    lis_result_sourcedid = request.form.get('lis_result_sourcedid', submission.url) or None
    code, elements = submission.load_explanation(4)
    if lis_result_sourcedid is None or lis_result_sourcedid == "NOT IN SESSION":
        return jsonify(success=False, message="Not in a grading context.")
    hl_lines  = [e['line'][0] for e in elements]
    message = """<h1>Code Annotation</h1>
    <div>Thank you for submitting. This activity will be graded manually, so please be patient!</div>
    <div><ul><li>{explanations}</li></ul></div>
    <div>{code}</div>
    """.format(
        code = highlight(code, PythonLexer(), HtmlFormatter(linenos=True, hl_lines=hl_lines, noclasses=True)),
        explanations = '</li><li>'.join(
            ['<b>{line} ({type}):</b> {answer}'.format(line=e['line'][0], 
                                                      answer=e['answer'], 
                                                      type=Submission.abbreviate_element_type(e['name']))
             for e in sorted(elements, key=lambda e: e['line'][0])])
        )
    lti.post_grade(0, message, endpoint=lis_result_sourcedid)   
    return jsonify(success=True)
'''