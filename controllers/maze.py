# Flask imports
from flask import Blueprint, render_template, g, request

from models.assignment import Assignment

from controllers.helpers import lti, parse_assignment_load

blueprint_maze = Blueprint('maze', __name__, url_prefix='/maze')


@blueprint_maze.route('/', methods=['GET', 'POST'])
@blueprint_maze.route('/load', methods=['GET', 'POST'])
def load(lti=lti, lti_exception=None, assignments=None, submissions=None, embed=False):
    editor_information = parse_assignment_load()
    print(editor_information)
    return load_editor(lti, editor_information)


def load_editor(lti, editor_information):
    assignment = Assignment.by_id(editor_information['current_assignment_id'])
    position = editor_information['assignments'].index(assignment)
    return render_template('maze/maze.html', ip=request.remote_addr,
                           level=assignment.name,
                           submission=editor_information['submissions'][position],
                           assignment=assignment,
                           **editor_information)
