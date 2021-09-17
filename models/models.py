import json
from datetime import datetime
import os
import re

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


def make_copy(url):
    if not url:
        return "_NO_URL_copy1"
    ending = re.search(r"(.*)_copy(\d+)$", url)
    if not ending:
        return url+"_copy1"
    else:
        original, iteration = ending.group(1), int(ending.group(2))
        return f"{original}_copy{iteration+1}"


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

    id = Column(Integer(), primary_key=True, autoincrement=True)
    date_created = Column(DateTime, default=func.current_timestamp())
    date_modified = Column(DateTime, default=func.current_timestamp(),
                           onupdate=func.current_timestamp())

    SCHEMA_V1_IGNORE_COLUMNS = ('id', 'date_modified')
    SCHEMA_V2_IGNORE_COLUMNS = SCHEMA_V1_IGNORE_COLUMNS
    SCHEMA_V1_RENAME_COLUMNS = {}
    SCHEMA_V2_RENAME_COLUMNS = {}

    @classmethod
    def decode_json(cls, data, **kwargs):
        existing = cls.get_existing(data)
        data = dict(data)
        schema_version = data.pop('_schema_version')
        if schema_version == 1:
            ignored, renamed = cls.SCHEMA_V1_IGNORE_COLUMNS, cls.SCHEMA_V1_RENAME_COLUMNS
        elif schema_version == 2:
            ignored, renamed = cls.SCHEMA_V2_IGNORE_COLUMNS, cls.SCHEMA_V2_RENAME_COLUMNS
        else:
            raise Exception("Unknown schema version: {}".format(data.get('_schema_version', "Unknown")))
        data['date_created'] = string_to_datetime(data['date_created'])
        for old, new in renamed:
            data[new] = data.pop(old)
        for key, value in kwargs.items():
            data[key] = value
        for ignore in ignored:
            if ignore in data:
                del data[ignore]
        if existing:
            existing.edit(data, update_version=False)
        else:
            existing = cls(**data)
            db.session.add(existing)
            db.session.commit()
        return existing

    @classmethod
    def get_existing(cls, data):
        if 'url' in data and data['url']:
            return cls.by_url(data['url'])


    @classmethod
    def by_id(cls, pk_id):
        if pk_id is None:
            return None
        return cls.query.get(pk_id)

    def edit(self, updates, update_version=True):
        modified = False
        for key, value in updates.items():
            if getattr(self, key) != value:
                modified = True
                setattr(self, key, value)
        if modified:
            if update_version:
                self.version += 1
            db.session.commit()
        return modified

    def encode_human(self):
        """ Create a human-friendly version of this data """
        return {'{id}.md'.format(id=self.id): json.dumps(self.encode_human())}


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
from models.invite import Invite

ALL_TABLES = (Assignment, AssignmentTag, AssignmentGroup, AssignmentGroupMembership,
              Authentication, Course, Log, Role, Review, Submission, User, SampleSubmission)
