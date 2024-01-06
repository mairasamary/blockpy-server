import os
import json

import os
import json
import click
from flask.cli import FlaskGroup
from flask import current_app

from main import create_app

from flask_migrate import Migrate

from scripts.db_commands import (ResetDB, PopulateDB, DisplayDB, ExportCourse,
                                 ImportCourse, CreateDB, RemoveCourse,
                                 DumpDB, AddTestUsersDB, AddMazeCourse,
                                 ExportProgSnap)
from scripts.external_commands import UpdateBlockPy
from tasks.run import HueyWorker


def create_cli_app(info):
    """
    Create a special version of the create_app function that has an unused `info` parameter.
    :param info:
    :return:
    """
    return create_app()


@click.group(cls=FlaskGroup, create_app=create_cli_app)
@click.option('--debug', is_flag=True, default=False)
def cli(debug):
    """
    Create the `cli` function that will manage all the custom scripts.
    :param debug:
    :return:
    """
    if debug:
        os.environ['FLASK_DEBUG'] = '1'
    os.environ['FLASK_ENV'] = 'development'

# Read in secrets
with open('settings/secrets.json') as secrets_file:
    secrets = json.load(secrets_file)

# TODO: Handle Migrate stuff
# TOOD: Handle all other commands conversion
manager = Manager(app)

# Server commands context
manager.add_command("secure", Server(ssl_crt=secrets.get("LOCAL_SSL_CERT"),
                                     ssl_key=secrets.get("LOCAL_SSL_KEY"),
                                     threaded=True))
manager.add_command("insecure", Server())

# Database Commands
manager.add_command("reset_db", ResetDB())
manager.add_command("create_db", CreateDB())
manager.add_command("populate_db", PopulateDB())
manager.add_command("add_test_users_db", AddTestUsersDB())
manager.add_command("add_maze_course_db", AddMazeCourse())
manager.add_command("display_db", DisplayDB())
manager.add_command("export_course", ExportCourse())
manager.add_command("import_course", ImportCourse())
manager.add_command("remove_course", RemoveCourse())
manager.add_command("dump_db", DumpDB())
manager.add_command("export_progsnap2", ExportProgSnap())

# External commands
manager.add_command("update_blockpy", UpdateBlockPy())

# Migrate commands
manager.add_command("db", MigrateCommand)

# Task Commands
manager.add_command("huey", HueyWorker())

if __name__ == '__main__':
    cli()