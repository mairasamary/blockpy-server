from datetime import datetime, timedelta
from typing import Optional

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Column, String, Integer, ForeignKey, Text, func, JSON, Index, and_, Enum, DateTime, Float

import models
from models.generics.models import db, ma
from models.generics.base import Base
from common.dates import datetime_to_string, string_to_datetime
from models.enums import CourseLogEvent
from common.databases import get_enum_values
from sqlalchemy_utc import UtcDateTime, utcnow
import models

class SubmissionCounts(Base):
    __tablename__ = 'submission_counts'

    submission_id: Mapped[int] = mapped_column(Integer, ForeignKey('submission.id'), unique=True)
    submission: Mapped["models.Submission"] = db.relationship(back_populates='submission_counts')

    runs: Mapped[int] = mapped_column(Integer, default=0)
    average_edit_time: Mapped[Optional[float]] = mapped_column(Float, default=None)
    average_attempt_time: Mapped[Optional[float]] = mapped_column(Float, default=None)
    estimated_time_spent: Mapped[Optional[float]] = mapped_column(Float, default=None)
    syntax_errors: Mapped[int] = mapped_column(Integer, default=0)
    runtime_errors: Mapped[int] = mapped_column(Integer, default=0)
    failed_instructor_tests: Mapped[int] = mapped_column(Integer, default=0)

    __table_args__ = (
        Index('ix_submission_counts_submission_id', 'submission_id'),
    )
    