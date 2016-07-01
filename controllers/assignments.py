from flask import Blueprint, g, session, render_template, url_for, request, jsonify
from urllib import quote as url_quote

from controllers.helpers import lti, get_assignments_from_request, strip_tags

from main import app

import maze
import explain
import blockpy

from models.models import (db, Assignment, AssignmentGroup, User)

blueprint_assignments = Blueprint('assignments', __name__, url_prefix='/assignments')

@blueprint_assignments.route('/', methods=['GET', 'POST'])
@blueprint_assignments.route('/load', methods=['GET', 'POST'])
def load(lti=lti, lti_exception=None):
    """
    
    """
    assignments, submissions = get_assignments_from_request()
    if not assignments:
        return "Assignment not found"
    # Use the proper template
    if assignments[0].mode == 'maze':
        return maze.load(assignments=assignments, submissions=submissions, lti=lti)
    elif assignments[0].type == 'explain':
        return explain.load(assignments=assignments, submissions=submissions, lti=lti)
    else:
        return blockpy.load(assignments=assignments, submissions=submissions, lti=lti)

@blueprint_assignments.route('/new/', methods=['GET', 'POST'])
@blueprint_assignments.route('/new', methods=['GET', 'POST'])
def new_assignment(lti=lti):
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    menu = request.values.get('menu', "select")
    #TODO: change "normal" type to "blockpy"
    type = request.values.get('type', "normal")
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this course.")
    assignment = Assignment.new(owner_id=g.user.id, course_id=int(course_id), type=type)
    launch_type = 'lti_launch_url' if menu != 'share' else 'iframe'
    endpoint = 'assignments.load' if menu != 'share' else 'assignments.shared'
    return jsonify(success=True,
                   redirect=url_for('assignments.edit_assignment', assignment_id=assignment.id),
                   id= assignment.id,
                   name= assignment.name,
                   type= type,
                   body= strip_tags(assignment.body)[:255],
                   title= assignment.title(),
                   view = url_for('assignments.load', assignment_id=assignment.id),
                   select = url_quote(url_for(endpoint, assignment_id=assignment.id, _external=True))+"&return_type="+launch_type+"&title="+url_quote(assignment.title())+"&text=BlockPy%20Exercise&width=100%25&height=600",
                   edit= url_for('assignments.edit_assignment', assignment_id=assignment.id),
                   date_modified = assignment.date_modified.strftime(" %I:%M%p on %a %d, %b %Y").replace(" 0", " "))
    
@blueprint_assignments.route('/remove/', methods=['GET', 'POST'])
@blueprint_assignments.route('/remove', methods=['GET', 'POST'])
def remove_assignment(lti=lti):
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id is None:
        return jsonify(success=False, message="No assignment id")
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this course.")
    if not Assignment.is_in_course(int(assignment_id), int(course_id)):
        return jsonify(success=False, message="That assignment group does not belong to that course.")
    Assignment.remove(int(assignment_id))
    return jsonify(success=True)
    
@blueprint_assignments.route('/get/', methods=['GET', 'POST'])
@blueprint_assignments.route('/get', methods=['GET', 'POST'])
def get_assignment(lti=lti):
    '''
    Returns metadata about the assignment.
    '''
    assignment_id = request.values.get('assignment_id', None)
    if assignment_id is None:
        return jsonify(success=False, message="No assignment id")
    if not g.user.is_instructor(g.course.id):
        return jsonify(success=False, message="You are not an instructor in this course.")
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
    
@blueprint_assignments.route('/select_builtin_assignment/', methods=['GET', 'POST'])
@blueprint_assignments.route('/select_builtin_assignment', methods=['GET', 'POST'])
def select_builtin_assignment(lti=lti):
    assignment_type = request.args.get('assignment_type', None)
    assignment_id = request.args.get('assignment_id', None)
    if not g.user.is_instructor(g.course.id):
        return jsonify(success=False, message="You are not an instructor in this course.")
    assignment = Assignment.by_builtin(assignment_type, assignment_id, 
                                       owner_id=g.user.id, course_id=g.course.id)
    assignment_url = url_for('assignments.load', 
                             assignment_id=assignment.id, 
                             _external=True)
    encoded_url = url_quote(assignment_url)
    return jsonify(url=encoded_url)
    
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
@lti()
def select(lti=lti):
    """ Let's the user select from a list of assignments.
    """
    # Store current user_id and context_id
    assignments = Assignment.by_course(g.course.id, exclude_builtins=True)
    groups = [(group, group.get_assignments())
              for group in AssignmentGroup.by_course(g.course.id)]
    strays = AssignmentGroup.get_ungrouped_assignments(g.course.id)
    return_url = session['launch_presentation_return_url']
    
    return render_template('lti/select.html', assignments=assignments, strays=strays, groups=groups, return_url=return_url, menu='select')
