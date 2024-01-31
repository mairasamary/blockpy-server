from models.generics.models import ma
from models.role import Role
from models.user import User
from models.course import Course
from models.assignment import Assignment
from models.assignment_tag import AssignmentTag
from models.assignment_tag_membership import assignment_tag_membership
from models.assignment_group import AssignmentGroup
from models.assignment_group_membership import AssignmentGroupMembership
from models.authentication import Authentication
from models.log import Log
from models.review import Review
from models.submission import Submission
from models.sample_submission import SampleSubmission
from models.invite import Invite
from models.report import Report
from models.grade_history import GradeHistory

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        include_fk = True
        #load_instance = True

class AssignmentSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Assignment
        include_fk = True

class GroupSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = AssignmentGroup
        include_fk = True


class AssignmentGroupMembershipSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = AssignmentGroupMembership
        include_fk = True


class AssignmentTagSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = AssignmentTag
        include_fk = True


"""
# Can't easily setup association tables in marshmallow?
class AssignmentTagMembershipSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = assignment_tag_membership
        include_fk = True
"""

class AuthenticationSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Authentication
        include_fk = True

class CourseSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Course
        include_fk = True

class InviteSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Invite
        include_fk = True

class LogSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Log
        include_fk = True


class ReportSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Report
        include_fk = True


class ReviewSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Review
        include_fk = True


class RoleSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Role
        include_fk = True

class SampleSubmissionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = SampleSubmission
        include_fk = True


class SubmissionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Submission
        include_fk = True


class GradeHistorySchema(ma.SQLAlchemyAutoSchema):
    class meta:
        model = GradeHistory
        include_fk = True