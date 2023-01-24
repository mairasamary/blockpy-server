import random
import time

from controllers.pylti.common import LTIPostMessageException
from main import app, huey
from models.log import Log
from models.statuses import GradingStatuses


@huey.task(context=True)
def get_events(course_id, user_id, task=None):
    """Background task that runs a long function with progress reports."""
    history = Log.get_history(course_id, assignment_id=None, user_id=user_id)
    return history


@huey.task(context=True)
def queue_lti_post_grade(lti, submission, lis_result_sourcedid, assignment_group_id, user_id, course_id, attempts,
                         lti_post_grade, log, subscore):
    success = False
    while not success and attempts > 0:
        error = f"General retry failure. There are {attempts} left."
        score = None
        try:
            success, score = lti_post_grade(lti, submission, lis_result_sourcedid, assignment_group_id, user_id,
                                            course_id, attempts+1)
        except LTIPostMessageException as e:
            error = str(e)
        if success:
            submission.update_grading_status(GradingStatuses.FULLY_GRADED)
            log("X-Submission.LMS", f"{score}|{subscore}")
            return True
        else:
            log("X-Submission.LMS.Retry-Failure", error)
            attempts -= 1
            time.sleep(10)
    return False
