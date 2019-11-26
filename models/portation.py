"""
Functions for importing/exporting to various formats

* Bundle: custom blockpy json-based format for sharing and updating courses,
          assignments, groups, and group memberships.
* ProgSnap2: Log format for sharing student code snapshots
* PEML: common format for sharing human-readable/editable assignments.
"""
import io
import os
import shutil
import zipfile
from typing import Type, Union

from natsort import natsorted

from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.assignment_group_membership import AssignmentGroupMembership
from models.course import Course
import models

from models.data_formats.progsnap2 import dump_progsnap

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


def export_progsnap2(output, course_id):
    output_zip = output+".zip"
    # Start filling it up
    with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zip_file:
        print("Starting")
        for filename in dump_progsnap(zip_file, course_id):
            print("Completed", filename)
        print("Files completed. Writing to disk.")


def export_peml():
    # TODO
    pass
