import sys, os
import json

from flask_script import Manager, Server

from main import app
from models.models import db
from scripts.db_commands import (ResetDB, PopulateDB, DisplayDB, ExportCourse,
                                 ImportCourse, CreateDB, RemoveCourse,
                                 DumpDB)
from scripts.external_commands import UpdateDatasets, UpdateBlockPy

# Read in secrets
with open('secrets.json') as secrets_file:
    secrets = json.load(secrets_file)

manager = Manager(app)

# Server commands context
context = (secrets.get("LOCAL_SSL_CERT"), secrets.get("LOCAL_SSL_KEY"))
manager.add_command("secure", Server(ssl_context=context, threaded=True))
manager.add_command("insecure", Server())

# Database Commands
manager.add_command("reset_db", ResetDB())
manager.add_command("create_db", CreateDB())
manager.add_command("populate_db", PopulateDB())
manager.add_command("display_db", DisplayDB())
manager.add_command("export_course", ExportCourse())
manager.add_command("import_course", ImportCourse())
manager.add_command("remove_course", RemoveCourse())
manager.add_command("dump_db", DumpDB())

# External commands
manager.add_command("update_datasets", UpdateDatasets())
manager.add_command("update_blockpy", UpdateBlockPy())


if __name__ == "__main__":
    manager.run()
