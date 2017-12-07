from flask_script import Command, Option
from flask_security.utils import encrypt_password

from models.models import db

from main import app

import datetime
import time
import random
from shutil import copy
import os
import json
import requests
from pprint import pprint
from natsort import natsorted
from collections import Counter, defaultdict
import yaml
try:
    from tqdm import tqdm
except:
    print("TQDM is not installed. No progress bars will be available.")
    tqdm = list


import requests_cache
requests_cache.install_cache('canvas_requests')

def _canvas_request(verb, command, course, data, params, token, canvas_url, no_course, result=list):
    try:
        if data is None:
            data = {}
        if params is None:
            params = {}
        next_url = canvas_url
        if not no_course:
            next_url += 'courses/{course_id}/'.format(course_id=course)
        next_url += command
        data['access_token'] = token
        data['per_page'] = 100
        final_result = []
        while True:
            response = verb(next_url, data=data, params=params)
            if result == dict:
                return response.json()
            elif result == list:
                final_result.extend(response.json())
            if 'next' in response.links:
                next_url = response.links['next']['url']
            else:
                return final_result
    except json.decoder.JSONDecodeError:
        raise Exception("{}\n{}".format(response, next_url))

CANVAS_DATE_STRING = "%Y-%m-%dT%H:%M:%SZ"
def days_between(d1, d2=None):
    d1 = datetime.strptime(d1, CANVAS_DATE_STRING)
    if d2 is None:
        d2 = datetime.utcnow()
    else:
        d2 = datetime.strptime(d2, CANVAS_DATE_STRING)
    return abs((d2 - d1).days)

class GetCanvasData(Command):
    """Retrieves the Canvas data"""
    
    def run(self, **kwargs):
        with open(app.config['COURSE_TOKENS']) as settings_file:
            COURSE_TOKENS = yaml.load(settings_file)
        for canvas_url, courses in COURSE_TOKENS.items():
            print(canvas_url, "(Courses: {})".format(len(courses)))
            for course_id, token in tqdm(courses.items()):
                def get(command, data=None, params=None, result=list, no_course=False):
                    return _canvas_request(requests.get, command, course_id, 
                                           data, params, token, canvas_url,
                                           no_course=no_course,
                                           result=result)
                data = {}
                # Download group_categories
                data['group_categories'] = get('group_categories')
                # Download groups
                data['groups'] = groups = get('groups')
                # Download users
                users = get('users')
                data['user_lookup'] = {u['id']: u for u in users}
                # Download mapping
                data['group_users'] = {}
                for group in groups:
                    group_id = group['id']
                    data['group_membership'] = get('groups/{}/users'.format(group_id), no_course=True)
                    data['group_users'][group_id] = [m['id']
                                                     for m in data['group_membership']]
                # Download assignments
                assignments = get('assignments', data={
                    'include[]': ['all_dates', 'overrides']
                })
                data['assignment_lookup'] = {a['id']: a for a in assignments}
                # Download assignment groups
                data['assignment_groups'] = {a['id']: a for a in get('assignment_groups')}
                # Download submissions
                data['submissions'] = get('students/submissions', data={
                    'student_ids[]': 'all',
                    'include[]': ['visibility']
                })
                canvas_dir = app.config['CANVAS_DIR']
                canvas_path = os.path.join(canvas_dir, '{}.json'.format(course_id))
                with open(canvas_path, 'w') as canvas_file:
                    json.dump(data, canvas_file)
