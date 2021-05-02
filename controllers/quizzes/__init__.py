from datetime import datetime
import os
import json
from pprint import pprint
from typing import Tuple

from flask.views import MethodView
from slugify import slugify
from natsort import natsorted

from flask import Blueprint, url_for, session, request, jsonify, g, render_template, redirect

from controllers.blockpy import lti_post_grade
from controllers.pylti.common import LTIPostMessageException
from main import app

from models.review import Review
from models.submission import Submission, GradingStatuses


from controllers.helpers import (lti, highlight_python_code, normalize_url,
                                 ensure_dirs, ajax_failure, parse_assignment_load, require_request_parameters,
                                 get_course_id, maybe_int, get_user, check_resource_exists, ajax_success,
                                 login_required, require_course_instructor, require_course_grader, maybe_bool,
                                 make_log_entry)
from models.user import User

blueprint_quizzes = Blueprint('quizzes', __name__, url_prefix='/quizzes')


@blueprint_quizzes.route('/static/<path:path>', methods=['GET', 'POST'])
def grading_static(path):
    return app.send_static_file(path)



class QuizAPI(MethodView):

    def get(self, review_id):
        return ajax_failure("Not Implemented")
        if review_id is None:
            return self.get_all()
        else:
            return self.get_one(review_id)

    def get_all(self):
        return ajax_failure("Not Implemented")
        submission_id = maybe_int(request.values.get('submission_id'))
        user, user_id = get_user()
        if submission_id is None:
            reviews = Review.get_generic_reviews()
        else:
            submission = Submission.by_id(submission_id)
            check_resource_exists(submission, "Submission", submission_id)
            reviews = Review.get_for_submission(submission_id)
            if submission.user_id != user_id:
                require_course_grader(user, submission.course_id)
        return ajax_success(dict(reviews=[review.encode_json() for review in reviews]))

    def get_one(self, review_id):
        return ajax_failure("Not Implemented")
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        if submission.user_id != user_id:
            require_course_grader(user, submission.course_id)
        return ajax_success(dict(review=review.encode_json()))

    def post(self):
        return ajax_failure("Not Implemented")
        user, user_id = get_user()
        submission_id = maybe_int(request.values.get('submission_id'))
        submission = Submission.by_id(submission_id)
        check_resource_exists(submission, "Submission", submission_id)
        require_course_grader(user, submission.course_id)
        review_data = request.values.copy()
        del review_data['id']
        review_data['author_id'] = user_id
        review_data['submission_version'] = submission.version
        review_data['assignment_version'] = submission.assignment_version
        #fix_nullables(review_data)
        new_review = Review.new(review_data)
        return ajax_success(dict(review=new_review.encode_json()))

    def put(self, review_id):
        return ajax_failure("Not Implemented")
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        require_course_grader(user, submission.course_id)
        review_data = request.json.copy()
        del review_data['id']
        #fix_nullables(review_data)
        review_data['author_id'] = user_id
        edited_review = review.edit(review_data)
        return ajax_success(dict(review=edited_review.encode_json()))

    def delete(self, review_id):
        return ajax_failure("Not Implemented")
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        require_course_grader(user, submission.course_id)
        review.delete()
        return ajax_success(dict(success=True))


quiz_view = QuizAPI.as_view('quizzes_api')
blueprint_quizzes.add_url_rule('/review/', defaults={'review_id': None},
                               view_func=quiz_view, methods=['GET'])
blueprint_quizzes.add_url_rule('/review/', view_func=quiz_view, methods=['POST'])
blueprint_quizzes.add_url_rule('/review/<int:review_id>', view_func=quiz_view,
                               methods=['GET', 'PUT', 'DELETE'])
