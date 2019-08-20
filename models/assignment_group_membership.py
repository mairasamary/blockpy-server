from sqlalchemy import (event, Integer, Date, ForeignKey, Column, Table,
                        String, Boolean, DateTime, Text, ForeignKeyConstraint,
                        cast, func, and_, or_, Index)

from models.models import db, Base, datetime_to_string, string_to_datetime
from models import models


class AssignmentGroupMembership(Base):
    __tablename__ = 'assignment_group_membership'
    assignment_group_id = Column(Integer(), ForeignKey('assignment_group.id'))
    assignment_id = Column(Integer(), ForeignKey('assignment.id'))
    position = Column(Integer())

    def __str__(self):
        return "<Membership {} in {}>".format(self.assignment_id, self.assignment_group_id)

    def encode_json(self):
        return {'_schema_version': 1,
                'assignment_group_id': self.assignment_group_id,
                'assignment_id': self.assignment_id,
                'position': self.position,
                'id': self.id,
                'date_modified': datetime_to_string(self.date_modified),
                'date_created': datetime_to_string(self.date_created)}

    @staticmethod
    def by_course(course_id):
        groups = [g.id for g in models.AssignmentGroup.by_course(course_id)]
        return (AssignmentGroupMembership
                .query
                .filter(AssignmentGroupMembership.assignment_group_id.in_(groups))
                .order_by(AssignmentGroupMembership.assignment_group_id,
                          AssignmentGroupMembership.assignment_id)
                .all())

    @staticmethod
    def decode_json(data, **kwargs):
        if data['_schema_version'] in (1,2):
            data = dict(data)  # shallow copy
            del data['_schema_version']
            del data['id']
            del data['date_modified']
            data['date_created'] = string_to_datetime(data['date_created'])
            for key, value in kwargs.items():
                data[key] = value
            return AssignmentGroupMembership(**data)
        raise Exception("Unknown schema version: {}".format(data.get('_schema_version', "Unknown")))

    @staticmethod
    def move_assignment(assignment_id, new_group_id):
        membership = (AssignmentGroupMembership.query
                      .filter_by(assignment_id=assignment_id)
                      .first())
        if membership is None and new_group_id != -1:
            # -1 means delete
            membership = AssignmentGroupMembership(assignment_group_id=new_group_id,
                                                   assignment_id=assignment_id,
                                                   position=0)
            db.session.add(membership)
        elif new_group_id == -1:
            db.session.delete(membership)
        else:
            membership.assignment_group_id = new_group_id
        db.session.commit()
        return membership
