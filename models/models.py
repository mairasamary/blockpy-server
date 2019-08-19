from datetime import datetime
import os

from main import app

from flask_sqlalchemy import SQLAlchemy

from flask_migrate import Migrate

from sqlalchemy import (Integer, Column, DateTime, func, ForeignKey, Table)
from sqlalchemy.ext.declarative import declared_attr

db = SQLAlchemy(app)
Model = db.Model
relationship = db.relationship
backref = db.backref

migrate = Migrate(app, db)


def datetime_to_string(a_datetime):
    return a_datetime.isoformat() + 'Z'


def string_to_datetime(a_string):
    try:
        return datetime.strptime(a_string, '%Y-%m-%dT%H:%M:%S.%fZ')
    except ValueError:
        return datetime.strptime(a_string, '%Y-%m-%dT%H:%M:%SZ')


def ensure_dirs(path):
    try:
        os.makedirs(path)
    except OSError as e:
        if not os.path.isdir(path):
            app.logger.warning(e.args + (path,))


''' self.user_id, use_owner, models.User.query.get, 'email' '''
def optional_encoded_field(id_value, owning_object, query, attr):
    if owning_object is not False:
        if owning_object is True:
            owning_object = query(id_value)
        if owning_object:
            return getattr(owning_object, attr)
    return ""


class Base(Model):
    __abstract__ = True

    @declared_attr
    def __tablename__(cls):
        return cls.__name__.lower()

    def __repr__(self):
        return str(self)

    def pretty_date_modified(self):
        return self.date_modified.strftime(" %I:%M%p on %a %d, %b %Y").replace(" 0", " ")

    def pretty_date_created(self):
        return self.date_created.strftime(" %I:%M%p on %a %d, %b %Y").replace(" 0", " ")

    id = Column(Integer(), primary_key=True)
    date_created = Column(DateTime, default=func.current_timestamp())
    date_modified = Column(DateTime, default=func.current_timestamp(),
                           onupdate=func.current_timestamp())


assignment_tag_membership = Table('assignment_tag_membership', Base.metadata,
                                  Column('assignment_id', Integer, ForeignKey('assignment.id')),
                                  Column('tag_id', Integer, ForeignKey('assignment_tag.id'))
                                  )

from models.user import User
from models.course import Course
from models.assignment import Assignment
from models.assignment_tag import AssignmentTag
from models.assignment_group import AssignmentGroup
from models.assignment_group_membership import AssignmentGroupMembership
from models.authentication import Authentication
from models.log import Log
from models.role import Role
from models.review import Review
from models.submission import Submission
from models.sample_submission import SampleSubmission

ALL_TABLES = (Assignment, AssignmentTag, AssignmentGroup, AssignmentGroupMembership,
              Authentication, Course, Log, Role, Review, Submission, User, SampleSubmission)
