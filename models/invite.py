from typing import Optional
from datetime import datetime
from flask_security import RoleMixin
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime

import models
from models.generics.models import db, ma
from models.generics.base import Base


class Invite(Base, RoleMixin):
    __tablename__ = "invite"
    url: Mapped[str] = mapped_column(String(80))
    user_id: Mapped[Optional[int]] = mapped_column(Integer(), ForeignKey('user.id'), default=None, nullable=True)
    course_id: Mapped[int] = mapped_column(Integer(), ForeignKey('course.id'))
    role: Mapped[Optional[str]] = mapped_column(String(80))
    expires: Mapped[Optional[datetime]] = mapped_column(DateTime)

    course: Mapped["Course"] = db.relationship(back_populates="invites")
    user: Mapped["User"] = db.relationship(back_populates="invites")

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

