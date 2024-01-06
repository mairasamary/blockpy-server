"""
The models and database connections
"""
from flask import Flask
from models.generics.models import db, migrate, ma
from models.user import User, UserSchema
from models.course import Course, CourseSchema
from models.role import Role, RoleSchema
from models.assignment import Assignment, AssignmentSchema
from models.assignment_tag import AssignmentTag, AssignmentTagSchema
from models.assignment_tag_membership import assignment_tag_membership, AssignmentTagMembershipSchema
from models.assignment_group import AssignmentGroup, GroupSchema
from models.assignment_group_membership import AssignmentGroupMembership
from models.authentication import Authentication, AuthenticationSchema
from models.log import Log, LogSchema
from models.review import Review, ReviewSchema
from models.submission import Submission, SubmissionSchema
from models.sample_submission import SampleSubmission, SampleSubmissionSchema
from models.invite import Invite, InviteSchema
from models.report import Report, ReportSchema


def init_database(app: Flask) -> Flask:
    """
    Initialize the database.

    :param app: The main Flask application
    :return: The same (modified) Flask application
    """
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)

    return app


#: A listing of all the tables
ALL_TABLES = (
    Assignment, AssignmentGroup, AssignmentGroupMembership,
    AssignmentTag, assignment_tag_membership,
    Course, Invite,
    Submission, Review, SampleSubmission,
    User, Role, Authentication,
    Log, Report
)
