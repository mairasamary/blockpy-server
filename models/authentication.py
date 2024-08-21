from typing import Optional
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Column, String, Integer, ForeignKey

from models.generics.models import ma
from models.generics.base import Base

# TODO: Make the index a part of the code model

class Authentication(Base):
    """
    Table for handling user authentication from various sources
    """
    __tablename__ = "authentication"

    type: Mapped[str] = mapped_column(String(80))
    value: Mapped[str] = mapped_column(String(255))
    user_id: Mapped[int] = mapped_column(Integer(), ForeignKey('user.id'))

    user: Mapped["User"] = relationship(back_populates='authentications')

    TYPES = ['local', 'canvas']

    def __str__(self):
        return '<{} is {}>'.format(self.type, self.user_id)

    def find_all_linked_resources(self) -> dict[str, list[Base]]:
        """
        Find all the resources linked to this authentication. This is used when
        deleting an authentication to ensure that all the resources are also
        deleted.
        :return: A dictionary of resources linked to this authentication
        """
        return {}
