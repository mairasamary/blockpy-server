import enum

class ReportStatus(enum.StrEnum):
    QUEUED = "queued"
    STARTED = "started"
    FINISHED = "finished"
    ERROR = "error"
    EXPIRED = "expired"

class ReportVisibility(enum.StrEnum):
    PUBLIC = "public"
    PRIVATE = "private"
    COURSE = "course"
    ASSIGNMENT = "assignment"
    USER = "user"