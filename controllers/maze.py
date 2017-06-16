# Flask imports
from flask import Blueprint, render_template, g, request

from controllers.helpers import lti, get_assignments_from_request

blueprint_maze = Blueprint('maze', __name__, url_prefix='/maze')

@blueprint_maze.route('/', methods=['GET', 'POST'])
@blueprint_maze.route('/load', methods=['GET', 'POST'])
@lti(request='initial')
def load(lti=lti, lti_exception=None, assignments=None, submissions=None, embed=False):
    if assignments is None or submissions is None:
        assignments, submissions = get_assignments_from_request()
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
        if 'course_id' in request.values:
            course_id = int(request.values.get('course_id'))
    else:
        if 'course_id' in request.values:
            course_id = int(request.values.get('course_id'))
        else:
            course_id = None
    for assignment, submission in zip(assignments, submissions):
        if assignment_id == None:
            break
        elif assignment.id == int(assignment_id):
            break
    return render_template('maze/maze.html',
                                   group=list(zip(assignments, submissions)),
                                   assignment=assignment,
                                   submission= submission,
                                   assignment_id = assignment.id,
                                   level=assignment.name,
                                   embed=embed,
                                   course_id=course_id,
                                   user_id=g.user.id)