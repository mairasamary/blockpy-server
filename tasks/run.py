from flask_script import Command, Option
from flask_security.utils import hash_password
from models.models import db
from main import app
import datetime
import random
import os
import json
from pprint import pprint
from main import app, huey


class HueyWorker(Command):
    option_list = (
    )

    def run(self, **kwargs):
        consumer = huey.create_consumer()
        consumer.run()
