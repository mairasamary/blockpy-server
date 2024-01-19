import os

import click
from flask.cli import FlaskGroup

from main import create_app


def create_cli_app():
    return create_app()


@click.group(cls=FlaskGroup, create_app=create_cli_app)
@click.option('--debug', is_flag=True, default=True)
def cli(debug):
    """
    Create the `cli` function that will manage all the custom scripts.
    :param debug:
    :return:
    """
    if debug:
        os.environ['FLASK_DEBUG'] = '1'
        os.environ['FLASK_ENV'] = 'development'
        os.environ['cert'] = 'instance/certs/server.crt'
        os.environ['key'] = 'instance/certs/server.key'
