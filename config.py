"""
Flask Configuration File

Checks for a "secrets.json" file and uses that to add in private settings such as Secret Key.
"""
import os
import json

try:
    with open('settings/secrets.json', 'r') as secret_file:
        secrets = json.load(secret_file)
except IOError:
    print("No secrets file found. Using insecure defaults.")
    secrets = {}

EMAIL_SECRETS = secrets.get("EMAIL", {})
DB_SECRETS = secrets.get("DATABASE", {})

class Config(object):
    IS_PRODUCTION = secrets.get('PRODUCTION', False)
    SHOW_ABOUT_PAGE = secrets.get("SHOW_ABOUT_PAGE", True)
    SITE_VERSION = 5
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    WTF_CSRF_ENABLED = True
    SITE_NAME = secrets.get('SITE_NAME', 'BlockPy Public')
    SYS_ADMINS = secrets.get('SYS_ADMINS', ['Unknown'])
    ROOT_DIRECTORY = os.path.dirname(os.path.abspath(__file__))
    STATIC_DIRECTORY = os.path.join(ROOT_DIRECTORY, 'static')
    UPLOADS_DIR = os.path.join(STATIC_DIRECTORY, 'uploads')
    # TODO: Pretty sure a lot of this logging is messed up - need to fix it.
    BLOCKPY_LOG_DIR = os.path.join(ROOT_DIRECTORY, 'logs')
    ERROR_FILE_PATH = os.path.join(ROOT_DIRECTORY, 'logs', 'blockpy_errors.log')
    EVENTS_FILE_PATH = os.path.join(ROOT_DIRECTORY, 'logs', 'blockpy_events.log')
    # TODO: This is for API access with Canvas - nothing actually needs it yet.
    COURSE_TOKENS = os.path.join(ROOT_DIRECTORY, 'settings/course_tokens.yaml')

    BLOCKPY_SOURCE_DIR = secrets.get('BLOCKPY_SOURCE_DIR')
    CANVAS_DIR = os.path.join(STATIC_DIRECTORY, 'canvas/courses/')
    CORGIS_URL = secrets.get("CORGIS_URL", None)

    MAXIMUM_CODE_SIZE = secrets.get("MAXIMUM_CODE_SIZE", 500 * 1024) # Defaults to 500kb

    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'None'

    # secret key for flask authentication
    SECRET_KEY = secrets.get('FLASK_SECRET_KEY', 'flask-secret-key')

    PYLTI_CONFIG = {
        "consumers": {
            secrets.get("CONSUMER_KEY", "__consumer_key__"): {
                "secret": secrets.get("CONSUMER_KEY_SECRET", "__lti_secret__"),
                "cert": secrets.get("CONSUMER_KEY_PEM_FILE", "consumer_cert.pem"),
                "certkey": secrets.get("CONSUMER_KEY_CERT", "consumer_key.pem")
            }
        }
    }

    # configured for GMAIL
    MAIL_SERVER = EMAIL_SECRETS.get('SERVER')
    MAIL_PORT = EMAIL_SECRETS.get('PORT')
    MAIL_USE_SSL = EMAIL_SECRETS.get('USE_SSL')
    MAIL_USERNAME = EMAIL_SECRETS.get("USERNAME")
    MAIL_PASSWORD = EMAIL_SECRETS.get("PASSWORD")
    SECURITY_EMAIL_SENDER = EMAIL_SECRETS.get("SENDER")

    SECURITY_CONFIRMABLE = True
    SECURITY_REGISTERABLE = True
    SECURITY_RECOVERABLE = True
    SECURITY_CHANGEABLE = True
    SECURITY_URL_PREFIX = '/users'
    SECURITY_POST_LOGIN_VIEW = "/blockpy"
    SECURITY_PASSWORD_HASH = 'bcrypt'
    SECURITY_PASSWORD_SALT = secrets.get('SECURITY_PASSWORD_SALT')
    SECURITY_DEFAULT_REMEMBER_ME = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProductionConfig(Config):
    DEBUG = False
    PORT = 5001
    SQLALCHEMY_DATABASE_URI = (DB_SECRETS.get('ACCESS_URL')
                               .format(username=DB_SECRETS.get('USER'),
                                       password=DB_SECRETS.get('PASS')))


class TestingConfig(Config):
    DEBUG = True
    PORT = 5001
    HOST = 'localhost'
    SITE_ROOT_URL = 'localhost:5001'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///database/main.db'
