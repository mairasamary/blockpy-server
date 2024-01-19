import os
import json

import click
from flask.cli import FlaskGroup
from flask_migrate import Migrate
from flask import current_app

from scripts.setup import cli
import scripts.db_commands
import scripts.external_commands


@cli.command('huey')
def run_huey():
    """
    Example command
    :return:
    """
    click.echo("Run the Huey server")
    huey = current_app.huey
    consumer = huey.create_consumer()
    consumer.run()



"""
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
"""

if __name__ == '__main__':
    cli()
