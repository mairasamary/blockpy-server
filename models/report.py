import logging
import os
from collections import OrderedDict
import time
import json
from datetime import datetime, timedelta
from main import app

from sqlalchemy import Column, String, DateTime, Integer, ForeignKey, Text, func, JSON, Index, and_

from models.assignment import Assignment
from models.models import Base, db, datetime_to_string
from sqlalchemy.orm import relationship
from models.user import User
from models import models
from models.statuses import ReportStatus



class Report(Base):
    #: Queued -> Started -> [ Finished, Error ]
    status = Column(String(255), default=ReportStatus.QUEUED)
    attempt = Column(Integer(), default=0)
    result = Column(String(255), default="output.html")
    date_started = Column(DateTime, default=None, nullable=True)
    date_finished = Column(DateTime, default=None, nullable=True)

    #: An integer from 0 to 100 that indicates how far along things are.
    progress = Column(Integer(), default=0)
    #: A short string describing the current work being done, or an error
    message = Column(String(), default="")

    #: The task name (endpoint/function name) that was run to generate this report.
    task = Column(String(), default="")
    #: A string representation of the parameters used to generate this report. Should be sufficient
    #: for running the report again, along with the task.
    parameters = Column(Text(), default="")

    #: "public", "private", "course", "assignment", "user"
    visibility = Column(String(), default="private")

    #: Specific user that this Report originates from
    owner_id = Column(Integer(), ForeignKey('user.id'), nullable=True)
    #: Specific assignment that this Report originates from
    assignment_id = Column(Integer(), ForeignKey('assignment.id'), nullable=True)
    #: Specific course that this Report originates from
    course_id = Column(Integer(), ForeignKey('course.id'), nullable=True)

    assignment = relationship("Assignment")
    owner = relationship("User")
    course = relationship("Course")

    def encode_json(self):
        return {
            '_schema_version': 2,
            'id': self.id,
            'date_modified': datetime_to_string(self.date_modified),
            'date_created': datetime_to_string(self.date_created),

            'status': self.status,
            'attempt': self.attempt,
            'result': self.result,
            'date_started': self.date_started,
            'date_finished': self.date_finished,
            'progress': self.progress,
            'message': self.message,
            'task': self.task,
            'parameters': self.parameters,
            'visibility': self.visibility,

            'course_id': self.course_id,
            'owner_id': self.owner_id,
            'assignment_id': self.assignment_id,
        }

    @staticmethod
    def new(task, parameters, visibility="private", owner_id=None, assignment_id=None, course_id=None,
            message="Task queued"):
        # Database logging
        report = Report(task=task, parameters=parameters, message=message,
                        visibility=visibility, owner_id=owner_id, assignment_id=assignment_id,
                        course_id=course_id)
        db.session.add(report)
        db.session.commit()
        return report

    @classmethod
    def by_user(cls, user_id):
        return (db.session.query(Report)
                .filter(Report.owner_id == user_id)
                .all())

    @classmethod
    def by_course(cls, course_id, kind = None):
        query = db.session.query(Report).filter(Report.course_id == course_id)
        if kind is not None:
            query = query.filter(Report.task == kind)
        query = query.order_by(Report.date_created.desc())
        return query.all()

    def __str__(self):
        return f'<Report {self.id} for {self.task}: {self.parameters}>'

    def update_progress(self, progress=None, message=None):
        if progress is not None:
            self.progress = progress
        if message is not None:
            self.message = message
        if progress is not None or message is not None:
            db.session.commit()
        return self

    def start(self, message="Task Started"):
        if message is not None:
            self.message= message
        self.attempt += 1
        self.status = ReportStatus.STARTED
        self.date_started = datetime.utcnow()
        db.session.commit()
        return self

    def error(self, message="Task Error"):
        if message is not None:
            self.message = message
        self.status = ReportStatus.ERROR
        db.session.commit()
        return self

    def finish(self, result=None, message="Task Finished"):
        if message is not None:
            self.message = message
        if result is not None:
            self.result = result
        self.status = ReportStatus.FINISHED
        self.date_finished = datetime.utcnow()
        self.progress = 100
        db.session.commit()
        return self

    def set_visibility(self, visibility="private", owner_id=None, assignment_id=None, course_id=None):
        if visibility is not None:
            self.visibility = visibility
        self.owner_id = owner_id
        self.assignment_id = assignment_id
        self.course_id = course_id
        db.session.commit()
        return self

    def get_report_folder(self):
        return os.path.join(app.config['REPORT_DIR'], str(self.id))
