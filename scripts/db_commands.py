from flask_script import Command, Option
from flask_security.utils import hash_password
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


class AddMazeCourse(Command):
    """Fills in predefined data into DB for Maze Game"""

    option_list = (
        Option('--owner', '-o', dest='owner_id', default='1'),
    )

    def run(self, owner_id, **kwargs):
        from models.user import User
        from models.course import Course
        from models.role import Role
        from models.assignment import Assignment
        from models.assignment_group import AssignmentGroup
        from models.assignment_group_membership import AssignmentGroupMembership

        owner_id = int(owner_id)
        maze_course = Course.new('Maze Course', owner_id, 'public')

        maze_group = AssignmentGroup.new(owner_id, maze_course.id, "Maze Game")

        for level in range(10):
            maze_level = Assignment.new(owner_id, maze_course.id, 'maze', level=str(1 + level))
            db.session.add(maze_level)
            db.session.flush()
            membership = AssignmentGroupMembership.move_assignment(maze_level.id, maze_group.id)
            db.session.add(membership)
        db.session.commit()


class AddTestUsersDB(Command):
    """Fills in predefined data into DB"""

    def run(self, **kwargs):
        from models.user import User
        from models.course import Course
        from models.role import Role
        from models.assignment_group import AssignmentGroup
        from models.assignment_group_membership import AssignmentGroupMembership
        from models.assignment import Assignment

        default_course = Course.query.first()

        print("Adding Teacher")
        teacher = User(first_name="Klaus",
                       last_name="Bart",
                       password=hash_password("password"),
                       confirmed_at=datetime.datetime.now(),
                       active=True,
                       email="klaus@acbart.com")
        db.session.add(teacher)
        db.session.flush()
        db.session.add(Role(name='instructor', course_id=default_course.id, user_id=teacher.id))

        print("Adding Student")
        student = User(first_name="Ada",
                       last_name="Bart",
                       password=hash_password("password"),
                       confirmed_at=datetime.datetime.now(),
                       active=True,
                       email="ada@acbart.com")
        db.session.add(student)
        db.session.flush()
        db.session.add(Role(name='student', course_id=default_course.id, user_id=student.id))

        print("Adding basic assignments")
        basic_group = AssignmentGroup(name="First Group", course_id=default_course.id, owner_id=teacher.id)
        db.session.add(basic_group)
        db.session.flush()
        for i in range(5):
            assignment = Assignment(name="Problem {}".format(i), instructions="Complete this problem",
                                    owner_id=teacher.id, course_id=default_course.id)
            db.session.add(assignment)
            db.session.flush()
            db.session.add(AssignmentGroupMembership(assignment_group_id=basic_group.id,
                                                     assignment_id=assignment.id))

        db.session.commit()
        print("Complete")


class PopulateDB(Command):
    """Fills in predefined data into DB"""

    def run(self, **kwargs):
        from models.user import User
        from models.course import Course
        from models.role import Role

        with open('settings/secrets.json', 'r') as secret_file:
            secrets = json.load(secret_file).get("ADMIN", {})

        print("Adding Admin")
        admin = User(first_name=secrets.get("first_name", "Admin"),
                     last_name=secrets.get("last_name", "User"),
                     password=hash_password(secrets.get("password", "password")),
                     confirmed_at=datetime.datetime.now(),
                     active=True,
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
        filename = 'docs/dbschema.png'
        graph = create_schema_graph(metadata=MetaData(connection),
                                    show_datatypes=True,  # The image would get nasty big if we'd show the datatypes
                                    show_indexes=False,  # ditto for indexes
                                    rankdir='LR',  # From left to right (instead of top to bottom)
                                    font='Helvetica',
                                    concentrate=False  # Don't try to join the relation lines together
                                    )
        graph.write_png(filename)  # write out the file


class ExportCourse(Command):
    option_list = (
        Option('--file', '-f', dest='course_data_path', default='backups/current_course_data.json'),
        Option('--course', '-c', dest='course_id', default='1'),
    )

    def run(self, course_id, course_data_path, **kwargs):
        from models.models import AssignmentGroupMembership
        from models.course import Course
        from models.assignment import Assignment
        from models.assignment_group import AssignmentGroup
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
        from models.models import AssignmentGroupMembership
        from models.course import Course
        from models.assignment import Assignment
        from models.assignment_group import AssignmentGroup
        with open(course_data_path, 'r') as input_file:
            imported_data = json.load(input_file)
        Course.import_json(imported_data, int(owner_id))


class RemoveCourse(Command):
    option_list = (
        Option('--course', '-c', dest='course_id'),
    )

    def run(self, course_id, **kwargs):
        from models.course import Course
        Course.remove(int(course_id), True)


class DumpDB(Command):
    option_list = (
        Option('--output', '-o', dest='output', default='backups/db/'),
        Option('--log_for_course', '-l', dest='log_for_course', default=None),
    )

    def dump_rows(self, rows, output, table_name):
        data = [{c.name: str(getattr(row, c.name))
                 for c in row.__table__.columns}
                for row in rows]
        full_path = os.path.join(output, table_name + '.json')
        with open(full_path, 'w') as output_file:
            json.dump(data, output_file)

    def _log_for_course(self, course, output):
        from models.log import Log
        logs = Log.get_logs_for_course(course)
        self.dump_rows(logs, output, 'log')

    def run(self, output, log_for_course, **kwargs):
        if log_for_course:
            return self._log_for_course(log_for_course, output)
        from models.models import (db, AssignmentGroupMembership)
        from models.user import User
        from models.course import Course
        from models.role import Role
        from models.authentication import Authentication
        from models.log import Log
        from models.submission import Submission
        from models.assignment import Assignment
        from models.assignment_group import AssignmentGroup
        tables = {
            'user': User,
            'course': Course,
            'submission': Submission,
            'assignment': Assignment,
            'group': AssignmentGroup,
            'membership': AssignmentGroupMembership,
            'authentication': Authentication,
            'log': Log,
            'role': Role
        }
        for table_name, table_class in tables.items():
            self.dump_rows(table_class.query.all(), output, table_name)
