class SubmissionStatuses:
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

    VALID_CHOICES = (STARTED, IN_PROGRESS, SUBMITTED, COMPLETED)


class GradingStatuses:
    FULLY_GRADED = 'FullyGraded'
    PENDING = 'Pending'
    PENDING_MANUAL = 'PendingManual'
    FAILED = 'Failed'
    NOT_READY = 'NotReady'

    VALID_CHOICES = (FULLY_GRADED, PENDING, PENDING_MANUAL, FAILED, NOT_READY)


class ReportStatus:
    QUEUED = "queued"
    STARTED = "started"
    FINISHED = "finished"
    ERROR = "error"
    EXPIRED = "expired"
