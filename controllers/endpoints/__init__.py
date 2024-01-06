from flask import current_app
import controllers.endpoints.basic

from controllers.endpoints.courses import courses
current_app.register_blueprint(courses)

from controllers.endpoints.assignments import blueprint_assignments
current_app.register_blueprint(blueprint_assignments)

from controllers.endpoints.assignment_groups import blueprint_assignment_group
current_app.register_blueprint(blueprint_assignment_group)

from controllers.endpoints.blockpy import blueprint_blockpy
current_app.register_blueprint(blueprint_blockpy)

from controllers.endpoints.maze import blueprint_maze
current_app.register_blueprint(blueprint_maze)

from controllers.endpoints.external import blueprint_external
current_app.register_blueprint(blueprint_external)

from controllers.endpoints.grading import blueprint_grading
current_app.register_blueprint(blueprint_grading)

from controllers.quizzes import blueprint_quizzes
current_app.register_blueprint(blueprint_quizzes)

from controllers.endpoints.api import blueprint_api
current_app.register_blueprint(blueprint_api)





