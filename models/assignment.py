from ipaddress import ip_address, ip_network
from hmac import compare_digest
import json
from json import JSONDecodeError
from typing import Optional

from slugify import slugify
from sqlalchemy import Column, String, Text, DateTime, Integer, ForeignKey, JSON, UniqueConstraint, Boolean
from werkzeug.utils import secure_filename

from models import models
from models.models import Base, datetime_to_string, string_to_datetime, db, optional_encoded_field


class Assignment(Base):
    name = Column(String(255), default="Untitled")
    url = Column(String(255), default=None, nullable=True)

    # Settings
    TYPES = ['blockpy', 'maze']
    type = Column(String(10), default="blockpy")
    instructions = Column(Text(), default="")
    # Should we suggest this assignment's submissions be reviewed manually?
    reviewed = Column(Boolean(), default=False)
    # Should we hide the current Complete status for submissions?
    hidden = Column(Boolean(), default=False)
    # Should we allow users to see other user's submissions?
    public = Column(Boolean(), default=False)
    # Whitelist or blacklist IP address and address ranges
    ip_ranges = Column(Text(), default="")
    settings = Column(Text())

    # Code columns
    on_run = Column(Text(), default="")
    on_change = Column(Text(), default="")
    on_eval = Column(Text(), default="")
    starting_code = Column(Text(), default="")
    extra_instructor_files = Column(Text(), default="")
    extra_starting_files = Column(Text(), default="")

    # Tracking
    forked_id = Column(Integer(), ForeignKey('assignment.id'), nullable=True)
    forked_version = Column(Integer(), nullable=True)
    owner_id = Column(Integer(), ForeignKey('user.id'))
    course_id = Column(Integer(), ForeignKey('course.id'))
    version = Column(Integer(), default=0)

    forked = db.relationship("Assignment")
    owner = db.relationship("User")
    course = db.relationship("Course")
    tags = db.relationship("AssignmentTag", secondary=models.assignment_tag_membership,
                           back_populates='assignments')
    sample_submissions = db.relationship("SampleSubmission", backref='assignment', lazy='dynamic')

    __table_args__ = (UniqueConstraint("course_id", "url", name="url_course_index"),)

    def encode_json(self, use_owner=True):
        return {
            '_schema_version': 2,
            'name': self.name,
            'url': self.url,

            'type': self.type,
            'instructions': self.instructions,
            'reviewed': self.reviewed,
            'hidden': self.hidden,
            'public': self.public,
            'settings': self.settings,
            'ip_ranges': self.ip_ranges,

            'on_run': self.on_run,
            'on_change': self.on_change,
            'on_eval': self.on_eval,
            'starting_code': self.starting_code,
            'extra_instructor_files': self.extra_instructor_files,
            'extra_starting_files': self.extra_starting_files,

            'forked_id': self.forked_id,
            'forked_version': self.forked_version,
            'owner_id': self.owner_id,
            'owner_id__email': optional_encoded_field(self.owner_id, use_owner, models.User.query.get, 'email'),
            'course_id': self.course_id,
            'version': self.version,
            'id': self.id,
            'date_modified': datetime_to_string(self.date_modified),
            'date_created': datetime_to_string(self.date_created),

            'tags': [tag.encode_json(use_owner) for tag in self.tags],
            'sample_submissions': [sample.encode_json(use_owner) for sample in self.sample_submissions],
        }

    SCHEMA_V1_IGNORE_COLUMNS = Base.SCHEMA_V1_IGNORE_COLUMNS + ('owner_id__email',)
    SCHEMA_V2_IGNORE_COLUMNS = Base.SCHEMA_V2_IGNORE_COLUMNS + ('owner_id__email',)
    SCHEMA_V1_RENAME_COLUMNS = (("body", "instructions"), ("give_feedback", "on_run"),
                                ("on_step", "on_change"))

    BUILTIN_MODULES = 'Properties,Decisions,Iteration,Calculation,Output,Values,Lists,Dictionaries,Separator,Input,Conversion'.split(
        ',')

    def to_dict(self):
        return {
            'name': self.name,
            'id': self.id,
            'instructions': self.instructions,
            'title': self.title()
        }

    def __str__(self):
        return '<Assignment {} for {} ({})>'.format(self.id, self.course_id, self.url)

    def title(self):
        return self.name if self.name != "Untitled" else "Untitled ({})".format(self.id)

    def slug(self):
        return slugify(self.name)

    def get_filename(self, extension='.json'):
        if self.url:
            return secure_filename(self.url) + extension
        else:
            return secure_filename(self.name) + extension

    @staticmethod
    def get_available():
        assignments = Assignment.query.all()
        return [(assignment, (models.AssignmentGroup.query
                              .filter(models.AssignmentGroup.id == models.AssignmentGroupMembership.assignment_group_id,
                                      assignment.id == models.AssignmentGroupMembership.assignment_id)
                              .first()))
                for assignment in assignments]

    @staticmethod
    def new(owner_id, course_id, type="blockpy", name=None, level=None, url=None):
        if name is None:
            name = 'Untitled'
        assignment = Assignment(owner_id=owner_id, course_id=course_id,
                                url=url,
                                type=type, name=level if type == 'maze' else name)
        db.session.add(assignment)
        db.session.commit()
        return assignment

    def move_course(self, new_course_id):
        self.course_id = new_course_id
        models.AssignmentGroupMembership.query.filter_by(assignment_id=self.id).delete()
        db.session.commit()

    @staticmethod
    def remove(assignment_id):
        Assignment.query.filter_by(id=assignment_id).delete()
        db.session.commit()

    @staticmethod
    def is_in_course(assignment_id, course_id):
        return Assignment.query.get(assignment_id).course_id == course_id

    @staticmethod
    def by_course(course_id, exclude_builtins=True):
        if exclude_builtins:
            return (Assignment.query.filter_by(course_id=course_id)
                    .filter(Assignment.type != 'maze')
                    .all())
        else:
            return Assignment.query.filter_by(course_id=course_id).all()

    @staticmethod
    def by_url(assignment_url):
        if assignment_url is None:
            return None
        return Assignment.query.filter_by(url=assignment_url).first()

    @staticmethod
    def by_builtin(type, id, owner_id, course_id):
        assignment = Assignment.query.filter_by(course_id=course_id,
                                                mode=type,
                                                name=id).first()
        if not assignment:
            assignment = Assignment.new(owner_id, course_id)
            assignment.mode = type
            assignment.name = id
            db.session.commit()
        return assignment

    @staticmethod
    def by_id_or_new(assignment_id, owner_id, course_id):
        if assignment_id is None:
            assignment = None
        else:
            assignment = Assignment.query.get(assignment_id)
        if not assignment:
            assignment = Assignment.new(owner_id, course_id)
        return assignment

    def context_is_valid(self, context_id):
        course = models.Course.query.get(self.course_id)
        if course:
            return course.external_id == context_id
        return False

    def load_or_new_submission(self, user_id, course_id, new_submission_url="", assignment_group_id=None):
        return models.Submission.load_or_new(self, user_id, course_id, new_submission_url, assignment_group_id)

    def load(self, user_id, course_id):
        return models.Submission.get_submission(self.id, user_id, course_id)

    def for_read_only_editor(self, user_id):
        return {
            'assignment': self.encode_json(),
            'submission': None
        }

    def for_editor(self, user_id, course_id):
        # Trust the user for now that they belong here, and give them a submission
        submission = (None if user_id is None else
                      self.load_or_new_submission(user_id, course_id).encode_json())
        return {
            'assignment': self.encode_json(),
            'submission': submission,
        }

    INSTRUCTOR_FILENAMES = ("!on_run.py", "!on_change.py", "!on_eval.py",
                            "^starting_code.py", "!assignment_settings.blockpy", "!instructions.md",
                            "#extra_instructor_files.blockpy", "#extra_starting_files.blockpy")

    def save_file(self, filename, code):
        if filename == "!on_run.py":
            self.on_run = code
        elif filename == "!on_change.py":
            self.on_change = code
        elif filename == "!on_eval.py":
            self.on_eval = code
        elif filename == "^starting_code.py":
            self.starting_code = code
        elif filename == "!assignment_settings.blockpy":
            self.settings = code
        elif filename == "!instructions.md":
            self.instructions = code
        elif filename == "#extra_instructor_files.blockpy":
            self.extra_instructor_files = code
        elif filename == "#extra_starting_files.blockpy":
            self.extra_starting_files = code
        self.version += 1
        db.session.commit()

    def is_allowed(self, ip):
        """
        Given the IP address, determine if it is allowed to access this assignment.
        If the ip_ranges is blank or null, then any address is allowed.
        Otherwise, a comma separated string can be given.
        Each IP address given in the string is in the whitelist, unless it begins
        with ^ which means it is instantly rejected (blacklist), unless another begins
        with ! which means it will override the blacklist.
        IP Networks are supported, so you could have "192.168.0.0/24" as the ip_ranges
        and then both "192.168.0.0" and "192.168.0.5" would be accepted.

        If the string is non-empty, it is assumed that by default all addresses will be blocked.

        If an invalid `ip` is supplied, then it is blocked. If any of the `ip_ranges` are invalid,
        then they will be skipped.

        :param ip: String of IP Network Ranges or None
        :return: bool
        """
        ranges = self.ip_ranges
        if ranges is None or not ranges.strip():
            return True
        ranges = ranges.split(",")
        try:
            needle = ip_address(ip)
        except ValueError:
            return False
        allowed, blacklisted, whitelisted = False, False, False
        for network in ranges:
            network = network.strip()
            if not network:
                continue
            try:
                if network.startswith("^") and needle in ip_network(network[1:]):
                    blacklisted = True
                if network.startswith("!") and needle in ip_network(network[1:]):
                    whitelisted = True
                elif needle in ip_network(network):
                    allowed = True
            except ValueError:
                continue
        return whitelisted or (not blacklisted and allowed)

    def get_setting(self, key, default_value=None):
        # TODO: Handle corrupted settings more elegantly.
        if not self.settings:
            return default_value
        settings = json.loads(self.settings)
        return settings.get(key, default_value)

    def update_setting(self, key, value):
        settings = json.loads(self.settings)
        settings[key] = value
        self.settings = json.dumps(settings)
        self.version += 1
        db.session.commit()

    def passcode_fails(self, given_passcode):
        """
        Determine if the given string matches this assignments' stored passcode, or that
        there is no stored passcode. Uses a proper constant-time string comparison to
        avoid timing attacks.

        :param given_passcode: the user provided passcode (probably via requests.values).
        :return: Whether the passcode failed
        """
        actual_passcode = self.get_setting("passcode", "")
        return actual_passcode and not compare_digest(given_passcode, actual_passcode)

    def has_passcode(self):
        return bool(self.get_setting("passcode", ""))

    @classmethod
    def list_urls(self, partial):
        all_assignments = (db.session.query(Assignment.url)
                                     .filter(Assignment.url.ilike("%"+partial+"%"))
                                     .all())
        all_assignments = [a[0] for a in all_assignments]
        all_assignments = sorted(all_assignments,
                                 key=lambda a: (not a.startswith(partial),
                                                not a.lower().startswith(partial.lower()),
                                                a))
        return all_assignments
