from ipaddress import ip_address, ip_network
import json
from typing import Optional

from slugify import slugify
from sqlalchemy import Column, String, Text, DateTime, Integer, ForeignKey, JSON, UniqueConstraint, Boolean

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

    @staticmethod
    def decode_json(data, **kwargs):
        if data['_schema_version'] in (1, 2):
            data = dict(data)  # shallow copy
            del data['_schema_version']
            del data['owner_id__email']
            del data['id']
            del data['date_modified']
            data['date_created'] = string_to_datetime(data['date_created'])
            for key, value in kwargs.items():
                data[key] = value
            if data['_schema_version'] == 1:
                data['instructions'] = data.pop('body')
                data['on_run'] = data.pop('give_feedback')
                data['on_change'] = data.pop('on_step')
            return Assignment(**data)
        raise Exception("Unknown schema version: {}".format(data.get('_schema_version', "Unknown")))

    BUILTIN_MODULES = 'Properties,Decisions,Iteration,Calculation,Output,Values,Lists,Dictionaries,Separator,Input,Conversion'.split(
        ',')

    @staticmethod
    def edit(assignment_id, instructions=None, name=None,
             on_run=None, on_change=None, starting_code=None,
             parsons=None, text_first=None, mode=None,
             modules=None, importable=False,
             files=None,
             disable_algorithm_errors=False, disable_timeout=False,
             type='blockpy', secret=None):
        assignment = Assignment.by_id(assignment_id)
        if name is not None:
            assignment.name = name
            assignment.version += 1
        if instructions is not None:
            assignment.instructions = instructions
            assignment.version += 1
        if on_run is not None:
            assignment.on_run = on_run
            assignment.version += 1
        if on_change is not None:
            assignment.on_change = on_change
            assignment.version += 1
        if starting_code is not None:
            assignment.starting_code = starting_code
            assignment.version += 1
        # Is this check necessary and correct? It works fine for now...
        if modules is not None:
            if not assignment.settings:
                assignment.settings = "{}"
            settings = json.loads(assignment.settings)
            if 'modules' not in settings:
                settings['modules'] = {'added': [], 'removed': []}
            if 'importable' not in settings:
                settings['importable'] = False
            if 'disable_algorithm_errors' not in settings:
                settings['disable_algorithm_errors'] = False
            if 'disable_timeout' not in settings:
                settings['disable_timeout'] = False
            kept_modules = modules.split(",")
            settings['importable'] = importable
            settings['secret'] = secret if secret is not None else settings.get('secret', False)
            settings['disable_algorithm_errors'] = disable_algorithm_errors
            settings['disable_timeout'] = disable_timeout
            settings['modules']['added'] = [m for m in kept_modules
                                            if m not in Assignment.BUILTIN_MODULES]
            settings['modules']['removed'] = [m for m in Assignment.BUILTIN_MODULES
                                              if m not in kept_modules and m != 'Separator']
            settings['files'] = [f for f in files.split(",") if f]
            assignment.settings = json.dumps(settings)
        assignment.type = type
        if parsons is True:
            assignment.mode = 'parsons'
            assignment.version += 1
        elif assignment.mode == "parsons":
            # I'll be honest, I don't know what's going on here.
            assignment.mode = 'parsons'
            assignment.version += 1
        elif parsons is False and assignment.type == 'blockpy':
            assignment.mode = 'blocks'
            assignment.version += 1
        if mode is not None:
            assignment.mode = mode
            assignment.version += 1
        if text_first is True:
            assignment.mode = 'text'
            assignment.version += 1
        db.session.commit()
        return assignment

    def to_dict(self):
        return {
            'name': self.name,
            'id': self.id,
            'instructions': self.instructions,
            'title': self.title()
        }

    def __str__(self):
        return '<Assignment {} for {}>'.format(self.id, self.course_id)

    def title(self):
        return self.name if self.name != "Untitled" else "Untitled ({})".format(self.id)

    def slug(self):
        return slugify(self.name)

    @staticmethod
    def get_available():
        assignments = Assignment.query.all()
        return [(assignment, (models.AssignmentGroup.query
                              .filter(models.AssignmentGroup.id == models.AssignmentGroupMembership.assignment_group_id,
                                      assignment.id == models.AssignmentGroupMembership.assignment_id)
                              .first()))
                for assignment in assignments]

    @staticmethod
    def new(owner_id, course_id, type="blockpy", name=None, level=None):
        if name is None:
            name = 'Untitled'
        assignment = Assignment(owner_id=owner_id, course_id=course_id,
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
                    .filter(Assignment.mode != 'maze')
                    .all())
        else:
            return Assignment.query.filter_by(course_id=course_id).all()

    @staticmethod
    def by_id(assignment_id) -> "Optional[Assignment]":
        """
        :param assignment_id:
        :return: models.assignment.Assignment
        """
        if assignment_id is None:
            return None
        return Assignment.query.get(assignment_id)

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
