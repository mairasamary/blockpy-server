from pprint import pprint
from lxml import etree
import json
try:
    from urllib.parse import quote as url_quote
except:
    from urllib import quote as url_quote

# Pygments, for reporting nicely formatted Python snippets
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

from flask_wtf import Form

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from controllers.helpers import instructor_required, lti

from main import app
from models.models import (User, Course, Assignment, AssignmentGroup, 
                           AssignmentGroupMembership,
                           Submission, Log)
                           
blueprint_assignment_group = Blueprint('assignment_group', __name__, url_prefix='/assignment_group')

@blueprint_assignment_group.route('/add', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/add', methods=['GET', 'POST'])
def add_group(lti=lti):
    ''' Adds a group to a course'''
    # Get arguments
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    new_name = request.values.get('name', None)
    if new_name is None:
        return jsonify(success=False, message="No name given.")
    # Verify permissions
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this group's course.")
    # Perform action
    assignment_group = AssignmentGroup.new(owner_id=g.user.id, course_id=int(course_id), name=new_name)
    
    menu = request.values.get('menu', "select")
    launch_type = 'lti_launch_url' if menu != 'embed' else 'iframe'
    endpoint = 'assignments.load'
    select = url_quote(url_for(endpoint, assignment_group_id=assignment_group.id, _external=True, embed= menu == 'embed'))+"&return_type="+launch_type+"&title="+url_quote(assignment_group.name)+"&text=BlockPy%20Exercise&width=100%25&height=600"
    # Result
    return jsonify(success=True, id=assignment_group.id, name=assignment_group.name, select=select)
    
@blueprint_assignment_group.route('/remove', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/remove', methods=['GET', 'POST'])
def remove_group(lti=lti):
    ''' Removes a group from a course'''
    assignment_group_id = request.values.get('assignment_group_id', None)
    if assignment_group_id is None:
        return jsonify(success=False, message="No assignment group id")
    assignment_group = AssignmentGroup.by_id(int(assignment_group_id))
    # Verify permissions
    if not g.user.is_instructor(assignment_group.course_id):
        return jsonify(success=False, message="You are not an instructor in this course.")
    # Perform action
    AssignmentGroup.remove(assignment_group.id)
    # Result
    return jsonify(success=True)
    
@blueprint_assignment_group.route('/edit', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/edit', methods=['GET', 'POST'])
def edit_group(lti=lti):
    # Get arguments
    assignment_group_id = request.values.get('assignment_group_id', None)
    if assignment_group_id is None:
        return jsonify(success=False, message="No assignment group id.")
    assignment_group = AssignmentGroup.by_id(int(assignment_group_id))
    new_name = request.values.get('new_name', None)
    if new_name is None:
        return jsonify(success=False, message="No new_name given.")
    # Verify permissions
    if not g.user.is_instructor(assignment_group.course_id):
        return jsonify(success=False, message="You are not an instructor in this group's course.")
    # Perform action
    group = AssignmentGroup.edit(int(assignment_group_id), name=new_name)
    # Result
    return jsonify(success=True, name = group.name)

@blueprint_assignment_group.route('/move_membership', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/move_membership/', methods=['GET', 'POST'])
def move_membership(lti=None):
    # Get the attributes
    assignment_id = request.values.get('assignment_id', None)
    old_group_id = request.values.get('old_group_id', None)
    new_group_id = request.values.get('new_group_id', None)
    if None in (assignment_id, new_group_id, old_group_id):
        return jsonify(success=False, message="Need assignment_id, old_group_id, and new_group_id.")
    
    # Ensure that the assignment exists and that the user can modify it
    assignment = Assignment.by_id(int(assignment_id))
    if not g.user.is_instructor(assignment.course_id):
        return jsonify(success=False, message="You are not an instructor in this assignment's course.")
        
    # Verify permissions
    if int(new_group_id) != -1:
        new_assignment_group = AssignmentGroup.by_id(int(new_group_id))
        if not g.user.is_instructor(new_assignment_group.course_id):
            return jsonify(success=False, message="You are not an instructor in this assignment's course.")
    if int(old_group_id) != -1:
        old_assignment_group = AssignmentGroup.by_id(int(old_group_id))
        if not g.user.is_instructor(old_assignment_group.course_id):
            return jsonify(success=False, message="You are not an instructor in this assignment's course.")
    # Perform action
    AssignmentGroupMembership.move_assignment(int(assignment_id), int(new_group_id))
    # Result
    return jsonify(success=True)

