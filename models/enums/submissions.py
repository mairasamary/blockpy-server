import enum

class SubmissionStatuses(enum.StrEnum):
    # Not yet begun - the value if the submission does not exist
    INITIALIZED = "Initialized"
    # Started -> not yet run
    STARTED = "Started"
    # inProgress -> Run, but not yet marked formally as "submitted"
    IN_PROGRESS = "inProgress"
    # Submitted -> formally marked
    SUBMITTED = "Submitted"
    # Completed -> Either formally Submitted and FullyGraded, or auto graded as "correct"
    COMPLETED = "Completed"


class GradingStatuses(enum.StrEnum):
    FULLY_GRADED = 'FullyGraded'
    PENDING = 'Pending'
    PENDING_MANUAL = 'PendingManual'
    FAILED = 'Failed'
    NOT_READY = 'NotReady'