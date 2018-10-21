from datetime import datetime, timedelta
import time
import os
import json
import json
import logging
from pprint import pprint

from slugify import slugify
from natsort import natsorted

from flask_wtf import Form
from wtforms import IntegerField, BooleanField

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from main import app

from models.models import (db, Assignment, User, Submission, Log,
                           AssignmentGroup)

from controllers.helpers import (lti, get_assignments_from_request, 
                                 highlight_python_code, normalize_url,
                                 ensure_dirs)

blueprint_blockpy = Blueprint('blockpy', __name__, url_prefix='/blockpy')

def failure(message):
    return jsonify(success=False, message=message, ip=request.remote_addr)
                           
@blueprint_blockpy.route('/static/<path:path>', methods=['GET', 'POST'])
def blockpy_static(path):
    return app.send_static_file(path)

@blueprint_blockpy.route('/', methods=['GET', 'POST'])    
@blueprint_blockpy.route('/index', methods=['GET', 'POST'])
@blueprint_blockpy.route('/index/', methods=['GET', 'POST'])
def index():
    return render_template('blockpy/index.html')

@blueprint_blockpy.route('/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load', methods=['GET', 'POST'])
def load(lti=None, assignments=None, submissions=None, embed=False):
    """
    
    """
    if "embed" in request.args:
        embed = request.args.get("embed")
    if assignments is None or submissions is None:
        assignments, submissions = get_assignments_from_request()
    if "assignment_group_id" in request.args:
        group_id = int(request.args.get("assignment_group_id"))
    else:
        group_id = None
    if "assignment_id" in request.args:
        assignment_id = request.args.get("assignment_id")
    elif assignments:
        assignment_id = assignments[0].id
    else:
        assignment_id = None
    if assignments:
        if submissions:
            course_id = submissions[0].course_id
        else:
            course_id = assignments[0].course_id
        if g.user and g.user is not None:
            instructor_mode = g.user.is_instructor(course_id)
        else:
            instructor_mode = False
        if 'course_id' in request.values:
            course_id = int(request.values.get('course_id'))
    else:
        instructor_mode = False
        if 'course_id' in request.values:
            course_id = int(request.values.get('course_id'))
        else:
            course_id = None
    group = list(zip(assignments, submissions))
    
    return render_template('blockpy/blockpy.html',
                           group=group,
                           group_id=group_id,
                           course_id=course_id,
                           user_id=g.user.id if g.user is not None else -1,
                           embed=embed,
                           ip=request.remote_addr,
                           assignment_id=assignment_id,
                           instructor_mode=instructor_mode)
                           
@blueprint_blockpy.route('/load_assignment_give_feedback/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_assignment_give_feedback', methods=['GET', 'POST'])
def load_assignment_give_feedback():
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id is None:
        return failure("No Assignment ID given!")
    assignment = Assignment.by_id(assignment_id)
    return jsonify(success=True, give_feedback=assignment.give_feedback)
                           
@blueprint_blockpy.route('/load_assignment/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_assignment', methods=['GET', 'POST'])
def load_assignment(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    group_id = request.values.get('group_id', None)
    course_id = request.values.get('course_id',  g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id) or course_id == "":
        return failure("No Assignment ID or Course ID given!")
    timestamp = request.values.get('timestamp', '')
    user_id = g.user.id if g.user != None else -1
    assignment = Assignment.by_id(assignment_id)
    if user_id != -1:
        submission = assignment.get_submission(user_id, course_id=course_id)
        submission_status = submission.status
        submission_course_id = submission.course_id
        submission_code = submission.code
        log = Log.new('editor', 'load', assignment_id, user_id, 
                      body=str(assignment.version), timestamp=timestamp)
    else:
        submission_status = 0
        submission_course_id = course_id
        submission_code = assignment.starting_code or ""
    interface = ('Text' if assignment.mode.lower() == 'text' else 
                 'Split' if assignment.mode.lower() == 'split' else
                 'Upload' if assignment.mode.lower() == 'upload' else
                 'Blocks')
    upload = assignment.mode.lower() == 'upload'
    if assignment.settings:
        settings = json.loads(assignment.settings)
    else:
        settings = {}
    files = settings['files'] if 'files' in settings else []
    files = [f for f in files if f.strip()]
    added_modules = settings['modules']['added'] if 'modules' in settings else []
    removed_modules = settings['modules']['removed'] if 'modules' in settings else []
    return jsonify(success=True,
                   ip=request.remote_addr,
                   settings = {
                        'editor': interface,
                        'read_only': upload,
                        'status': submission_status
                    },
                   assignment = {
                        'assignment_id': assignment.id,
                        'course_id': course_id if course_id != None else submission_course_id,
                        'student_id': user_id,
                        'group_id': group_id,
                        'introduction': assignment.body,
                        'name': assignment.name,
                        'upload': upload,
                        'version': assignment.version,
                        'initial_view': interface,
                        'give_feedback': assignment.give_feedback,
                        'parsons': assignment.mode == 'parsons', 
                        'starting_code': assignment.starting_code,
                        'on_change': assignment.on_step,
                        'importable': settings.get('importable', False),
                        'secret': settings.get('secret', False),
                        'disable_algorithm_errors': settings.get('disable_algorithm_errors', False),
                        'disable_timeout': settings.get('disable_timeout', False),
                        'files': files,
                        'modules': {
                            'added': added_modules,
                            'removed': removed_modules,
                        },
                    },
                    programs = {
                        '__main__': submission_code,
                        'starting_code': assignment.starting_code,
                        'give_feedback': assignment.give_feedback,
                        'on_change': assignment.on_step
                    })

@blueprint_blockpy.route('/save_code/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_code', methods=['GET', 'POST'])
def save_code(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    assignment_version = int(request.values.get('version', -1))
    course_id = request.values.get('course_id',  g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id) or course_id == "":
        return failure("No Assignment ID or Course ID given!")
    code = request.values.get('code', '')
    timestamp = request.values.get('timestamp', '')
    filename = request.values.get('filename', '__main__')
    is_version_correct = True
    if filename == "__main__":
        submission, is_version_correct = Submission.save_code(g.user.id, assignment_id, int(course_id), code, assignment_version, timestamp=timestamp)
    elif g.user.is_instructor(int(course_id)):
        if filename == "give_feedback":
            Assignment.edit(assignment_id=assignment_id, give_feedback=code)
        elif filename == "on_change":
            Assignment.edit(assignment_id=assignment_id, on_step=code)
        elif filename == "starting_code":
            Assignment.edit(assignment_id=assignment_id, starting_code=code)
        log = Log.new('instructor', filename, assignment_id, g.user.id, body=code, timestamp=timestamp)
    return jsonify(success=True, 
                   is_version_correct=is_version_correct, 
                   ip=request.remote_addr)
    
@blueprint_blockpy.route('/save_events/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_events', methods=['GET', 'POST'])
def save_events(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    event = request.values.get('event', "blank")
    action = request.values.get('action', "missing")
    body = request.values.get('body', "")
    timestamp = request.values.get('timestamp', "")
    user_id = g.user.id if g.user != None else -1
    if assignment_id is None:
        return failure("No Assignment ID given!")
    log = Log.new(event, action, assignment_id, user_id, body=body, timestamp=timestamp)
    return jsonify(success=True, 
                   ip=request.remote_addr)

def get_group_report(group_id, user_id, course_id, hide_correctness):
    group = AssignmentGroup.by_id(group_id)
    assignments = natsorted(group.get_assignments(), key= lambda a: a.title())
    submissions = [a.get_submission(user_id, course_id=course_id) 
                   for a in assignments]
    completed = sum([s.correct or s.status/100 for s in submissions])
    total = len(assignments)
    score = completed/total
    table = "\n".join(
        ["<li><a href='#{slug}'>{name}</a>{completed}</li>".format(slug=slugify(a.name),
                                                       name=a.name,
                                                       completed= (" - "+"Completed"
                                                                   if s.correct else "<strong>Incomplete</strong>")
                                                                   if not hide_correctness else "")
         for a,s in zip(assignments, submissions)]
    )
    overview = '''
    <h1>Overview</h1>
    <div>Status: {completed}/{total} problems</div>
    <div>Score: {score}%</div>
    <div>Contents:
    <ol>
        {table}
    </ol></div>
    '''.format(completed=completed if not hide_correctness else '?', 
               total=total, 
               score=int(10000*score)/100 if not hide_correctness else '?', 
               table=table)
    return score, overview+'<br><br>'.join([
        get_report(assignment.type, 
                        assignment.name, 
                        submission, 
                        submission.get_block_image(), hide_correctness)
        for assignment, submission 
        in zip(assignments, submissions)
    ])+'<br><small>{uid}/{cid}/{aids}</small>'.format(uid=user_id, cid=course_id,
        aids=','.join([str(a.id) for a in assignments]))
def get_report(mode, name, submission, image="", hide_correctness=False):
    url = url_for('blockpy.get_submission_code', submission_id=submission.id, _external=True)
    if hide_correctness:
        status = "????"
    elif submission.correct:
        status = "Success!"
    elif submission.status:
        status = "Incomplete ({}%)".format(submission.status)
    else:
        status = "Incomplete"
    if mode == 'maze':
        return """
        <h1 id='{slug}'>Maze {name}</h1>
        <strong>Status:</strong><span> {status}</span>
        """.format(name=name, status=status, slug=slugify(name))
    else:
        code = highlight_python_code(submission.code)
        if image:
            image = "Submitted Blocks:<br><img src='{0}'>".format(image)
        #time = process_history([h['time'] for h in submission.get_history()])
        time = submission.version/60.0
        return '''
        <h1 id='{slug}'>{name}</h1>
        <div>Status: {status}</div>
        <div>Latest work in progress: <a href='{url}' target='_blank'>View</a></div>
        <div>Touches: {touches}</div>
        <div>Estimated Duration: {time:.2f} minutes</div>
        {image}
        <br>
        Submitted code:<br>
        {code}
        '''.format(name=name, slug=slugify(name),
                   status=status, url=url, time=time,
                   touches=submission.version, code=code, 
                   image=image)
    
@blueprint_blockpy.route('/save_correct/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_correct', methods=['GET', 'POST'])
@lti()
def save_correct(lti, lti_exception=None):
    assignment_id = request.values.get('assignment_id', None)
    assignment_group_id = request.values.get('group_id', None)
    status = float(request.values.get('status', "0.0"))
    image = request.values.get('image', "")
    hide_correctness = request.values.get('hide_correctness', "false")=="true"
    course_id = request.values.get('course_id', g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id):
        return failure("No Assignment ID or Course ID given!")
    assignment = Assignment.by_id(assignment_id)
    if status >= 1:
        submission = Submission.save_correct(g.user.id, assignment_id, course_id=int(course_id))
    else:
        submission = assignment.get_submission(g.user.id, course_id=course_id)
    submission.set_status(int(100*status))
    lis_result_sourcedid = request.values.get('lis_result_sourcedid', submission.url) or None
    if lis_result_sourcedid is None:
        return jsonify(success=True, submitted=False, 
                       message="Not in a grading context.",
                       ip=request.remote_addr)
    session['lis_result_sourcedid'] = lis_result_sourcedid
    image_url = submission.save_block_image(image)
    if assignment_group_id != None and assignment_group_id != '' and assignment_group_id != 'None':
        score, report = get_group_report(int(assignment_group_id), g.user.id, int(course_id), hide_correctness)
    else:
        report = get_report(assignment.type, assignment.name, submission, image=image_url, hide_correctness=hide_correctness)
        score = float(submission.correct) or status
    lti.post_grade(score, report, endpoint=lis_result_sourcedid)
    return jsonify(success=True, submitted=True, ip=request.remote_addr)
    
@blueprint_blockpy.route('/get_submission_code/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_submission_code', methods=['GET', 'POST'])
def get_submission_code(lti=lti):
    submission_id = request.values.get('submission_id', None)
    if submission_id is None:
        return "Sorry, no submission ID was given."
    submission = Submission.query.get(submission_id)
    if 'user' not in g or not g.user:
        return "You are not logged in as a grader! Make sure you've visited a BlockPy Canvas."
    if 'course' not in g or not g.course:
        return "You're not in a course context! Make sure you've visited a BlockPy Canvas."
    if not submission:
        return '#No submission found!'
    if g.user.is_grader(g.course.id) or submission.user_id == g.user.id:
        if submission.code:
            status = "100%" if submission.correct else str(submission.status)+"%"
            body = "<strong>Status: "+status+"</strong><hr>"
            body += "<pre>"+highlight_python_code(submission.code)+"</pre>"
            return body
        else:
            return "<strong>Status: 0%</strong><hr>#No code given!"
    else:
        return "Sorry, you do not have sufficient permissions to spy!"
        
@blueprint_blockpy.route('/get_submission_image/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/get_submission_image', methods=['GET', 'POST'])
def get_submission_image(lti=lti):
    submission_id = request.values.get('submission_id', None)
    if submission_id is None:
        return "Sorry, no submission ID was given."
    relative_image_path = 'uploads/submission_blocks/'+str(submission_id)+'.png'
    submission = Submission.query.get(int(submission_id))
    course_id = request.values.get('course_id', None)
    if course_id is None:
        if 'course' in g:
            course_id = g.course.id
        else:
            return "No course was found or given."
    if g.user.is_grader(course_id) or submission.user_id == g.user.id:
        return app.send_static_file(relative_image_path)
    else:
        return "Sorry, you do not have sufficient permissions to spy!"
    
@blueprint_blockpy.route('/save_presentation/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/save_presentation', methods=['GET', 'POST'])
def save_presentation(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id is None:
        return failure("No Assignment ID given!")
    presentation = request.values.get('introduction', "")
    parsons = request.values.get('parsons', "false") == "true"
    importable = request.values.get('importable', "false") == "true"
    secret = request.values.get('secret', "false") == "true"
    disable_algorithm_errors = request.values.get('disable_algorithm_errors', 'false') == 'true'
    disable_timeout = request.values.get('disable_timeout', 'false') == 'true'
    #text_first = request.values.get('text_first', "false") == "true"
    mode = request.values.get("initial", None)
    name = request.values.get('name', "")
    modules = request.values.get('modules', "")
    files = request.values.get('files', "")
    assignment = Assignment.by_id(int(assignment_id))
    if not g.user.is_instructor(int(assignment.course_id)):
        return jsonify(success=False, message="You are not an instructor in this assignments' course.")
    Assignment.edit(assignment_id=assignment_id, presentation=presentation, name=name, parsons=parsons, mode=mode, modules=modules, importable=importable, disable_algorithm_errors=disable_algorithm_errors, disable_timeout=disable_timeout, files=files, secret=secret)
    return jsonify(success=True, ip=request.remote_addr)
    
@blueprint_blockpy.route('/get_history/', methods=['GET', 'POST'])    
@blueprint_blockpy.route('/get_history', methods=['GET', 'POST'])
def get_history(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    assignment_version = int(request.values.get('version', -1))
    course_id = request.values.get('course_id',  g.course.id if 'course' in g else None)
    if None in (assignment_id, course_id) or course_id == "":
        return failure("No Assignment ID or Course ID given!")
    submission = Submission.load(g.user.id, assignment_id, int(course_id))
    return jsonify(success=True, 
                   data=submission.get_history(), 
                   ip=request.remote_addr)

@blueprint_blockpy.route('/load_corgis/<path:path>', methods=['GET', 'POST'])
def load_corgis(path):
    return app.send_static_file('corgis/{path}'.format(path=path))
    
@blueprint_blockpy.route('/load_file/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/load_file', methods=['GET', 'POST'])
def load_file():
    assignment_id = request.values.get('assignment_id', '0')
    filename = request.values.get('filename', None)
    type = request.values.get('type', None)
    if None in (filename, type, assignment_id):
        return failure("No Assignment ID, filename, or type given!")
    files_folder = os.path.join(app.config['UPLOADS_DIR'], 'files', assignment_id)
    ensure_dirs(files_folder)
    if type == 'url':
        filename = normalize_url(filename)+".txt"
    elif type == 'file':
        filename = secure_filename(filename)
    file_path = os.path.join(files_folder, filename)
    try:
        with open(file_path) as inp:
            contents = inp.read()
        return jsonify(success=True, data=contents, ip=request.remote_addr)
    except IOError as e:
        return jsonify(success=False, message=str(e), ip=request.remote_addr)
        
    
@blueprint_blockpy.route('/force_right_section/', methods=['GET', 'POST'])    
@blueprint_blockpy.route('/force_right_section', methods=['GET', 'POST'])    
def force_right_section():
    kaf_students = Submission.query.with_entities(Submission.user_id).filter_by(course_id=5).distinct().all()
    kaf_students = [a[0] for a in kaf_students]
    my_submissions = Submission.query.filter_by(course_id=8).all()
    modified = []
    for submission in my_submissions:
        if submission.user_id in kaf_students:
            submission.course_id = 5
            modified.append( {"user": submission.user_id, "course": submission.course_id, "assignment": submission.assignment_id, "id": submission.id})
    db.session.commit()
    return jsonify(result=modified)

@blueprint_blockpy.route('/fix_ghost_submission/', methods=['GET', 'POST'])    
@blueprint_blockpy.route('/fix_ghost_submission', methods=['GET', 'POST'])    
@lti()
def fix_ghost_submission(lti, lti_exception=None):
    my_course_stuff = Submission.query.filter_by(course_id=8).all()
    result = []
    for row in my_course_stuff:
        meta_course = Submission.query.filter_by(course_id=3, assignment_id=row.assignment_id,
                                              user_id=row.user_id).first()
        if meta_course is not None:
            row.code = meta_course.code
            row.correct = meta_course.correct
            row.assignment_version = meta_course.assignment_version
            row.version = meta_course.version
            db.session.commit()
            if row.url:
                code = highlight(row.code, PythonLexer(), HtmlFormatter())
                image_url = url_for('blockpy.get_submission_image', submission_id=row.id, _external=True)
                url = url_for('blockpy.get_submission_code', submission_id=row.id, _external=True)
                potential_image = "Submitted Blocks:<br><img src='{0}'>".format(image_url)
                if row.correct:
                    message = "Success!"
                else:
                    message = "Incomplete"
                body = '''
                <h1>{message}</h1>
                <div>Latest work in progress: <a href='{url}' target='_blank'>View</a></div>
                <div>Touches: {touches}</div>
                {potential_image}
                <br>
                Submitted code:<br>
                {code}
                '''.format(message=message, url=url, touches=row.version, code=code, potential_image=potential_image)
                lti.post_grade(float(row.correct), body, endpoint=row.url)
            result.append(["Changed", row.assignment_id, row.user_id, "to", meta_course.code, meta_course.correct, row.url])
    return jsonify(result=result)
    

@blueprint_blockpy.route('/replay', methods=['GET', 'POST'])
@blueprint_blockpy.route('/replay/', methods=['GET', 'POST'])
def replay_page():
    return render_template('blockpy/replay.html')

GAP_THRESHOLD = 2*60
def process_history(history):
    if len(history) <= 1:
        return 0
    total_duration = 0.0
    previous_time = None
    for a_time in history:
        parsed_time = datetime.strptime(a_time[ :15], "%Y%m%d-%H%M%S")
        if previous_time != None:
            diff = (parsed_time - previous_time).seconds
            if diff < GAP_THRESHOLD:
                total_duration += diff
        previous_time = parsed_time
    return total_duration/60.
    
@blueprint_blockpy.route('/browse_submissions', methods=['GET', 'POST'])
@blueprint_blockpy.route('/browse_submissions/', methods=['GET', 'POST'])
def browse_submissions():
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id is None:
        return failure("No Assignment ID given!")
    assignment_id = int(assignment_id)
    course_id = request.values.get('course_id',  g.course.id if 'course' in g else None)
    if course_id == None or course_id == "":
        return failure("No Course ID given!")
    if g.user is None or not g.user.is_instructor(int(course_id)):
        return failure("You are not an instructor in this assignments' course.")
    submissions = Submission.by_assignment(assignment_id, int(course_id))
    formatter = HtmlFormatter(linenos=True, noclasses=True)
    python_lexer = PythonLexer()
    for submission, user, assignment in submissions:
        submission.highlighted_code = highlight(submission.code, python_lexer, formatter)
        submission.history = process_history([h['time'] for h in submission.get_history()])
    return render_template('blockpy/browse_submissions.html', 
                           course_id=course_id, 
                           assignment_id=assignment_id,
                           submissions=submissions,
                           ip=request.remote_addr)

@blueprint_blockpy.route('/watch', methods=['GET', 'POST'])
@blueprint_blockpy.route('/watch/', methods=['GET', 'POST'])
def watch():
    assignment_list = request.values.get('assignments', '')
    assignments = [int(aid) for aid in assignment_list.split(',') if len(aid) > 0]
    course_id = request.values.get('course_id',  g.course.id if 'course' in g else None)
    if course_id == None or course_id == "":
        return failure("No Course ID given!")
    if g.user is None or not g.user.is_instructor(int(course_id)):
        return failure("You are not an instructor in this assignments' course.")
    update = request.values.get('update', 'false') == "true"
    if update:
        data = []
        for aid in assignments:
            submissions = Submission.by_assignment(aid, int(course_id))
            completions = sum([int(sua[0].correct) for sua in submissions])
            workings = Submission.get_latest(aid, int(course_id))
            histories = [process_history([h['time'] for h in sua[0].get_history()])
                         for sua in submissions]
            touches = [int(sua[0].version) for sua in submissions]
            feedbacks = [l[0] for l in Log.calculate_feedbacks(aid, course_id)]
            data.append({'id': aid,
                         'Completions': completions,
                         'Workings': workings,
                         'Time': histories,
                         'Touches': touches,
                         'Feedbacks': feedbacks})
        return jsonify(success=True, data=data)
    else:
        assignments = [Assignment.by_id(aid) for aid in assignments]
        return render_template('blockpy/watch.html', course_id=course_id, assignments=assignments,
                               assignment_list=assignment_list)
   
'''
@blueprint_blockpy.route('/regenerate', methods=['GET', 'POST'])
@blueprint_blockpy.route('/regenerate/', methods=['GET', 'POST'])
def regenerate():
    return render_template('blockpy/regenerate.html')

@blueprint_blockpy.route('/regenerate_events/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/regenerate_events', methods=['GET', 'POST'])
def regenerate_events(lti=lti):
    assignment_id = request.values.get('assignment_id', None)
    log_id = request.values.get('log_id', '')
    event = request.values.get('event', "blank")
    action = request.values.get('action', "missing")
    body = request.values.get('body', "")
    timestamp = request.values.get('timestamp', "")
    user_id = request.values.get('user_id', "")
    #user_id = g.user.id if g.user != None else -1
    if assignment_id is None:
        return jsonify(success=False, message="No Assignment ID given!")
    #log = Log.new(event, action, assignment_id, user_id, body=body, timestamp=timestamp)
    if event == 'feedback':
        student_interactions_logger = logging.getLogger('Feedbackfull')
        student_interactions_logger.info(
            json.dumps({'assignment_id': assignment_id, 'log_id': log_id, 'event': event,
                        'action': action, 'body': body, 'user_id': user_id})
        )
    return jsonify(success=True)
    
COMPLETED_LOG_IDS = []
dir = app.config['ROOT_DIRECTORY']+'/log/feedbackless/'
feedbackless = sorted([dir+s for s in os.listdir(dir)])
LOG_FILENAME = os.path.join(app.config['ROOT_DIRECTORY'], 'log/feedbackfull/feedbackfull.log')
with open(LOG_FILENAME) as inp:
    for line in inp:
        COMPLETED_LOG_IDS.append(json.loads(line)['log_id'])

@blueprint_blockpy.route('/regenerate_walk/', methods=['GET', 'POST'])
@blueprint_blockpy.route('/regenerate_walk', methods=['GET', 'POST'])
def regenerate_walk(lti=lti):
    user_id = g.user.id if g.user != None else -1
    if 'user' not in g or not g.user:
        return jsonify(success=False, message="You are not logged in!")
    if not g.user.is_grader(g.course.id):
        return jsonify(success=False, message="You are not logged in as a grader!")
    # find a new log to fix
    
    walks = []
    # continue if there are files to process, and we have no walk
    while feedbackless and not walks:
        less_file = feedbackless.pop()
        walks = []
        with open(less_file) as inp:
            for line in inp:
                data = json.loads(line)
                if data['log_id'] not in COMPLETED_LOG_IDS:
                    walks.append(data)
    if walks:
        return jsonify(success=True, walks=walks, more_to_do=True)
    else:
        return jsonify(success=True, walks=[], more_to_do=False)
'''

@blueprint_blockpy.route('/images/<path:path>', methods=['GET', 'POST'])
def assignments_static_images(path):
    return app.send_static_file('images/'+path)
