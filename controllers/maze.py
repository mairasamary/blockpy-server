# Flask imports
from flask import Blueprint, render_template, g

from controllers.helpers import lti, get_assignments_from_request

blueprint_maze = Blueprint('maze', __name__, url_prefix='/maze')

@blueprint_maze.route('/', methods=['GET', 'POST'])
@blueprint_maze.route('/load', methods=['GET', 'POST'])
@lti(request='initial')
def load(lti=lti, lti_exception=None, assignments=None, submissions=None):
    if assignments is None or submissions is None:
        assignments, submissions = get_assignments_from_request()
    return render_template('maze/maze.html',
                                   assignment= assignments[0], 
                                   submission= submissions[0],
                                   level=assignments[0].name,
                                   user_id=g.user.id)