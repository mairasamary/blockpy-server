import random
import time
import json
import os
import subprocess

from controllers.helpers import make_log_entry, ensure_dirs
from controllers.pylti.common import LTIPostMessageException
from controllers.pylti.flask import LTI
from main import app, huey
from models.log import Log
from models.report import Report
from models.assignment import Assignment
from models.submission import Submission
from models.submission import Submission
from models.statuses import GradingStatuses


@huey.task(context=True)
def get_events(course_id, user_id, task=None):
    """Background task that runs a long function with progress reports."""
    history = Log.get_history(course_id, assignment_id=None, user_id=user_id)
    return history


@huey.task(context=True)
def bulk_retry_all_failed_grades(course_id, json_lti):
    pass


@huey.task(context=True)
def check_similarity(user_id, assignment_id, exclude_courses, target_course, passes, use_starting_code,
                     number_of_matches, task=None):
    """

    :param assignment_id:
    :param exclude_courses:
    :param target_courses:
    :param settings:
    :return:
    """
    # Settings:
    # Comparison algorithms (passes): structure, text, exact, nocomments, misspellings
    # Use starting_code as archive
    # Number of matches
    report = Report.new('check_similarity', json.dumps(
        dict(assignment_id=assignment_id, exclude_courses=exclude_courses, target_course=target_course,
             passes=passes, use_starting_code=use_starting_code, number_of_matches=number_of_matches)
    ), owner_id=user_id, course_id=target_course)

    with app.app_context():
        report.start()

        report.update_progress(message="Getting all the submissions relevant to the assignment.")
        assignment: Assignment = Assignment.by_id(assignment_id)
        # TODO: Check that the assignment exists
        # TODO: Check permissions
        submissions = Submission.all_by_assignment(assignment_id)

        report.update_progress(
            message="Grouping them as excluded, archived, or normal depending on exclude_courses and target_courses")
        included = [submission for submission in submissions if submission.course_id not in exclude_courses]
        archived = [submission for submission in included if submission.course_id != target_course]
        target = [submission for submission in included if submission.course_id == target_course]

        report.update_progress(message="Writing out all the files to the disk in a folder")
        directory = report.get_report_folder()
        ensure_dirs(directory)
        for folder in ["archived", "target", "distribution", "output"]:
            ensure_dirs(os.path.join(directory, folder))
        for folder, submissions in [("archived", archived), ("target", target)]:
            for submission in submissions:
                path = os.path.join(directory, folder, f"{submission.course_id}_{submission.user_id}.py")
                with open(path, 'w') as out:
                    out.write(submission.code)
        with open(os.path.join(directory, "distribution", "starting_code.py"), 'w') as out:
            out.write(assignment.starting_code)
        error_path = open(os.path.join(directory, f"error_log.txt"), 'wb')

        report.update_progress(message="Run the compare50 program on them")
        command = " ".join([app.config['COMPARE50_EXECUTABLE'],
                            os.path.join(directory, "target", "*.py"),
                            "-a", os.path.join(directory, "archived", "*.py"),
                            "-d", os.path.join(directory, "distribution", "*.py"),
                            "-p", passes if isinstance(passes, str) else " ".join(passes),
                            #"-n", str(number_of_matches),
                            "--verbose",
                            "-o", os.path.join(directory, "output")
                            ])
        try:
            p = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=error_path, shell=True)
            out, err = p.communicate()
            if out.strip():
                report.update_progress(message=out)
            error_path.write(out)
            error_path.write(err)
        except Exception as e:
            report.error("Task Error: " + str(e))
        finally:
            error_path.close()

        report.finish(result="output/index.html")


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
                return True
            else:
                make_log_entry(**log_params, event_type="X-Submission.LMS.Retry-Failure", message=error)
                report.error("Task Error: " + str(error))
                attempts -= 1
    return False
