from models.models import db
from models.user import User
from models.role import Role
from main import app

from flask_security import SQLAlchemyUserDatastore, Security
from flask_security.forms import ConfirmRegisterForm

from wtforms import BooleanField, StringField, validators

class ExtendedConfirmRegisterForm(ConfirmRegisterForm):
    first_name = StringField('First Name', [validators.Required()])
    last_name = StringField('Last Name', [validators.Required()])
    #proof = StringField('Instructor Proof (e.g., your university website)')
    
# User registration, etc.
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore, confirm_register_form=ExtendedConfirmRegisterForm)