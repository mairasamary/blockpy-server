from flask_security import RoleMixin
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime

from models.models import Base, db


class Invite(Base, RoleMixin):
    url = Column(String(80))
    user_id = Column(Integer(), ForeignKey('user.id'), default=None, nullable=True)
    course_id = Column(Integer(), ForeignKey('course.id'))
    role = Column(String(80))
    expires = Column(DateTime)

    course = db.relationship("Course")

    def __str__(self):
        if self.user_id is not None:
            return f'<Invite for {self.user_id} in {self.course_id}>'
        else:
            return f'<Invite for {self.course_id}>'

    @staticmethod
    def remove(role_id):
        Invite.query.filter_by(id=role_id).delete()
        db.session.commit()

    @staticmethod
    def by_course(course_id):
        return Invite.query.filter_by(course_id=course_id).all()