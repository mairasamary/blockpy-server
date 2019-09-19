"""
Functions for importing/exporting to various formats

* Bundle: custom blockpy json-based format for sharing and updating courses,
          assignments, groups, and group memberships.
* ProgSnap2: Log format for sharing student code snapshots
* PEML: common format for sharing human-readable/editable assignments.
"""
from typing import Type, Union

from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.assignment_group_membership import AssignmentGroupMembership
from models.course import Course

from main import app
from models.models import db, AssignmentGroup

CATEGORY_MODELS = {
    'courses': Course,
    'assignments': Assignment,
    'groups': AssignmentGroup,
    'memberships': AssignmentGroupMembership
}


def import_bundle(bundle, course_id=None, update=True):
    for category, values in bundle.items():
        if category not in CATEGORY_MODELS:
            raise ValueError('Unknown import category: ' + repr(category))
        table = CATEGORY_MODELS[category]
        for value in values:
            overrides = {}
            if course_id is not None:
                overrides['course_id'] = course_id
            decoded = table.decode_json(value, **overrides)
            if decoded is not None:
                db.session.add(decoded)
                db.session.commit()


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


def export_progsnap2():
    # TODO
    pass


def export_peml():
    # TODO
    pass
