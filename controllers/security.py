from models.models import db
from models.user import User
from models.role import Role
from main import app

from flask_security import SQLAlchemyUserDatastore, Security
from flask_security.forms import ConfirmRegisterForm

from wtforms import BooleanField, StringField, validators, PasswordField

password_required = validators.DataRequired(message='Must provide password')
password_length = validators.Length(min=12, max=128, message='Password must be 12-128 characters long')


class NotEqualTo(validators.EqualTo):
    """ Modification of the EqualTo validator to ensure that two fields
    are NOT equal to each other. """
    def __call__(self, form, field):
        try:
            other = form[self.fieldname]
        except KeyError:
            raise validators.ValidationError(field.gettext("Invalid field name '%s'.") % self.fieldname)
        if field.data == other.data:
            d = {
                'other_label': hasattr(other, 'label') and other.label.text or self.fieldname,
                'other_name': self.fieldname
            }
            message = self.message
            if message is None:
                message = field.gettext('Field must not be equal to %(other_name)s.')

            raise validators.ValidationError(message % d)


class ExtendedConfirmRegisterForm(ConfirmRegisterForm):
    password = PasswordField('Password', validators=[password_required,
                                                     password_length,
                                                     NotEqualTo('email')])
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])
    #proof = StringField('Instructor Proof (e.g., your university website)')
    
# User registration, etc.
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore, confirm_register_form=ExtendedConfirmRegisterForm)
