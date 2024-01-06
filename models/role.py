from flask_security import RoleMixin
from sqlalchemy import Column, String, Integer, ForeignKey

from models.generics.models import db, ma
from models.generics.base import Base


class Role(Base, RoleMixin):
    name = Column(String(80))
    user_id = Column(Integer(), ForeignKey('user.id'))
    course_id = Column(Integer(), ForeignKey('course.id'), default=None)

    course = db.relationship("Course")

    NAMES = ['instructor', 'admin', 'student']
    CHOICES = [
        ('student', 'Student'),
        ('instructor', 'Instructor'),
        ('teachingassistant', 'Teaching Assistant')
    ]

    def encode_json(self, use_owner=True):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
            'course_id': self.course_id
        }

    def update_role(self, new_role):
        if new_role in [id for id, name in self.CHOICES]:
            self.name = new_role
            db.session.commit()
            return new_role
        return None

    def __str__(self):
        return '<User {} is {}>'.format(self.user_id, self.name)

    @staticmethod
    def remove(role_id):
        Role.query.filter_by(id=role_id).delete()
        db.session.commit()

    @staticmethod
    def by_course(course_id):
        return Role.query.filter_by(course_id=course_id).all()

class RoleSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Role
        include_fk = True
