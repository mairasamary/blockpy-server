import uuid
from datetime import datetime, timedelta
from typing import Optional

from flask_security import UserMixin
from flask_security.utils import hash_password
from sqlalchemy import Column, Integer, String, Boolean, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql.expression import true, tuple_
from werkzeug.utils import secure_filename

import models
from common.maybe import maybe_int
from models.generics.models import db, ma
from models.generics.base import Base


class User(Base, UserMixin):
    __tablename__ = "user"
    # General user properties
    id: Mapped[int] = mapped_column(Integer(), primary_key=True)
    first_name: Mapped[str] = mapped_column(String(255))
    last_name: Mapped[str] = mapped_column(String(255))

    email: Mapped[str] = mapped_column(String(255))

    proof: Mapped[str] = mapped_column(String(255), default='')
    password: Mapped[str] = mapped_column(String(255))
    active: Mapped[Optional[bool]] = mapped_column(Boolean())
    anonymous: Mapped[bool] = mapped_column(Boolean(), default=False)
    confirmed_at: Mapped[Optional[datetime]] = mapped_column(DateTime())

    fs_uniquifier: Mapped[str] = mapped_column(String(64), nullable=False, unique=True)

    # Foreign key relationships
    roles: Mapped[list["Role"]] = db.relationship(back_populates="user")
    authentications: Mapped[list["Authentication"]] = db.relationship(back_populates="user")
    assignments: Mapped[list["Assignment"]] = db.relationship(back_populates="owner")
    assignment_groups: Mapped[list["AssignmentGroup"]] = db.relationship(back_populates="owner")
    courses: Mapped[list["Course"]] = db.relationship(back_populates="owner")
    tags: Mapped[list["AssignmentTag"]] = db.relationship(back_populates="owner")
    logs: Mapped[list["Log"]] = db.relationship(back_populates="subject")
    reviews: Mapped[list["Review"]] = db.relationship(back_populates="author")
    submissions: Mapped[list["Submission"]] = db.relationship(back_populates="user")
    reports: Mapped[list["Report"]] = db.relationship(back_populates="owner")
    invites: Mapped[list["Invite"]] = db.relationship(back_populates="user")
    grade_history: Mapped[list["GradeHistory"]] = db.relationship(back_populates="grader")

    # TODO: Finish roles
    LEARNER_ROLES = ['learner']
    INSTRUCTOR_ROLES = ['instructor', "urn:lti:role:ims/lis/instructor"]
    TA_ROLES = ['teachingassistant', 'urn:lti:role:ims/lis/teachingassistant']
    SYS_ROLES = ['urn:lti:sysrole:ims/lis/none']
    GRADER_ROLES = INSTRUCTOR_ROLES + TA_ROLES + SYS_ROLES
    DEVELOPER_ROLES = ["contentdeveloper", "urn:lti:role:ims/lis/contentdeveloper"]
    ADMIN_ROLES = ['admin']
    STAFF_ROLES = GRADER_ROLES + DEVELOPER_ROLES

    def encode_json(self, use_owner=True):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email
        }

    @staticmethod
    def new_from_instructor(email, first_name='', last_name='', password=None):
        new_user = User(first_name=first_name, last_name=last_name,
                        email=email,
                        fs_uniquifier=uuid.uuid4().hex)
        if password is not None:
            new_user.password = hash_password(password)
        db.session.add(new_user)
        db.session.commit()
        return new_user

    @staticmethod
    def new_admin(email, first_name, last_name, password):
        """ Note, does not create admin role. """
        new_user = User(first_name=first_name, last_name=last_name,
                        email=email, password=password,
                        active=True, confirmed_at=datetime.utcnow(),
                        fs_uniquifier=uuid.uuid4().hex)
        db.session.add(new_user)
        db.session.commit()
        return new_user

    @staticmethod
    def find_student(email):
        # Hack: We have to lowercase emails because apparently some LMSes want to SHOUT EMAIL ADDRESSES
        if not email:
            return None
        return User.query.filter(func.lower(User.email) == func.lower(email)).first()

    @staticmethod
    def make_anonymous_user(uid):
        new_user = User(first_name=uid, last_name="UNKNOWN", email="", proof="", password="",
                        active=False, anonymous=True,
                        fs_uniquifier=uuid.uuid4().hex)
        db.session.add(new_user)
        db.session.flush()
        new_authentication = models.Authentication(type='session',
                                                   value=uid,
                                                   user_id=new_user.id)
        db.session.add(new_authentication)
        db.session.commit()
        return new_user

    @staticmethod
    def find_anonymous_user(uid):
        authentication = models.Authentication.query.filter_by(type='session', value=uid).first()
        if authentication:
            return models.User.by_id(authentication.user_id)
        return None

    def get_roles(self):
        return models.Role.query.filter_by(user_id=self.id).all()

    def get_course_roles(self, course_id):
        return models.Role.query.filter_by(user_id=self.id, course_id=course_id).all()

    @staticmethod
    def get_user_role(course_id, user_id):
        return (db.session.query(models.Role, models.User)
                .filter(models.Role.user_id == models.User.id)
                .filter(models.Role.user_id == user_id)
                .filter(models.Role.course_id == course_id)
                .distinct())

    def get_editable_courses(self):
        return (db.session.query(models.Course)
                .filter(models.Role.user_id == self.id,
                        models.Role.course_id == models.Course.id,
                        (models.Role.name == 'instructor')
                        | (models.Role.name == 'admin'))
                .order_by(models.Course.name)
                .distinct())

    def get_courses(self):
        return (db.session.query(models.Course, models.Role)
                .filter(models.Role.user_id == self.id,
                        models.Role.course_id == models.Course.id)
                .order_by(models.Role.name)
                .all())

    def __str__(self):
        return '<User {} ({})>'.format(self.id, self.email)

    def name(self):
        return ' '.join((self.first_name or "", self.last_name or ""))

    def get_filename(self, extension='.json'):
        return secure_filename(self.name().replace(' ', "_")) + extension

    def in_course(self, course_id):
        return bool(models.Role.query.filter_by(course_id=int(course_id),
                                                user_id=self.id).first())

    def is_admin(self):
        return 'admin' in {role.name.lower() for role in self.roles}

    def is_instructor(self, course_id=None):
        if course_id is not None:
            return 'instructor' in {role.name.lower() for role in self.roles
                                    if role.course_id == int(course_id)}
        return 'instructor' in {role.name.lower() for role in self.roles}

    def is_grader(self, course_id=None):
        if course_id is not None:
            role_strings = {role.name.lower() for role in self.roles
                            if role.course_id == int(course_id)}
        else:
            role_strings = {role.name.lower() for role in self.roles}

        return any(grader_role in role_strings for grader_role in self.GRADER_ROLES)

    def is_student(self, course_id=None):
        if course_id is not None:
            return 'learner' in {role.name.lower() for role in self.roles
                                 if role.course_id == int(course_id)}
        return 'learner' in {role.name.lower() for role in self.roles}

    def is_test_user(self, course_id=None):
        # TODO: YIKES, this is not okay. We need a flag for the test user!
        if self.first_name == 'Test' and self.last_name == 'Student':
            return True
        return False

    def add_role(self, name, course_id):
        if name in [id for id, _ in models.Role.CHOICES]:
            new_role = models.Role(name=name, user_id=self.id,
                                   course_id=maybe_int(course_id))
            db.session.add(new_role)
            db.session.commit()
            return new_role
        return None

    def update_roles(self, new_roles, course_id):
        old_roles = [role for role in self.roles if role.course_id == maybe_int(course_id)]
        new_role_names = set(new_role_name.lower() for new_role_name in new_roles)
        for old_role in old_roles:
            if old_role.name.lower() not in new_role_names:
                models.Role.query.filter(models.Role.id == old_role.id).delete()
        old_role_names = set(role.name.lower() for role in old_roles)
        for new_role_name in new_roles:
            if new_role_name.lower() not in old_role_names:
                new_role = models.Role(name=new_role_name.lower(), user_id=self.id, course_id=maybe_int(course_id))
                db.session.add(new_role)
        db.session.commit()

    def determine_role(self, assignments, submissions):
        '''
        Note that when you use an assignment from another course, you are implicitly giving all the
        graders from that course access to your students' submissions in the editor menu. Of course,
        it would be very unusual to be able to access submissions from that menu, but in theory that's
        what this role delegation means.

        :param assignments:
        :param submissions:
        :return:
        '''
        role = 'student'
        if assignments and self.is_grader(assignments[0].course_id):
            role = 'owner'
        elif submissions and self.is_grader(submissions[0].course_id):
            role = 'grader'
        return role

    @staticmethod
    def is_lti_instructor(given_roles):
        return any(role.lower() for role in User.STAFF_ROLES if role in given_roles)

    @staticmethod
    def new_lti_user(service, lti_user_id, lti_email, lti_first_name, lti_last_name):
        new_user = User(first_name=lti_first_name, last_name=lti_last_name, email=lti_email.lower(),
                        password="", active=True, confirmed_at=None,
                        fs_uniquifier=uuid.uuid4().hex)
        db.session.add(new_user)
        db.session.flush()
        new_authentication = models.Authentication(type=service,
                                                   value=lti_user_id,
                                                   user_id=new_user.id)
        db.session.add(new_authentication)
        db.session.commit()
        return new_user

    def register_authentication(self, service, lti_user_id):
        new_authentication = models.Authentication(type=service,
                                                   value=lti_user_id,
                                                   user_id=self.id)
        db.session.add(new_authentication)
        db.session.commit()
        return self

    @staticmethod
    def from_lti(service, lti_user_id, lti_email, lti_first_name, lti_last_name):
        """
        For a given service (e.g., "canvas"), and a user_id in the LTI system
        """
        lti = models.Authentication.query.filter_by(type=service,
                                                    value=lti_user_id).first()
        if lti is None:
            user = User.find_student(lti_email)
            if user:
                user.register_authentication(service, lti_user_id)
                return user
            else:
                return User.new_lti_user(service, lti_user_id, lti_email, lti_first_name, lti_last_name)
        else:
            return lti.user

    @staticmethod
    def get_old_anonymous_users(threshold_days: int, limit: int = None):
        threshold = datetime.utcnow() - timedelta(days=threshold_days)
        query = (db.session.query(models.User)
                 .filter(models.User.anonymous == true())
                 .filter(models.User.date_created < threshold))
        if limit is not None:
            query = query.limit(limit)
        return query.all()

    def get_logs(self, threshold=None):
        course_assignments_subquery = (db.session.query(
            models.Course.id, models.Assignment.id
        ).join(models.Assignment, models.Assignment.course_id == models.Course.id, isouter=True))
        final_query = db.session.query(models.Log)
        if threshold is not None:
            final_query = final_query.filter(models.Log.date_modified > threshold)
        return (final_query
                .filter(models.Log.subject_id == self.id)
                .filter(tuple_(models.Log.course_id, models.Log.assignment_id).in_(course_assignments_subquery))
                )

    def has_activity(self, threshold_days: int):
        threshold = datetime.utcnow() - timedelta(days=threshold_days)
        return ((
                        db.session.query(models.Submission)
                        .filter(models.Submission.user_id == self.id)
                        .filter(models.Submission.date_modified > threshold)
                        .count() > 0
                ) or self.get_logs(threshold).count() > 0)

    """
    Anon user creates a course
    
    Good user makes a submission in that course
    
    When Anon User is searched, the course is found.
    Check that course immediately for links.
    That course introduces a link to the submission.
    The submission has a link to the Good user, so that submission will NOT be deletable.
    
    """

    def find_all_linked_resources(self) -> dict[str, list[Base]]:
        sample_submissions = (db.session.query(models.SampleSubmission)
                              .filter(models.SampleSubmission.owner_id == self.id)
                              .all())
        # TODO: Finish AssignmentTagMemberships
        resources = {
            "Assignment": self.assignments,
            "AssignmentTag": self.tags,
            "Review": self.reviews,
            "SampleSubmission": sample_submissions,
            # Include any roles owned by this
            # And also any roles owned by courses being deleted
            "Role": self.roles,
            # Include any authentications owned by this
            "Authentication": self.authentications,
            "AssignmentGroup": self.assignment_groups,
            # Delete the course if it is owned by the anonymous user,
            #   and no non-anonymous users have resources in the course
            "Course": self.courses,
            "Log": self.get_logs().all(),
            # Can safely delete submissions owned by the user IF no
            "Submission": self.submissions,
            "Report": self.reports,
            "GradeHistory": self.grade_history
        }
        return resources
