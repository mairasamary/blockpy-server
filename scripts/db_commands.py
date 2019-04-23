from flask_script import Command, Option
from flask_security.utils import encrypt_password
from models.models import db
from main import app
import datetime
import random
import os
import json
from pprint import pprint

class CreateDB(Command):
    def run(self, **kwargs):
        print(db.engine)
        print(dir(db.engine))
        db.engine.echo = True
        r = db.create_all()
        print(r)

class ResetDB(Command):
    """Drops all tables and recreates them"""
    def run(self, **kwargs):
        db.drop_all()
        db.create_all()
        
class PopulateDB(Command):
    
    """Fills in predefined data into DB"""
    def run(self, **kwargs):
        from models.models import Role, User, Course
        
        with open('secrets.json', 'r') as secret_file:
            secrets = json.load(secret_file).get("ADMIN", {})
        
        print("Adding Admin")
        admin = User(first_name=secrets.get("first_name", "Admin"),
                     last_name=secrets.get("last_name", "User"), 
                     password=encrypt_password(secrets.get("password", "password")),
                     confirmed_at=datetime.datetime.now(),
                     active= True,
                     email=secrets.get("email", "email@whatever.com"))
        db.session.add(admin)
        db.session.flush()
        db.session.add(Role(name='instructor', user_id=admin.id))
        db.session.add(Role(name='admin', user_id=admin.id))
            
        print("Adding default course")
        default_course = Course(name="Default Course", owner_id=admin.id, service="native")
        db.session.add(default_course)
        db.session.flush()
        db.session.add(Role(name='instructor', course_id=default_course.id, user_id=admin.id))
        
        db.session.commit()
        print("Complete")
        

class DisplayDB(Command):
    def run(self, **kwargs):
        from sqlalchemy import MetaData
        from scripts.sqlalchemy_schemadisplay3 import create_schema_graph
        connection = app.config['SQLALCHEMY_DATABASE_URI']
        filename='dbschema.png'
        graph = create_schema_graph(metadata=MetaData(connection),
            show_datatypes=True, # The image would get nasty big if we'd show the datatypes
            show_indexes=False, # ditto for indexes
            rankdir='LR', # From left to right (instead of top to bottom)
            font='Helvetica',
            concentrate=False # Don't try to join the relation lines together
            )
        graph.write_png(filename) # write out the file

class ExportCourse(Command):
    option_list = (
        Option('--file', '-f', dest='course_data_path', default='backups/current_course_data.json'),
        Option('--course', '-c', dest='course_id', default='1'),
    )
    
    def run(self, course_id, course_data_path, **kwargs):
        from models.models import Course, Assignment, AssignmentGroup, AssignmentGroupMembership
        exported_data = Course.export(int(course_id))
        with open(course_data_path, 'w') as output_file:
            json.dump(exported_data, output_file, indent=2)
        pprint(exported_data)

class ImportCourse(Command):
    option_list = (
        Option('--file', '-f', dest='course_data_path', default='backups/current_course_data.json'),
        Option('--owner', '-o', dest='owner_id', default='1'),
    )
    def run(self, owner_id, course_data_path, **kwargs):
        from models.models import Course, Assignment, AssignmentGroup, AssignmentGroupMembership
        with open(course_data_path, 'r') as input_file:
            imported_data = json.load(input_file)
        Course.import_json(imported_data, int(owner_id))
    
class RemoveCourse(Command):
    option_list = (
        Option('--course', '-c', dest='course_id'),
    )
    def run(self, course_id, **kwargs):
        from models.models import Course
        Course.remove(int(course_id), True)

class DumpDB(Command):
    option_list = (
        Option('--output', '-o', dest='output', default='backups/db/'),
    )
    
    def run(self, output, **kwargs):
        from models.models import (User, db, Course, Submission, Assignment,
                           AssignmentGroup, AssignmentGroupMembership, Settings,
                           Authentication, Log, Role, CourseAssignment)
        tables = {
            'user': User,
            'course': Course,
            'submission': Submission,
            'assignment': Assignment,
            'group': AssignmentGroup,
            'membership': AssignmentGroupMembership,
            'settings': Settings,
            'authentication': Authentication,
            'log': Log,
            'role': Role
        }
        for table_name, table_class in tables.items():
            data = [{c.name: str(getattr(row, c.name))
                     for c in row.__table__.columns}
                    for row in table_class.query.all()]
            full_path = os.path.join(output, table_name+'.json')
            with open(full_path, 'w') as output_file:
                json.dump(data, output_file, indent=2)
