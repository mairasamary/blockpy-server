from sqlalchemy import Column, String, Integer, ForeignKey

from models.models import Base, db

# TODO: Make the index a part of the code model

class Authentication(Base):
    type = Column(String(80))
    value = Column(String(255))
    user_id = Column(Integer(), ForeignKey('user.id'))

    TYPES = ['local', 'canvas']

    def __str__(self):
        return '<{} is {}>'.format(self.type, self.user_id)
