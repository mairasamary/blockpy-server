from sqlalchemy import Column, String, Integer, ForeignKey, func
from natsort import natsorted
from models import models
from models.models import Base, datetime_to_string, string_to_datetime, db


class AssignmentGroup(Base):
    __tablename__ = 'assignment_group'
    name = Column(String(255), default="Untitled")
    url = Column(String(255), nullable=True)
    forked_id = Column(Integer(), ForeignKey('assignment_group.id'), nullable=True)
    forked_version = Column(Integer(), nullable=True)
    owner_id = Column(Integer(), ForeignKey('user.id'))
    course_id = Column(Integer(), ForeignKey('course.id'))
    position = Column(Integer(), default=0)
    version = Column(Integer(), default=0)

    def __str__(self):
        return 'Group {} in {}'.format(self.name, self.course_id)

    def encode_json(self):
        user = models.User.query.get(self.owner_id)
        return {'_schema_version': 2,
                'name': self.name,
                'fork_id': self.fork_id,
                'owner_id': self.owner_id,
                'owner_id__email': user.email if user else '',
                'course_id': self.course_id,
                'position': self.position,
                'id': self.id,
                'date_modified': datetime_to_string(self.date_modified),
                'date_created': datetime_to_string(self.date_created)}

    @staticmethod
    def decode_json(data, **kwargs):
        if data['_schema_version'] in (1, 2):
            data = dict(data)  # shallow copy
            del data['_schema_version']
            del data['owner_id__email']
            del data['id']
            del data['date_modified']
            data['date_created'] = string_to_datetime(data['date_created'])
            for key, value in kwargs.items():
                data[key] = value
            return AssignmentGroup(**data)
        raise Exception("Unknown schema version: {}".format(data.get('_schema_version', "Unknown")))

    @staticmethod
    def new(owner_id, course_id, name="Untitled Group"):
        last = (db.session.query(func.max(AssignmentGroup.position).label("last_position"))
                .filter_by(course_id=course_id).one()).last_position
        assignment_group = AssignmentGroup(owner_id=owner_id, course_id=course_id,
                                           name=name,
                                           position=last + 1 if last else 1)
        db.session.add(assignment_group)
        db.session.commit()
        return assignment_group

    @staticmethod
    def remove(assignment_group_id):
        # Reorder existing
        group = AssignmentGroup.query.filter_by(id=assignment_group_id).one()
        position = group.position
        all_groups = (AssignmentGroup.query
                      .filter(AssignmentGroup.course_id == group.course_id,
                              AssignmentGroup.position > position)
                      .update({"position": (AssignmentGroup.position - 1)}))
        # Delete target
        AssignmentGroup.query.filter_by(id=assignment_group_id).delete()
        models.AssignmentGroupMembership.query.filter_by(assignment_group_id=assignment_group_id).delete()
        db.session.commit()

    @staticmethod
    def edit(assignment_group_id, name=None, move=0):
        assignment_group = AssignmentGroup.by_id(assignment_group_id)
        if name is not None:
            assignment_group.name = name
        if move == 1 or move == -1:
            adjacent_group = (AssignmentGroup.query.filter_by(course_id=assignment_group.course_id,
                                                              position=assignment_group.position + move).first())
            if adjacent_group:
                adjacent_group.position -= move
                assignment_group.position += move
        assignment_group.version += 1
        db.session.commit()
        return assignment_group

    @staticmethod
    def is_in_course(assignment_group_id, course_id):
        return AssignmentGroup.query.get(assignment_group_id).course_id == course_id

    @staticmethod
    def by_id(assignment_group_id):
        if assignment_group_id is None:
            return None
        return AssignmentGroup.query.get(assignment_group_id)

    @staticmethod
    def by_course(course_id):
        return (AssignmentGroup.query.filter_by(course_id=course_id)
                .order_by(AssignmentGroup.name)
                .all())

    @staticmethod
    def get_ungrouped_assignments(course_id):
        return (models.Assignment.query
                .filter_by(course_id=course_id)
                .outerjoin(models.AssignmentGroupMembership)
                .filter(models.AssignmentGroupMembership.assignment_id == None)
                .all())

    def get_assignments(self):
        assignments = (models.Assignment.query
                .join(models.AssignmentGroupMembership,
                      models.AssignmentGroupMembership.assignment_id == models.Assignment.id)
                .filter(models.AssignmentGroupMembership.assignment_group_id == self.id)
                .order_by(models.Assignment.name, models.AssignmentGroupMembership.position)
                .all())
        return natsorted(assignments, key=lambda a: a.title())
