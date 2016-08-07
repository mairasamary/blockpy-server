from flask.ext.script import Command, Option
from flask.ext.security.utils import encrypt_password
from models.models import db
from main import app
import datetime
import random
import json
from pprint import pprint

class ResetDB(Command):
    """Drops all tables and recreates them"""
    def run(self, **kwargs):
        db.drop_all()
        db.create_all()
        
class PopulateDB(Command):
    option_list = (
        Option('--file', '-f', dest='user_data_file', default='scripts/user_data.csv'),
    )
    
    """Fills in predefined data into DB"""
    def run(self, user_data_file, **kwargs):
        from models.models import Role, User, Course, Assignment
        
        print("Adding Admin")
        admin = User(first_name='Cory', last_name='Bart', 
                     password=encrypt_password('password'),
                     confirmed_at=datetime.datetime.now(),
                     active= True,
                     email='acbart@vt.edu', gender='Male')
        db.session.add(admin)
        db.session.flush()
        db.session.add(Role(name='instructor', user_id=admin.id))
        db.session.add(Role(name='admin', user_id=admin.id))
        
        print("Adding some students for color")
        for student in ('Dan Tilden', 'Anamary Leal', 'Ellie Cayford'):
            first, last = student.split()
            email = '{}{}@vt.edu'.format(first[0].lower(), last.lower())
            db.session.add(User(first_name=first, last_name=last, email=email))
            
        print("Adding default course")
        default_course = Course(name="Default Course", owner_id=admin.id, service="native")
        db.session.add(default_course)
        db.session.flush()
        
        print("Adding public course")
        public_course = Course(name="Public Course", owner_id=admin.id, service="native", visibility='public')
        db.session.add(public_course)
        db.session.flush()
        
        print("Adding some assignments")
        assignment1 = Assignment(name="Example #1", body="a=b+c", 
                                 course_id=default_course.id, owner_id=admin.id)
        db.session.add(assignment1)
        
        db.session.commit()
        print("Complete")
        

class DisplayDB(Command):
    def run(self, **kwargs):
        from sqlalchemy import MetaData
        from sqlalchemy_schemadisplay3 import create_schema_graph
        connection = app.config['SQLALCHEMY_DATABASE_URI']
        filename='dbschema.png'
        graph = create_schema_graph(metadata=MetaData(connection),
            show_datatypes=False, # The image would get nasty big if we'd show the datatypes
            show_indexes=False, # ditto for indexes
            rankdir='BT', # From left to right (instead of top to bottom)
            font='Helvetica',
            concentrate=False # Don't try to join the relation lines together
            )
        graph.write_png(filename) # write out the file

class ExportCourse(Command):
    option_list = (
        Option('--file', '-f', dest='course_data_path', default='backups/current_course_data.json'),
        Option('--course', '-c', dest='course_id', default='backups/current_course_data.json'),
    )
    
    def run(self, course_id, course_data_path, **kwargs):
        from models.models import Course, Assignment, AssignmentGroup, AssignmentGroupMembership
        course = Course.query.get(int(course_id))
        assignments = [a.encode_json() for a in Assignment.query.all()]
        assignment_groups = [a.encode_json() for a in AssignmentGroup.query.all()]
        assignment_memberships = [a.encode_json() for a in AssignmentGroupMembership.query.all()]
        exported_data = {
            'course': course.encode_json(),
            'assignments': assignments,
            'assignment_groups': assignment_groups,
            'assignment_memberships': assignment_memberships
        }
        with open(course_data_path, 'w') as output_file:
            json.dump(exported_data, output_file, indent=2)
        pprint(exported_data)