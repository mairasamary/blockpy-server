import os
import time

import base64

from flask import url_for
from sqlalchemy import Column, Text, Integer, Boolean, ForeignKey, Index, func, String

from main import app
from models import models
from models.models import Base, db, ensure_dirs


class Review(Base):
    comment = Column(Text(), default="")
    location = Column(Text(), default="")
    generic = Column(Boolean(), default=False)
    tag_id = Column(Integer(), ForeignKey('assignment_tag.id'))
    # Should be treated as out of X/100
    score = Column(Integer(), default=0)
    # Tracking
    submission_id = Column(Integer(), ForeignKey('submission.id'))
    author_id = Column(Integer(), ForeignKey('user.id'))
    assignment_version = Column(Integer(), default=0)
    submission_version = Column(Integer(), default=0)
    version = Column(Integer(), default=0)
    forked_id = Column(Integer(), ForeignKey('review.id'), nullable=True)
    forked_version = Column(Integer(), nullable=True)
