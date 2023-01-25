import random
import time
import json

from controllers.helpers import make_log_entry
from controllers.pylti.common import LTIPostMessageException
from controllers.pylti.flask import LTI
from main import app, huey
from models.log import Log
from models.report import Report
from models.submission import Submission
from models.statuses import GradingStatuses


@huey.task(context=True)
def get_events(course_id, user_id, task=None):
    """Background task that runs a long function with progress reports."""
    history = Log.get_history(course_id, assignment_id=None, user_id=user_id)
    return history


@huey.task(context=True)
def queue_lti_post_grade(json_lti, post_params,
                         submission_id, assignment_group_id, user_id, course_id,
                         attempts, log_params, subscore, task=None):
    report = Report.new('queue_lti_post_grade', json.dumps(
        dict(post_params=post_params, submission_id=submission_id,
             assignment_group_id=assignment_group_id, user_id=user_id,
             course_id=course_id, log_params=log_params, subscore=subscore, attempts=attempts)
    ), owner_id=user_id, course_id=course_id)
    success = False
    total_score, view_url, lis_result_sourcedid, lis_outcome_service_url, reviewed = post_params

    with app.app_context():
        while not success and attempts > 0:
            time.sleep(10)
            error = f"General retry failure. There are {attempts} left."
            report.start()
            try:
                lti = LTI.from_json(json_lti)
                lti.session['lis_outcome_service_url'] = lis_outcome_service_url
                lti.session['lis_result_sourcedid'] = lis_result_sourcedid
                lti.post_grade(total_score, view_url, endpoint=lis_result_sourcedid, url=True,
                               # Seems to give the wrong time? Need to find a better source than "date_modified" anyway
                               # when_submitted_at=to_iso_time(submission.date_modified)
                               needs_review=reviewed)
                success = True
                report.update_progress(message="GAMMA")
            except LTIPostMessageException as e:
                error = str(e)
                success = False
            if success:
                submission = Submission.by_id(submission_id)
                submission.update_grading_status(GradingStatuses.FULLY_GRADED)
                make_log_entry(**log_params, event_type="X-Submission.LMS", message=f"{total_score}|{subscore}")
                report.finish()
                print(report.status)
                return True
            else:
                make_log_entry(**log_params, event_type="X-Submission.LMS.Retry-Failure", message=error)
                report.error("Task Error: "+str(error))
                attempts -= 1
    return False
