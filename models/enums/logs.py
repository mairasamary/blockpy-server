import enum

class AssignmentLogEvent(enum.StrEnum):
    CREATE = "create"
    DELETE = "delete"
    EDIT = "edit"
    RENAME = "rename"
    FORK = "fork"
    UNFORK = "unfork"
    ARCHIVE = "archive"
    CORRUPTED = "corrupted"


class CourseLogEvent(enum.StrEnum):
    CREATE = "create"
    DELETE = "delete"
    # Edit events
    # Give to a new Owner
    TRANSFER = "transfer"
    RENAME = "rename"
    EDIT = "edit"
    ARCHIVE = "archive"
    CORRUPTED = "corrupted"


class RoleLogEvent(enum.StrEnum):
    GIVEN = "given"
    REMOVED = "removed"
    CHANGED = "changed"


class SubmissionLogEvent(enum.StrEnum):
    UNKNOWN = "unknown"
    CREATE = "create"
    DELETE = "delete"
    EDIT = "edit"
    SUBMIT = "submit"
    VIEW = "view"
    FEEDBACK = "feedback"
    COMPILE = "compile"
    RUN = "run"
    DEBUG = "debug"
    ERROR = "error"
    WARNING = "warning"
    INFO = "info"
    COMPLETE = "complete"
    TRANSFER = "transfer"
    CANVAS = "canvas"
    EXTEND_TIME = "extend_time"
    START_TIMER = "start_timer"