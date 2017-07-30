import sys, os

from main import app
from flask_script import Manager, Server
from scripts.db_commands import ResetDB, PopulateDB, DisplayDB, ExportCourse, CreateDB
from scripts.external_commands import UpdateDatasets, UpdateBlockPy

'''from OpenSSL import SSL
context = SSL.Context(SSL.SSLv23_METHOD)
context.use_privatekey_file('certs/foobar.key')
context.use_certificate_file('certs/foobar.crt')'''
context = (r"certs\server.crt", r"certs\server.key")

manager = Manager(app)

# Server commands context
manager.add_command("secure", Server(ssl_context=context))

# Database Commands
manager.add_command("reset_db", ResetDB())
manager.add_command("create_db", CreateDB())
manager.add_command("populate_db", PopulateDB())
manager.add_command("display_db", DisplayDB())
manager.add_command("export_course", ExportCourse())

manager.add_command("update_datasets", UpdateDatasets())
manager.add_command("update_blockpy", UpdateBlockPy())

if __name__ == "__main__":
    manager.run()
