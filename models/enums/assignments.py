import enum

class AssignmentTypes(enum.StrEnum):
    READING = 'reading'
    QUIZ = 'quiz'
    TEXTBOOK = 'textbook'
    MAZE = 'maze'
    PYTHON = 'python'
    JAVA = 'java'
    TYPESCRIPT = 'typescript'
    EXPLANATION = 'explanation'


class AssignmentStatus(enum.StrEnum):
    """
    The workflow status of the assignment, controlling how it is displayed and used in the system.

    Attributes:
        DRAFT: The assignment is still in development
        PILOT: The assignment is being tested, and should not be taken by students. However, other users may want to see it.
        PUBLISHED: The assignment is available for use
        ARCHIVED: The assignment is no longer in use
    """
    DRAFT = 'draft'
    PILOT = 'pilot'
    PUBLISHED = 'published'
    ARCHIVED = 'archived'


class AssignmentFeedback(enum.StrEnum):
    """
    TODO: AssignmentFeedback (visibility) should probably be separated out into either a Schema or a separate table

    The visibility of the feedback for this assignment, controlling whether students can see the feedback at a
    given point in time.

    There are a few issues here:
        - Timing relative to due date
        - Whether they are in the editor
        - What content to show (score, comments, original question, actual submission), some of which may be in redacted form.
        - Whether they have submitted
        - Whether the instructor has published the feedback

    Attributes:
        IMMEDIATE: The feedback is available at any time, even while editing the assignment.
        AFTER_SUBMISSION: The feedback is only available after the assignment has been submitted and "closed".
                          The feedback will not be visible from the editor.
        AFTER_DUE: The feedback is only available after the assignment's due date has passed.
        MANUAL: The feedback is only available after the instructor has reviewed the assignment and approved
                the feedback for release by setting the grade_status to the appropriate value.
        NEVER: The feedback is never available to students.
    """
    IMMEDIATE = "immediate"
    AFTER_SUBMISSION = "after_submission"
    AFTER_DUE = "after_due"
    MANUAL = "manual"
    NEVER = "never"