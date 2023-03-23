import json
import os
import time
from datetime import timedelta
import re

import base64
from typing import Union

from flask import url_for
from sqlalchemy import Column, Text, Integer, Boolean, ForeignKey, Index, func, String, or_
from sqlalchemy.orm import relationship
from werkzeug.utils import secure_filename

from main import app
from models import models
from models.assignment import Assignment
from models.data_formats.quizzes import process_quiz_str, QuizResult, try_parse_file
from models.log import Log
from models.models import Base, db, ensure_dirs, optional_encoded_field, datetime_to_string
from models.review import Review
from models.statuses import GradingStatuses, SubmissionStatuses


def build_extra_starting_files(extra_starting_files):
    try:
        data = json.loads(extra_starting_files)
    except:
        return extra_starting_files
    if isinstance(data, dict):
        return json.dumps({(k[1:] if k[0] in "^?!" else k): v for k, v in data.items()})
    elif isinstance(data, list):
        return extra_starting_files
    else:
        return extra_starting_files


DEFAULT_SECTION_PATTERN = r"^(##### Part (.+))$"


def inject_code_part(existing_code, new_code, part_id):
    """
    TODO: Someone unit test the heck out of this, please...

    :param existing_code:
    :param new_code:
    :param part_id:
    :return:
    """
    raw_parts = re.split(DEFAULT_SECTION_PATTERN, existing_code, flags=re.M)
    header, raw_parts = raw_parts[0], raw_parts[1:]
    new_body = [header] if header else []
    updated = False
    for i in range(0, len(raw_parts), 3):
        full_part_header, candidate_part_id, part_body = raw_parts[i:i+3]
        new_body.append(full_part_header)
        if candidate_part_id == part_id:
            new_body.append(new_code)
            updated = True
        else:
            if part_body and part_body[0] == '\n':
                part_body = part_body[1:]
            if i != len(raw_parts) - 3 and part_body and part_body[-1] == '\n':
                part_body = part_body[:-1]
            new_body.append(part_body)
    if not updated:
        new_body.append("##### Part " + part_id)
        new_body.append(new_code)
    return "\n".join(new_body)


DEFAULT_FILENAME = 'answer.py'
DEFAULT_FILENAMES_BY_TYPE = {
    'java': 'answer.java',
    'quiz': 'answer.json'
}


class Submission(Base):
    code = Column(Text(), default="")
    extra_files = Column(Text(), default="")
    url = Column(Text(), default="")
    endpoint = Column(Text(), default="")
    # Should be treated as out of X/100
    score = Column(Integer(), default=0)
    correct = Column(Boolean(), default=False)
    submission_status = Column(String(255), default=SubmissionStatuses.STARTED)
    grading_status = Column(String(255), default=GradingStatuses.NOT_READY)
    # Tracking
    assignment_id = Column(Integer(), ForeignKey('assignment.id'))
    assignment_group_id = Column(Integer(), ForeignKey('assignment_group.id'), nullable=True)
    course_id = Column(Integer(), ForeignKey('course.id'))
    user_id = Column(Integer(), ForeignKey('user.id'))
    assignment_version = Column(Integer(), default=0)
    version = Column(Integer(), default=0)

    assignment = relationship("Assignment")
    assignment_group = relationship("AssignmentGroup")
    course = relationship("Course")
    user = relationship("User")

    # TODO: Shouldn't this be course_id THEN assignment_id ???
    __table_args__ = (Index('submission_index', "assignment_id",
                            "course_id", "user_id"),)

    def encode_json(self, use_owner=True):
        return {
            '_schema_version': 2,
            'code': self.code,
            'extra_files': self.extra_files,
            'url': self.url,
            'endpoint': self.endpoint,
            'score': self.score/100,
            'correct': self.correct,
            'assignment_id': self.assignment_id,
            'course_id': self.course_id,
            'user_id': self.user_id,
            'assignment_version': self.assignment_version,
            'version': self.version,
            'submission_status': self.submission_status,
            'grading_status': self.grading_status,
            'user_id__email': optional_encoded_field(self.user_id, use_owner, models.User.query.get, 'email'),
            'id': self.id,
            'date_modified': datetime_to_string(self.date_modified),
            'date_created': datetime_to_string(self.date_created)
        }

    def encode_human(self):
        try:
            extra_files = json.loads(self.extra_files)
            if isinstance(extra_files, dict):
                extra_files = {k: v for k, v in extra_files.items()}
            else:
                extra_files = {f['filename']: f['contents'] for f in extra_files}
        except json.JSONDecodeError:
            extra_files = {}
        filename = DEFAULT_FILENAMES_BY_TYPE.get(self.assignment.type, DEFAULT_FILENAME)
        files = {
            filename: self.code,
            '_grade.json': json.dumps({
                'score': self.score/100,
                'correct': self.correct,
                'submission_status': self.submission_status,
                'grading_status': self.grading_status,
                'assignment_id': self.assignment_id,
                'id': self.id,
                'course_id': self.course_id,
                'user_id': self.user_id,
                'assignment_version': self.assignment_version,
                'version': self.version,
                'files': [filename]+[f[0] for f in extra_files]
            }),
            **extra_files
        }
        return files

    @staticmethod
    def full_by_id(submission_id):
        result = (db.session.query(Submission, models.User, models.Assignment)
                  .filter(Submission.user_id == models.User.id)
                  .filter(Submission.assignment_id == models.Assignment.id)
                  .filter(Submission.id == submission_id)
                  .first())
        if result is None:
            return None, None, None
        else:
            return result

    @staticmethod
    def by_assignment(assignment_id, course_id):
        return (db.session.query(Submission, models.User, models.Assignment)
                .filter(Submission.user_id == models.User.id)
                .filter(Submission.assignment_id == models.Assignment.id)
                .filter(Submission.assignment_id == assignment_id)
                .filter(Submission.course_id == course_id)
                .all())

    @staticmethod
    def all_by_assignment(assignment_id):
        return (db.session.query(Submission)
                .filter(Submission.assignment_id == assignment_id)
                .all())

    @staticmethod
    def get_latest(assignment_id, course_id):
        return (db.session.query(func.max(Submission.date_modified))
                .filter(Submission.course_id == course_id,
                        Submission.assignment_id == assignment_id)
                .group_by(Submission.user_id)
                .order_by(func.max(Submission.date_modified).desc())
                .count())

    @staticmethod
    def by_student(user_id, course_id):
        return (db.session.query(Submission, models.User, models.Assignment)
                .filter(Submission.user_id == models.User.id)
                .filter(Submission.assignment_id == models.Assignment.id)
                .filter(Submission.user_id == user_id)
                .filter(Submission.course_id == course_id)
                .all())

    @staticmethod
    def all_by_student(user_id):
        return (db.session.query(Submission, models.User, models.Assignment)
                .filter(Submission.user_id == models.User.id)
                .filter(Submission.assignment_id == models.Assignment.id)
                .filter(Submission.user_id == user_id)
                .all())

    @staticmethod
    def by_pending_review(course_id):
        return (db.session.query(Submission, models.User, models.Assignment)
                .filter(or_(Submission.submission_status == SubmissionStatuses.SUBMITTED,
                            Submission.submission_status == SubmissionStatuses.COMPLETED))
                .filter(or_(Submission.grading_status == GradingStatuses.PENDING_MANUAL,
                            Submission.grading_status == GradingStatuses.NOT_READY))
                .filter(Submission.user_id == models.User.id)
                .filter(Submission.assignment_id == models.Assignment.id)
                .filter(models.Assignment.reviewed)
                .filter(Submission.course_id == course_id)
                .order_by(models.Assignment.name.asc(),
                          models.User.last_name.asc(),
                          models.User.first_name.asc())
                .all())


    @staticmethod
    def remove_by_assignment(assignment_id):
        return (db.session.query(Submission)
                .filter(Submission.assignment_id == assignment_id)
                .delete())

    def __str__(self):
        return '<Submission {} for {}>'.format(self.id, self.user_id)

    def full_status(self, allow_hide=True):
        if allow_hide and self.assignment.hidden:
            return "???? (Status Hidden)"
        elif self.correct:
            return "Complete"
        elif self.assignment.reviewed:
            if self.grading_status == "PendingManual":
                return "Pending review"
            else:
                return self.submission_status
        elif self.score >= 100:
            return f"Full Points ({self.score}%)"
        elif self.score:
            return "Incomplete ({}%)".format(self.score)
        else:
            return "Incomplete"

    def full_score(self):
        if self.assignment.reviewed:
            review_score = self.get_reviewed_scores()
            return (self.score + review_score) / 100.0
        possible = self.assignment.get_points()
        return (float(self.correct) or self.score / 100.0) * possible


    def get_reviewed_scores(self):
        reviews = Review.query.filter_by(submission_id=self.id).all()
        total = 0
        for review in reviews:
            total += review.get_actual_score()
        return total


    @staticmethod
    def from_assignment(assignment, user_id, course_id, assignment_group_id=None):
        submission = Submission(assignment_id=assignment.id,
                                user_id=user_id,
                                assignment_group_id=assignment_group_id,
                                course_id=course_id,
                                code=assignment.starting_code,
                                extra_files=build_extra_starting_files(assignment.extra_starting_files),
                                assignment_version=assignment.version)
        db.session.add(submission)
        db.session.commit()
        # TODO: Log extra starting files!
        Log.new(assignment.id, assignment.version, course_id, user_id,
                "File.Create", "answer.py", "", "", assignment.starting_code, "", "")
        return submission

    @staticmethod
    def get_submissions(course_id, assignment_id, user_id):
        subs = Submission.query.filter_by(course_id=course_id)
        # JUst need to refactor this to allow lists
        if assignment_id is not None:
            if ',' in assignment_id:
                subs = subs.filter(Submission.assignment_id.in_([int(a) for a in assignment_id.split(",")]))
            else:
                subs = subs.filter_by(assignment_id=assignment_id)
        if user_id is not None:
            if ',' in user_id:
                subs = subs.filter(Submission.user_id.in_([int(a) for a in user_id.split(",")]))
            else:
                subs = subs.filter_by(user_id=user_id)
        subs = subs.all()
        return [sub.encode_json(use_owner=False) for sub in subs]

    @staticmethod
    def get_submission(assignment_id, user_id, course_id):
        return Submission.query.filter_by(assignment_id=assignment_id,
                                          course_id=course_id,
                                          user_id=user_id).first()

    @staticmethod
    def load_or_new(assignment, user_id, course_id, new_submission_url="", assignment_group_id=None):
        submission = Submission.get_submission(assignment.id, user_id, course_id)
        if not submission:
            submission = Submission.from_assignment(assignment, user_id, course_id, assignment_group_id)

        if new_submission_url:
            submission.endpoint = new_submission_url
            db.session.commit()
        return submission

    STUDENT_FILENAMES = ("#extra_student_files.blockpy", "answer.py")

    def save_code(self, filename, code, part_id=""):
        if filename == "#extra_student_files.blockpy":
            self.extra_files = code
        elif filename == "answer.py":
            if part_id:
                code = inject_code_part(self.code, code, part_id)
            self.code = code
        self.version += 1
        self.assignment_version = self.assignment.version
        db.session.commit()
        return code

    def set_submission(self, score, correct):
        self.score = score
        self.correct = correct
        self.grading_status = GradingStatuses.FULLY_GRADED
        db.session.commit()

    def update_submission(self, score, correct):
        was_changed = self.score != score or self.correct != correct or self.grading_status == GradingStatuses.FAILED
        self.score = int(round(100*score))
        self.correct = correct
        assignment = Assignment.by_id(self.assignment_id)
        if assignment.reviewed:
            self.submission_status = SubmissionStatuses.IN_PROGRESS
            self.grading_status = GradingStatuses.NOT_READY
        elif self.correct:
            self.submission_status = SubmissionStatuses.COMPLETED
            self.grading_status = GradingStatuses.FULLY_GRADED
        else:
            self.submission_status = SubmissionStatuses.SUBMITTED
            self.grading_status = GradingStatuses.PENDING
        db.session.commit()
        return was_changed

    def update_submission_status(self, status):
        if status not in SubmissionStatuses.VALID_CHOICES:
            return False
        self.submission_status = status
        db.session.commit()
        return True

    def update_grading_status(self, status):
        if status not in GradingStatuses.VALID_CHOICES:
            return False
        self.grading_status = status
        db.session.commit()
        return True

    @staticmethod
    def save_correct(user_id, assignment_id, course_id):
        submission = Submission.query.filter_by(user_id=user_id,
                                                assignment_id=assignment_id,
                                                course_id=course_id).first()
        if not submission:
            submission = Submission(assignment_id=assignment_id,
                                    user_id=user_id,
                                    course_id=course_id,
                                    correct=True)
            db.session.add(submission)
        else:
            submission.correct = True
        db.session.commit()
        return submission

    def set_status(self, new_value):
        was_changed = self.status != new_value
        self.status = new_value
        db.session.commit()
        return was_changed

    def get_report_blockpy(self, image=""):
        if self.correct:
            message = "Success!"
        else:
            message = "Incomplete"

    def get_block_image(self):
        return self.get_image('submission_blocks', 'blockpy.get_submission_image')

    def get_image(self, directory, endpoint='blockpy.get_image'):
        sub_blocks_folder = os.path.join(app.config['UPLOADS_DIR'], directory)
        image_path = os.path.join(sub_blocks_folder, str(self.id) + '.png')
        if os.path.exists(image_path):
            return url_for(endpoint, submission_id=self.id, directory=directory, _external=True)
        return ""

    def save_block_image(self, image=""):
        return self.save_image('submission_blocks', image, 'blockpy.get_submission_image')

    def save_image(self, directory, data, endpoint='blockpy.get_image'):
        directory = secure_filename(directory)
        sub_folder = os.path.join(app.config['UPLOADS_DIR'], directory)
        image_path = os.path.join(sub_folder, str(self.id) + '.png')
        if data != "":
            converted_image = base64.b64decode(data[22:])
            with open(image_path, 'wb') as image_file:
                image_file.write(converted_image)
            return url_for(endpoint, submission_id=self.id, _external=True)
        elif os.path.exists(image_path):
            try:
                os.remove(image_path)
            except Exception as e:
                app.logger.info("Could not delete because:" + str(e))
        return None

    def log_code(self, course_id, extension='.py', timestamp=''):
        '''
        Store the code on disk, mapped to the Assignment ID and the Student ID
        '''
        # Multiple-file logging
        log = models.Log.new('code', 'set', self.assignment_id, self.assignment_version,
                             course_id,
                             self.user_id, body=self.code, timestamp=timestamp)

        directory = os.path.join(app.config['BLOCKPY_LOG_DIR'],
                                 str(self.assignment_id),
                                 str(self.user_id))

        ensure_dirs(directory)
        name = time.strftime("%Y%m%d-%H%M%S")
        file_name = os.path.join(directory, name + extension)

        with open(file_name, 'w') as blockly_logfile:
            blockly_logfile.write(self.code)

    def get_reviews(self):
        return [review.encode_json() for review in
                Review.query.filter_by(submission_id=self.id).all()]

    @staticmethod
    def get_meta_reviews():
        return [review.encode_json() for review in
                Review.query.filter_by(generic=True).all()]

    def regrade_if_quiz(self) -> Union[QuizResult, bool]:
        if self.assignment.type == "quiz":
            # Try parsing both as JSON - report errors
            quiz_result = process_quiz_str(self.assignment.instructions, self.assignment.on_run, self.code)
            if quiz_result.graded_successfully:
                # If we graded successfully, attach the feedback to the submission body
                quiz_result.submission_body['feedback'] = quiz_result.feedbacks
                quiz_result.submission_body['summary'] = {
                    'points_possible': quiz_result.points_possible,
                    'score': quiz_result.score
                }
                if 'attempt' in quiz_result.submission_body:
                    quiz_result.submission_body['attempt']['attempting'] = False
                self.code = json.dumps(quiz_result.submission_body, indent=2)
                self.version += 1
                db.session.commit()
            # And return the information
            return quiz_result
        return False

    def give_quiz_mulligan(self, amount):
        attempt_count = 0
        if self.assignment.type == "quiz":
            # Try parsing both as JSON - report errors
            student_ready, student = try_parse_file(self.code or "{}", "Student Submission")
            if student_ready:
                attempt = student.get('attempt', {})
                attempt_count = attempt.get('mulligans', 0)+amount
                attempt['mulligans'] = attempt_count
                student['attempt'] = attempt
                self.code = json.dumps(student, indent=2)
                self.version += 1
                db.session.commit()
            # And return the information
        return attempt_count

    def get_logs(self):
        pass

    def estimate_duration(self, inactivity_threshold=5):
        logs = Log.get_history(self.course_id, self.assignment_id, self.user_id, as_json=False)
        if not logs:
            return 0
        current = logs[-1].date_created
        total = 0
        last_progress = None
        for log in reversed(logs[:-1]):
            if log.event_type == 'Resource.View' and log.category == 'reading' :
                if log.label=='read':
                    data = json.loads(log.message)
                    if last_progress == data['progress']:
                        continue
                    delay = data['delay']
                    last_progress = data['progress']
                    current -= timedelta(milliseconds=delay if delay else 0)
                    total += delay/1000 if delay else 0
                    continue
                if log.label == 'watch':
                    data = json.loads(log.message)
                    if isinstance(data, (int, float)):
                        # Older version, ignore these values
                        continue
                    else:
                        delay = round(data.get('time', 0), 1)
                    total += delay
                    current -= timedelta(seconds=delay)
                    continue

            diff = max(0, min((current - log.date_created).seconds, inactivity_threshold))
            total += diff
            current = log.date_created
        return total

    def copy_from(self, old_submission):
        self.code = old_submission.code
        self.extra_files = old_submission.extra_files
        self.url = old_submission.url
        self.score = old_submission.score
        self.correct = old_submission.correct
        self.submission_status = old_submission.submission_status
        self.grading_status = old_submission.grading_status
        self.version += 1
        db.session.commit()
        return self
