from sqlalchemy import Column, String, Integer, ForeignKey

from models.generics.models import ma
from models.generics.base import Base

# TODO: Make the index a part of the code model

class Authentication(Base):
    """
    Table for handling user authentication from various sources
    """
    type = Column(String(80))
    value = Column(String(255))
    user_id = Column(Integer(), ForeignKey('user.id'))

    TYPES = ['local', 'canvas']

    def __str__(self):
        return '<{} is {}>'.format(self.type, self.user_id)

class AuthenticationSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Authentication
        include_fk = True
