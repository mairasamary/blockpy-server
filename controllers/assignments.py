from functools import wraps
from pprint import pprint
import json
try:
    from urllib.parse import quote as url_quote
except:
    from urllib import quote as url_quote

from flask import Blueprint, g, session, render_template, url_for, request, jsonify

from controllers.helpers import (lti, get_assignments_from_request, strip_tags, 
                                 get_lti_property, get_course_id, get_assignment_id)

from main import app

import controllers.maze as maze
import controllers.explain as explain
import controllers.blockpy as blockpy
import controllers.corgis as corgis
import controllers.poll as poll

from models.models import (db, Assignment, AssignmentGroup, User, Course)

blueprint_assignments = Blueprint('assignments', __name__, url_prefix='/assignments')

@blueprint_assignments.route('/', methods=['GET', 'POST'])
@blueprint_assignments.route('/load', methods=['GET', 'POST'])
@lti(request='initial')
def load(lti, lti_exception=None):
    assignments, submissions = get_assignments_from_request()
    if not assignments:
        return jsonify(success=False, message="Assignment not found")
    embed = request.values.get('embed', 'false') == 'True'
    # Use the proper template
    if assignments[0].type == 'maze':
        return maze.load(assignments=assignments, submissions=submissions, lti=lti,embed=embed)
    elif assignments[0].type == 'explain':
        return explain.load(assignments=assignments, submissions=submissions, lti=lti, embed=embed)
    elif assignments[0].type == 'poll':
        return poll.load(assignments=assignments, submissions=submissions, lti=lti, embed=embed)
    elif assignments[0].type in ('corgis (visualizer)', 'visualizer'):
        return corgis.redirect_language_index(language='visualizer', assignments=assignments, submissions=submissions, lti=lti, embed=embed)
    else:
        return blockpy.load(assignments=assignments, submissions=submissions, lti=lti, embed=embed)

@blueprint_assignments.route('/new/', methods=['GET', 'POST'])
@blueprint_assignments.route('/new', methods=['GET', 'POST'])
@get_course_id
def new_assignment(course_id, lti=lti):
    name = request.values.get('name', None) or None
    level = request.values.get('level', None) or None
    menu = request.values.get('menu', "select")
    #TODO: change "normal" type to "blockpy"
    type = request.values.get('type', "normal")
    
    assignment = Assignment.new(owner_id=g.user.id, course_id=course_id, type=type, name=name, level=level)
    launch_type = 'lti_launch_url' if menu != 'embed' else 'iframe'
    endpoint = 'assignments.load'
    return jsonify(success=True,
                   redirect=url_for('assignments.load', assignment_id=assignment.id),
                   id= assignment.id,
                   name= assignment.name,
                   type= type,
                   body= strip_tags(assignment.body)[:255],
                   title= assignment.title(),
                   view = url_for('assignments.load', assignment_id=assignment.id,  embed= menu == 'embed'),
                   select = url_quote(url_for(endpoint, assignment_id=assignment.id, _external=True, embed= menu == 'embed'))+"&return_type="+launch_type+"&title="+url_quote(assignment.title())+"&text=BlockPy%20Exercise&width=100%25&height=600",
                   edit= url_for('assignments.load', assignment_id=assignment.id, course_id=assignment.course_id),
                   date_modified = assignment.date_modified.strftime(" %I:%M%p on %a %d, %b %Y").replace(" 0", " "))
    
@blueprint_assignments.route('/remove/', methods=['GET', 'POST'])
@blueprint_assignments.route('/remove', methods=['GET', 'POST'])
def remove_assignment(lti=None):
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id == None:
        return jsonify(success=False, message="Need assignment_id.")
    assignment = Assignment.by_id(int(assignment_id))
    if not g.user.is_instructor(assignment.course_id):
        return jsonify(success=False, message="You are not an instructor in this assignment's course.")
    Assignment.remove(assignment.id)
    return jsonify(success=True)
    
@blueprint_assignments.route('/get/', methods=['GET', 'POST'])
@blueprint_assignments.route('/get', methods=['GET', 'POST'])
def get_assignment(lti=lti):
    '''
    Returns metadata about the assignment.
    '''
    
    # TODO: Security hole, evil instructors could remove assignments outside of their course
    assignment = Assignment.by_id(assignment_id)
    return jsonify(success=True, url=assignment.url, name=assignment.name,
                   body= strip_tags(assignment.body)[:255],
                   on_run=assignment.on_run,
                   title= assignment.title(),
                   answer=assignment.answer, type=assignment.type,
                   visibility=assignment.visibility, disabled=assignment.disabled,
                   mode=assignment.mode, version=assignment.version,
                   id=assignment.id, course_id=assignment.course_id,
                   date_modified = assignment.date_modified.strftime(" %I:%M%p on %a %d, %b %Y").replace(" 0", " "))
                   
@blueprint_assignments.route('/move_course/', methods=['GET', 'POST'])
@blueprint_assignments.route('/move_course', methods=['GET', 'POST'])
def move_course(lti=None):
    assignment_id = request.values.get('assignment_id', None)
    new_course_id = request.values.get('new_course_id', None)
    if None in (assignment_id, new_course_id):
        return jsonify(success=False, message="Need assignment_id and new_course_id.")
    assignment = Assignment.by_id(int(assignment_id))
    if not g.user.is_instructor(assignment.course_id):
        return jsonify(success=False, message="You are not an instructor in this assignment's course.")
    if not g.user.is_instructor(int(new_course_id)):
        return jsonify(success=False, message="You are not an instructor in the new course.")
    assignment.move_course(new_course_id)
    return jsonify(success=True)
    
@blueprint_assignments.route('/edit_assignment/<int:assignment_id>/', methods=['GET', 'POST'])
@blueprint_assignments.route('/edit_assignment/<int:assignment_id>', methods=['GET', 'POST'])
def edit_assignment(assignment_id, lti=lti):
    assignment = Assignment.by_id(assignment_id)
    if not assignment:
        return "Assignment ID not found"
    if not g.user.is_instructor(assignment.course_id):
        return jsonify(success=False, message="You are not an instructor in this course.")
    submission = assignment.get_submission(g.user.id)
    
    return render_template('lti/edit.html', 
                           assignment=assignment, 
                           submission=submission, 
                           user_id=g.user.id,
                           context_id=assignment.course_id)
                           
        
@blueprint_assignments.route('/batch_edit/', methods=['GET', 'POST'])
@blueprint_assignments.route('/batch_edit', methods=['GET', 'POST'])
def batch_edit(lti=lti):
    user, roles, course = ensure_canvas_arguments()
    if not g.user.is_instructor(g.course.id):
        return jsonify(success=False, message="You are not an instructor in this course.")
    assignments = Assignment.by_course(course.id)
    return render_template('lti/batch.html', 
                           assignments=assignments,
                           user_id=user.id,
                           context_id=course.id)
                           
                           
@blueprint_assignments.route('/check_assignments/', methods=['GET', 'POST'])
@blueprint_assignments.route('/check_assignments', methods=['GET', 'POST'])
def check_assignments(lti=lti):
    """ An AJAX endpoint for listing any new assignments.
    
    Unused.
    """
    assignments = Assignment.by_course(g.course.id)
    return jsonify(success=True, assignments=[a.to_dict() for a in assignments])
    
    
@blueprint_assignments.route('/select/', methods=['GET', 'POST'])
@blueprint_assignments.route('/select', methods=['GET', 'POST'])
@lti(request='initial')
def select(lti, menu='select'):
    """ Let's the user select from a list of assignments.
    """
    # Store current user_id and context_id
    assignments = Assignment.get_available()
    groups = AssignmentGroup.query.all()
    return_url = get_lti_property('launch_presentation_return_url')
    course_groups = Course.get_all_groups()
    editable_courses = g.user.get_editable_courses()
    
    return render_template('lti/select.html', assignments=assignments, groups=groups, return_url=return_url, menu=menu, editable_courses=editable_courses, course_groups=course_groups)

@blueprint_assignments.route('/select_embed/', methods=['GET', 'POST'])
@blueprint_assignments.route('/select_embed', methods=['GET', 'POST'])
@lti(request='initial')
def select_embed(lti):
    """ Let's the user select from a list of assignments.
    """
    return select(menu='embed', lti=lti)
    
def process_assignments(assignments, user_id, course_id):
    id_map = {}
    for assignment in assignments:
        id = assignment['id']
        a = Assignment(name=assignment['name'],
                   body=assignment['body'],
                   give_feedback=assignment['on_run'],
                   starting_code=assignment['on_start'],
                   type='blockpy',
                   visibility=assignment['visibility'],
                   disabled=assignment['disabled'],
                   mode=assignment['mode'],
                   owner_id = user_id,
                   course_id = course_id,
                   version = assignment['version'],
                   )
        db.session.add(a)
        db.session.commit()
        id_map[id] = a.id
    return id_map

@blueprint_assignments.route('/bulk_upload/', methods=['GET', 'POST'])
@blueprint_assignments.route('/bulk_upload', methods=['GET', 'POST'])
def bulk_upload():
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="Not an instructor in this course")
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file:
            return json.dumps(process_assignments(json.loads(file.read()), user_id=g.user.id, course_id=course_id))
    else:
        return '''
    <!doctype html>
    <title>Upload assignments (JSON)</title>
    <h1>Upload assignments (JSON)</h1>
    <form action="" method=post enctype=multipart/form-data>
      <p><input type=file name=file>
         <input type=submit value=Upload>
    </form>
    '''