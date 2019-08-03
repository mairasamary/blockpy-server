import json

try:
    from urllib.parse import quote as url_quote
except:
    from urllib import quote as url_quote

from flask import (Blueprint, g, session, render_template, url_for, request, jsonify, abort, make_response,
                   flash, redirect)

from controllers.helpers import (lti, strip_tags,
                                 get_lti_property, require_request_parameters, login_required,
                                 require_course_instructor, get_select_menu_link,
                                 check_resource_exists, parse_assignment_load)

from main import app

import controllers.maze as maze
import controllers.blockpy as blockpy

from models.models import (db)
from models.course import Course
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup

blueprint_assignments = Blueprint('assignments', __name__, url_prefix='/assignments')


@blueprint_assignments.route('/', methods=['GET', 'POST'])
@blueprint_assignments.route('/load/', methods=['GET', 'POST'])
@blueprint_assignments.route('/load', methods=['GET', 'POST'])
@lti(request='initial')
def load(lti, lti_exception=None):
    editor_information = parse_assignment_load()
    # Use the proper template
    if editor_information['assignments'] and editor_information['assignments'][0].type == 'maze':
        return maze.load_editor(lti, editor_information)
    else:
        return blockpy.load_editor(lti, editor_information)


@blueprint_assignments.route('/new/', methods=['GET', 'POST'])
@blueprint_assignments.route('/new', methods=['GET', 'POST'])
@require_request_parameters('course_id')
@login_required
def new_assignment(lti=lti):
    # Get arguments
    course_id = int(request.values.get('course_id'))
    name = request.values.get('name', None) or None
    level = request.values.get('level', None) or None
    is_embedded = ('embed' == request.values.get('menu', "select"))
    assignment_type = request.values.get('type', "blockpy")
    # Verify permissions
    require_course_instructor(g.user, course_id)
    # Perform action
    assignment = Assignment.new(owner_id=g.user.id, course_id=course_id,
                                type=assignment_type, name=name, level=level)
    select_url = get_select_menu_link(assignment.id, assignment.title(), is_embedded, False)
    return jsonify(success=True,
                   redirect=url_for('assignments.load', assignment_id=assignment.id),
                   id=assignment.id,
                   name=assignment.name,
                   type=assignment_type,
                   instructions=strip_tags(assignment.instructions)[:255],
                   title=assignment.title(),
                   view=url_for('assignments.load', assignment_id=assignment.id, embed=is_embedded),
                   select=select_url,
                   edit=url_for('assignments.load', assignment_id=assignment.id, course_id=assignment.course_id),
                   date_modified=assignment.pretty_date_modified())


@blueprint_assignments.route('/remove', methods=['GET', 'POST'])
@blueprint_assignments.route('/remove/', methods=['GET', 'POST'])
@require_request_parameters('course_id')
@login_required
def remove_assignment(lti=None):
    assignment_id = int(request.values.get('assignment_id'))
    assignment = Assignment.by_id(assignment_id)
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    require_course_instructor(g.user, assignment.course_id)
    Assignment.remove(assignment.id)
    return jsonify(success=True)


@blueprint_assignments.route('/move_course', methods=['GET', 'POST'])
@blueprint_assignments.route('/move_course/', methods=['GET', 'POST'])
@require_request_parameters('new_course_id', 'assignment_id')
@login_required
def move_course(lti=None):
    assignment_id = int(request.values.get('assignment_id'))
    new_course_id = int(request.values.get('new_course_id'))
    assignment = Assignment.by_id(int(assignment_id))
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    require_course_instructor(g.user, assignment.course_id)
    require_course_instructor(g.user, new_course_id)
    # Perform action
    assignment.move_course(new_course_id)
    return jsonify(success=True)


@blueprint_assignments.route('/select', methods=['GET', 'POST'])
@blueprint_assignments.route('/select/', methods=['GET', 'POST'])
@lti(request='initial')
def select(lti, menu='select', lti_exception=None):
    """ Let's the user select from a list of assignments.
    """
    # Store current user_id and context_id
    assignments = Assignment.get_available()
    groups = AssignmentGroup.query.all()
    return_url = get_lti_property('launch_presentation_return_url')
    course_groups = Course.get_all_groups()
    editable_courses = g.user.get_editable_courses()

    return render_template('lti/select.html', assignments=assignments, groups=groups, return_url=return_url, menu=menu,
                           editable_courses=editable_courses, course_groups=course_groups)


@blueprint_assignments.route('/select_embed/', methods=['GET', 'POST'])
@blueprint_assignments.route('/select_embed', methods=['GET', 'POST'])
@lti(request='initial')
def select_embed(lti, lti_exception=None):
    """ Let's the user select from a list of assignments.
    """
    return select(menu='embed', lti=lti)


def process_assignments(assignments, user_id, course_id):
    id_map = {}
    for assignment in assignments:
        id = assignment['id']
        a = Assignment(name=assignment['name'],
                       instructions=assignment['instructions'],
                       give_feedback=assignment['on_run'],
                       starting_code=assignment['on_start'],
                       type='blockpy',
                       visibility=assignment['visibility'],
                       disabled=assignment['disabled'],
                       mode=assignment['mode'],
                       owner_id=user_id,
                       course_id=course_id,
                       version=assignment['version'],
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


@blueprint_assignments.route('/images/<path:path>', methods=['GET', 'POST'])
def assignments_static_images(path):
    return app.send_static_file('images/' + path)
