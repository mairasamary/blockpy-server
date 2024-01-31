import logging
from collections import OrderedDict
import time
import json
from datetime import datetime, timedelta

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Column, String, Integer, ForeignKey, Text, func, JSON, Index, and_

import models
from models.generics.models import db, ma
from models.generics.base import Base
from common.dates import datetime_to_string, string_to_datetime
from models.user import User
from models.course import Course
from models.assignment import Assignment

class Log(Base):
    __tablename__ = "log"
    # Identification
    assignment_id: Mapped[int] = mapped_column(Integer(), ForeignKey('assignment.id'))
    assignment_version: Mapped[int] = mapped_column(Integer())
    course_id: Mapped[int] = mapped_column(Integer(), ForeignKey('course.id'))
    subject_id: Mapped[int] = mapped_column(Integer(), ForeignKey('user.id'))
    # Actual event data
    event_type: Mapped[str] = mapped_column(String(255))
    file_path: Mapped[str] = mapped_column(String(255), default="", nullable=True)
    category: Mapped[str] = mapped_column(String(255), default="")
    label: Mapped[str] = mapped_column(String(255), default="")
    # Message will be JSON encoded data
    message: Mapped[str] = mapped_column(Text(), default="")
    client_timestamp: Mapped[str] = mapped_column(String(255), default="")
    client_timezone: Mapped[str] = mapped_column(String(255), default="")

    assignment: Mapped["Assignment"] = db.relationship(back_populates="logs")
    subject: Mapped["User"] = db.relationship(back_populates="logs")
    course: Mapped["Course"] = db.relationship(back_populates="logs")

    __table_args__ = (Index('log_index', "course_id", "assignment_id", "subject_id"),)

    # event_type
    # => event_id
    # subject_id
    # => tool_instances
    # => code_state_id
    # => server_timestamp
    # => server_timezone
    # client_timestamp
    # => client_timezone
    # => session_id
    # course_id
    # => term_id
    # assignment_id
    # => edit_type
    # file_path
    # ? body
    # => execution_result
    # => SyntaxError: compile_result, compile_message_type, compile_message_data
    # => Feedback: intervention_type, intervention_message
    # => RunTime Error: program_input, program_output, program_error_output
    # => source_location (line of code with error)
    # => score

    def encode_json(self):
        return {
            '_schema_version': 2,
            'id': self.id,
            'date_modified': datetime_to_string(self.date_modified),
            'date_created': datetime_to_string(self.date_created),

            'assignment_id': self.assignment_id,
            'assignment_version': self.assignment_version,
            'course_id': self.course_id,
            'subject_id': self.subject_id,
            'event_type': self.event_type,
            'file_path': self.file_path,
            'category': self.category,
            'label': self.label,
            'message': self.message,
            'client_timestamp': self.client_timestamp,
            'client_timezone': self.client_timezone
        }

    @staticmethod
    def new(assignment_id, assignment_version, course_id, subject_id, event_type,
            file_path, category, label, message, client_timestamp, client_timezone):
        # Database logging
        log = Log(assignment_id=assignment_id, assignment_version=assignment_version,
                  course_id=course_id,
                  subject_id=subject_id, file_path=file_path, event_type=event_type,
                  category=category, label=label, message=message.replace("\0", ""),
                  client_timestamp=client_timestamp,
                  client_timezone=client_timezone)
        db.session.add(log)
        db.session.commit()
        # Single-file logging
        # logging.getLogger('Events').info(log.for_file())
        return log

    def __str__(self):
        return '<Log {} for {}>'.format(self.event_type, self.category)

    @staticmethod
    def calculate_feedbacks(assignment_id, course_id):
        return (db.session.query(func.count(Log.id))
                .filter(Log.assignment_id == assignment_id)
                .filter(Log.course_id == course_id)
                .filter(Log.event_type == 'feedback')
                .filter(Log.category != "Success")
                .group_by(Log.subject_id)
                .all())

    @staticmethod
    def get_logs_for_user_course(course_id, user_id):
        return (db.session.query(Log)
                .filter(Log.course_id == course_id)
                .filter(Log.subject_id == user_id)
                .all())

    @staticmethod
    def get_logs_for_course(course_id):
        return Log.query.filter_by(course_id=course_id).all()

    @staticmethod
    def get_users_for_course(course_id):
        return (db.session.query(User)
                .filter(Log.course_id == course_id)
                .filter(Log.subject_id == User.id)
                .group_by(Log.subject_id, User)
                .all())

    @staticmethod
    def get_assignments_for_course(course_id) -> 'List[models.Assignment]':
        return (db.session.query(Assignment)
                .filter(Log.course_id == course_id)
                .filter(Log.assignment_id == Assignment.id)
                .group_by(Log.assignment_id, Assignment)
                .all())

    @staticmethod
    def remove_by_assignment(assignment_id):
        # Force query planner to use the first column of index
        course_subquery = db.session.query(Course.id).subquery()
        #print(db.session.query(Log).filter(Log.assignment_id == assignment_id,
        #                              Log.course_id.in_(course_subquery)))
        (db.session.query(Log).filter(Log.assignment_id == assignment_id,
                                      Log.course_id.in_(course_subquery))
         .delete(synchronize_session='fetch'))

    @staticmethod
    def get_history(course_id, assignment_id, user_id, page_offset=None, page_limit=None, as_json=True):
        logs = Log.query.filter_by(course_id=course_id)
        # JUst need to refactor this to allow lists
        if assignment_id is not None:
            if isinstance(assignment_id, str) and ',' in assignment_id:
                logs = logs.filter(Log.assignment_id.in_([int(a) for a in assignment_id.split(",")]))
            else:
                logs = logs.filter_by(assignment_id=assignment_id)
        if user_id is not None:
            if isinstance(user_id, str) and ',' in user_id:
                logs = logs.filter(Log.subject_id.in_([int(a) for a in user_id.split(",")]))
            else:
                logs = logs.filter_by(subject_id=user_id)
        logs = logs.order_by(Log.date_created.desc())
        if page_offset is not None:
            logs = logs.offset(page_offset)
        if page_limit is not None:
            logs = logs.limit(page_limit)
        logs = logs.all()
        if as_json:
            return [log.encode_json() for log in logs]
        return logs

    @staticmethod
    def get_recent_logs_for_course(course_id, duration_amount, duration_type):
        duration_amount = int(duration_amount)
        start_time = datetime.utcnow() - timedelta(**{duration_type: duration_amount})
        recent_submissions = (
            models.Submission.query.with_entities(models.Submission.course_id,
                                                  models.Submission.assignment_id,
                                                  models.Submission.user_id)
                .filter_by(course_id=course_id)
                .filter(models.Submission.date_modified >= start_time)
        ).subquery()
        logs = (Log.query.join(recent_submissions,
                               and_(Log.course_id == recent_submissions.c.course_id,
                                    Log.assignment_id == recent_submissions.c.assignment_id,
                                    Log.subject_id == recent_submissions.c.user_id))
                .filter(Log.date_modified >= start_time)
                ).all()
        return [log.encode_json() for log in logs]

    def for_file(self):
        return ", ".join((
            datetime_to_string(self.date_created),
            str(self.assignment_id),
            str(self.assignment_version),
            str(self.course_id),
            str(self.subject_id),
            json.dumps(self.file_path),
            json.dumps(self.event_type),
            json.dumps(self.category),
            json.dumps(self.label),
            json.dumps(self.message),
            json.dumps(self.client_timestamp),
            json.dumps(self.client_timezone)
        ))

