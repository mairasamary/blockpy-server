"""
Functions for importing/exporting to various formats

* Bundle: custom blockpy json-based format for sharing and updating courses,
          assignments, groups, and group memberships.
* ProgSnap2: Log format for sharing student code snapshots
* PEML: common format for sharing human-readable/editable assignments.
"""
import io
import json
import os
import time
import shutil
import zipfile
from typing import Type, Union

from natsort import natsorted
from werkzeug.utils import secure_filename

import pdfkit

from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.assignment_group_membership import AssignmentGroupMembership
from models.course import Course
import models

from models.data_formats.progsnap2 import dump_progsnap, get_course_users
import models.data_formats.progsnap2ite as progsnap2ite

from main import app
from models.models import db, AssignmentGroup

CATEGORY_MODELS = {
    'courses': Course,
    'assignments': Assignment,
    'groups': AssignmentGroup,
    'memberships': AssignmentGroupMembership
}


# TODO: More sophisticated class for using either ID or URL to keep track of elements.
class Identifier:
    def __init__(self, entity):
        self.id = entity.id
        self.url= entity.url

    def __hash__(self):
        return hash((self.id, self.url))

    def __equal__(self, right):
        if not isinstance(right, Identifier):
            return False
        if self.id is not None and right.id is not None:
            return self.id == right.id
        else:
            return self.url == right.url
        # TODO Handle case where we need to look up the other one


def sorter(membership):
    return membership.get('assignment_group_url', ""), membership.get('assignment_url', "")


def import_bundle(bundle, owner_id, course_id=None, update=True):
    # TODO: Modify to return the items that were updated!
    if 'course' in bundle:
        course = Course.decode_json(bundle['course'], owner_id=owner_id)
        db.session.add(course)
        db.session.commit()
    else:
        course = Course.by_id(course_id)
    assignment_remap = {}
    assignments = bundle.get('assignments', [])
    for assignment_data in natsorted(assignments, key=lambda a: a['name']):
        assignment = Assignment.decode_json(assignment_data,
                                            course_id=course.id,
                                            owner_id=owner_id)
        assignment_remap[assignment_data['url']] = assignment.id
    group_remap = {}
    groups = bundle.get('groups', [])
    for group_data in natsorted(groups, key=lambda g: g['name']):
        group = AssignmentGroup.decode_json(group_data,
                                            course_id=course.id,
                                            owner_id=owner_id)
        group_remap[group_data['url']] = group.id
    memberships = bundle.get('memberships', [])
    for member_data in sorted(memberships, key=sorter):
        assignment_id = assignment_remap[member_data['assignment_url']]
        group_id = group_remap[member_data['assignment_group_url']]
        member = AssignmentGroupMembership.decode_json(member_data,
                                                       assignment_id=assignment_id,
                                                       assignment_group_id=group_id)
    return True


# noinspection PyTypeHints
def export_bundle(**kwargs):
    """
    Can consume lists of IDs, URLs, or objects to serialize into JSON data. Named parameters
    to the function are the categories.

    if `connected` is True, then tries to export ALL the associated data, not just the specific element.

    :param kwargs:
    :return:
    """
    dumped = {}
    for category, values in kwargs.items():
        if category not in CATEGORY_MODELS:
            raise ValueError('Unknown export category: '+repr(category))
        table = CATEGORY_MODELS[category]
        dumped[category] = []
        for value in values:
            if isinstance(value, int):
                instance = table.by_id(value)
            elif isinstance(value, str):
                instance = table.by_url(value)
            elif isinstance(value, table):
                instance = value
            else:
                raise TypeError('Unknown export type for {!r}: {!r}'.format(category, type(value)))
            dumped[category].append(instance.encode_json())
    return dumped


def export_progsnap2(output, course_id, assignment_group_ids=None, exclude=None, log=False, format='csv', overwrite=False, partition=None):
    if log:
        print("Starting off progsnap2 dump")
    if partition is not None:
        users, user_roles = get_course_users(course_id, None)
        users = list(users.values())
        letters = [user.last_name[0].upper() for user in users]
        if log:
            print(len(letters), "users found")
        letter_breaks = list(sorted(set(letters[::len(letters)//(1+partition)][1:])))
        user_id_groups = {}
        for letter_break in letter_breaks:
            while users and users[0].last_name[0].upper() <= letter_break:
                user_id_groups.setdefault(letter_break, []).append(users.pop(0).id)
        if log:
            print({g: len(u) for g, u in user_id_groups.items()})
    else:
        user_id_groups = {"": None}
    if format == 'csv':
        output_zip = output+".zip"
        # Start filling it up
        with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zip_file:
            if log:
                print("Starting")
            for filename in dump_progsnap(zip_file, course_id, assignment_group_ids, None):
                if log:
                    print("Completed", filename)
            if log:
                print("Files completed. Writing to disk.")
    else:
        for partition_group, user_ids in user_id_groups.items():
            if log:
                print("Starting", partition_group)
            output_db = f"{output}_{partition_group}.db" if partition_group else f"{output}.db"
            if overwrite:
                if os.path.exists(output_db):
                    if log:
                        print("Removing old file:", output_db)
                    os.remove(output_db)
                    time.sleep(1)
            for progress in progsnap2ite.dump(output_db, course_id, assignment_group_ids, user_ids, exclude):
                if log:
                    print("Completed", progress)
            if log:
                print("Files completed. Writing to disk.")


def export_peml():
    # TODO
    pass


# noinspection PyTypeHints
def export_zip(assignments=None, submissions=None, users=None):
    dumped = {}
    assignment_paths = {}
    if assignments:
        for assignment in assignments:
            assignment_paths[assignment.id] = assignment.get_filename(extension='')
            dumped[assignment.get_filename(extension='.md')] = json.dumps(assignment.encode_json())
    user_paths = {}
    user_names = []
    if users:
        for user in users:
            user_paths[user.id] = secure_filename(user.name())
            user_names.append(user.name())
    dumped['users.txt'] = "\n".join(sorted(set(user_names)))
    if submissions:
        for submission in submissions:
            files = submission.encode_human()
            for filename, contents in files.items():
                path = assignment_paths[submission.assignment_id]+'/'
                path += user_paths[submission.user_id]+'/'
                path += filename
                dumped[path] = contents
    #print(list(dumped.keys()))
    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
        for file_name, data in dumped.items():
            zip_file.writestr(file_name, data)
    return zip_buffer.getvalue()


# noinspection PyTypeHints
def export_pdf_zip(assignments=None, submissions=None, users=None, jinja_environment=None):
    dumped = {}
    assignment_paths = {}
    if assignments:
        for assignment in assignments:
            assignment_paths[assignment.id] = assignment.get_filename(extension='')
            dumped[assignment.get_filename(extension='.md')] = json.dumps(assignment.encode_json())
    user_paths = {}
    user_names = []
    if users:
        for user in users:
            user_paths[user.id] = secure_filename(user.name())
            user_names.append(user.name())
    dumped['users.txt'] = "\n".join(sorted(set(user_names)))
    # Start PDF
    pdfs = {}
    # Add submissions to the PDF
    if submissions:
        template = jinja_environment.from_string("""
                        <strong>Student Name: {{ submission.user.name() }}</strong><br>
                        {{ submission.code|highlight_java_code|safe }}
                        <div style = "display:block; clear:both; page-break-after:always;"></div>""")
        for submission in submissions:
            assignment_filename = submission.assignment.get_filename(".pdf")
            if assignment_filename not in pdfs:
                pdfs[assignment_filename] = []
            pdfs[assignment_filename].append(template.render(submission=submission))
    for pdf_name, pdf in pdfs.items():
        dumped[pdf_name] = pdfkit.from_string("\n".join(pdf))
    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
        for file_name, data in dumped.items():
            zip_file.writestr(file_name, data)
    return zip_buffer.getvalue()