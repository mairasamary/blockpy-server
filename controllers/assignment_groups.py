from pprint import pprint
from lxml import etree
from urllib import quote as url_quote
import json

# Pygments, for reporting nicely formatted Python snippets
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

from flask.ext.wtf import Form

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
    # Verify permissions
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this course.")
    # Perform action
    assignment_group = AssignmentGroup.new(owner_id=g.user.id, course_id=int(course_id))
    # Result
    return jsonify(success=True, id=assignment_group.id, name=assignment_group.name)
    
@blueprint_assignment_group.route('/remove', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/remove', methods=['GET', 'POST'])
def remove_group(lti=lti):
    ''' Removes a group from a course'''
    # Get arguments
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    assignment_group_id = request.values.get('assignment_group_id', None)
    if assignment_group_id is None:
        return jsonify(success=False, message="No assignment group id")
    # Verify permissions
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this course.")
    # Perform action
    AssignmentGroup.remove(int(assignment_group_id))
    # Result
    return jsonify(success=True)
    
@blueprint_assignment_group.route('/edit', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/edit', methods=['GET', 'POST'])
def edit_group(lti=lti):
    # Get arguments
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    assignment_group_id = request.values.get('assignment_group_id', None)
    if assignment_group_id is None:
        return jsonify(success=False, message="No assignment group id.")
    new_name = request.values.get('new_name', None)
    move = request.values.get('move', None)
    move = int(move) if move is not None else None
    if new_name is None and move is None:
        return jsonify(success=False, message="No new_name or move given.")
    # Verify permissions
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this course.")
    if not AssignmentGroup.is_in_course(int(assignment_group_id), int(course_id)):
        return jsonify(success=False, message="That assignment group does not belong to that course.")
    # Perform action
    group = AssignmentGroup.edit(int(assignment_group_id), name=new_name, move=move)
    # Result
    return jsonify(success=True, position = group.position, name = group.name)

@blueprint_assignment_group.route('/move_membership', methods=['GET', 'POST'])
@blueprint_assignment_group.route('/move_membership/', methods=['GET', 'POST'])
def move_membership(lti=lti):
    # Get arguments
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    assignment_id = request.values.get('assignment_id', None)
    new_group_id = request.values.get('new_group_id', None)
    if None in (assignment_id, new_group_id):
        return jsonify(success=False, message="Need assignment_id and new_group_id.")
    # Verify permissions
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="You are not an instructor in this course.")
    if not Assignment.is_in_course(int(assignment_id), int(course_id)):
        return jsonify(success=False, message="That assignment does not belong to that course.")
    if not AssignmentGroup.is_in_course(int(new_group_id), int(course_id)):
        return jsonify(success=False, message="That assignment group does not belong to that course.")
    # Perform action
    AssignmentGroupMembership.move_assignment(int(assignment_id), int(new_group_id))
    # Result
    return jsonify(success=True)

