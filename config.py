"""
Flask Configuration File

Checks for a "secrets.json" file and uses that to add in private settings such as Secret Key.
"""
import os
import json

try:
    with open('secrets.json', 'r') as secret_file:
        secrets = json.load(secret_file)
except IOError:
    print("No secrets file found. Using insecure defaults.")
    secrets = {}

class Config(object):
    IS_PRODUCTION = secrets.get('PRODUCTION', False)
    SITE_VERSION = 4
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    WTF_CSRF_ENABLED = True
    SITE_NAME = secrets.get('SITE_NAME', 'BlockPy Public')
    SYS_ADMINS = secrets.get('SYS_ADMINS', ['Unknown'])
    ROOT_DIRECTORY = os.path.dirname(os.path.abspath(__file__))
    STATIC_DIRECTORY = os.path.join(ROOT_DIRECTORY, 'static')
    BLOCKPY_LOG_DIR = os.path.join(ROOT_DIRECTORY, 'logs')
    UPLOADS_DIR = os.path.join(STATIC_DIRECTORY, 'uploads')
    # TODO: Pretty sure a lot of this logging is messed up - need to fix it.
    ERROR_FILE_PATH = os.path.join(ROOT_DIRECTORY, 'log', 'blockpy_errors.log')
    INTERACTIONS_FILE_PATH = os.path.join(ROOT_DIRECTORY, 'log', 'student_interactions.log')
    FEEDBACK_FILE_PATH = os.path.join(ROOT_DIRECTORY, 'log', 'feedbackfull.log')
    # TODO: This is for API access with Canvas - nothing actually needs it yet.
    COURSE_TOKENS = os.path.join(ROOT_DIRECTORY, 'settings/course_tokens.yaml')
    
    BLOCKPY_SOURCE_DIR = secrets.get('BLOCKPY_SOURCE_DIR')
    DATASETS_SOURCE_DIR = secrets.get('DATASETS_SOURCE_DIR')
    CANVAS_DIR = os.path.join(STATIC_DIRECTORY, 'canvas/courses/')
    
    # secret key for flask authentication
    SECRET_KEY = secrets.get('FLASK_SECRET_KEY', 'flask-secret-key')
    
    PYLTI_CONFIG = {
        "consumers": {
            secrets.get("CONSUMER_KEY", "__consumer_key__"): {
                "secret": secrets.get("CONSUMER_KEY_SECRET", "__lti_secret__"),
                "cert": secrets.get("CONSUMER_KEY_PEM_FILE", "consumer_key.pem")
            }
        }
    }
    
    #configured for GMAIL
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 465
    MAIL_USE_SSL = True
    MAIL_USERNAME = secrets.get("EMAIL_USERNAME")
    MAIL_PASSWORD = secrets.get("EMAIL_PASSWORD")
    DEFAULT_MAIL_SENDER = secrets.get("EMAIL_SENDER")
    
    SECURITY_CONFIRMABLE = True
    SECURITY_REGISTERABLE = True
    SECURITY_RECOVERABLE = True
    SECURITY_CHANGEABLE = True
    SECURITY_PASSWORD_HASH='bcrypt'
    SECURITY_PASSWORD_SALT=secrets.get('SECURITY_PASSWORD_SALT')
    SECURITY_DEFAULT_REMEMBER_ME = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class ProductionConfig(Config):
    DEBUG = False
    PORT = 5001
    SQLALCHEMY_DATABASE_URI = (secrets.get('DB_ACCESS_URL')
                                      .format(username=secrets.get('DB_USER'), 
                                              password=secrets.get('DB_PASS')))
    
class TestingConfig(Config):
    DEBUG = True
    PORT = 5001
    HOST = 'localhost'
    SITE_ROOT_URL = 'localhost:5001'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///database/main.db'
