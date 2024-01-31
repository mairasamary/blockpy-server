# Built-ins
import json
import os

# Flask
from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension
from flask_jwt_extended import JWTManager


def create_app(test_config=None, instance_config="configuration.py") -> Flask:
    """
    Per the App Factory pattern, this creates a new instance of the BlockPy app.
    :param test_config: 'testing' for unit tests, or a specific config object.
    :return: a new instance of the BlockPy app.
    """
    # create and configure the app
    app = Flask('blockpy', instance_relative_config=True, static_folder='static')
                #static_url_path='/static')
    # load the test config if passed in
    if test_config is not None:
        if test_config == 'testing':
            app.config.from_object('config.TestConfig')
        else:
            app.config.from_mapping(test_config)
    elif app.config['DEBUG']:
        app.config.from_object('config.DevelopmentConfig')
    else:
        print("Loading Production!")
        app.config.from_object('config.ProductionConfig')
    app.config.from_pyfile(instance_config)

    # Additional settings being overridden here
    app.config['TEMPLATES_AUTO_RELOAD'] = True

    # Turn on profiler if necessary
    if app.config['PROFILE_RUNTIME']:
        from werkzeug.middleware.profiler import ProfilerMiddleware
        app.wsgi_app = ProfilerMiddleware(app.wsgi_app, stream=None,
                                          profile_dir=app.config['TIMING_LOG_DIR'],
                                          filename_format='{method}.{path}.{elapsed:.0f}ms.{time:.0f}.pstat')

    # Ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Load up the database
    # TODO: Finish init_database
    from models import init_database
    init_database(app)

    from tasks.setup import setup_tasks
    huey = setup_tasks(app.config['TASK_QUEUE_STYLE'],
                       app.config['TASK_DB_URI'],
                       app.config['TASK_DB_SETTINGS'])
    app.huey = huey

    # Turn on Debug Toolbar
    DebugToolbarExtension(app)

    # Set Up JWT
    jwt = JWTManager(app)

    # Email
    from flask_mail import Mail
    mail = Mail(app)

    # Set up all the endpoints
    with app.app_context():

        # Modify Jinja2
        from controllers.jinja_filters import setup_jinja_filters
        setup_jinja_filters(app)

        # Logging
        from controllers.interaction_logger import setup_logging
        setup_logging(app)

        # Load up all the controllers
        from controllers import create_blueprints
        create_blueprints(app)
        print("Loaded all endpoints successfully!")

    return app
