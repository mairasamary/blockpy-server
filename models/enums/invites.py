import enum

class InviteStatus(enum.StrEnum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    REJECTED = "rejected"

class InviteKind(enum.StrEnum):
    COURSE_INVITE = "course_invite"
    COURSE_JOIN = "course_join"