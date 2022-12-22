from flask_script import Command, Option
from flask_security.utils import hash_password
from models.models import db
from main import app, celery
import datetime
import random
import os
import json
from pprint import pprint
from celery.bin import worker


class CeleryWorker(Command):
    option_list = (
    )

    def run(self, **kwargs):
        celery.worker_main(['worker', '--loglevel=DEBUG'])


class CeleryFlower(Command):
    option_list = ()

    def run(self, **kwargs):
        cmd = f"celery -A main.celery --broker={app.config['CELERY_BROKER_URL']} flower --address=127.0.0.1 --port=5566"
        os.system(cmd)
