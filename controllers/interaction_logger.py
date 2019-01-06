import json
import time
import os
from collections import OrderedDict
import logging
import logging.config

class StructuredEvent(object):
    def __init__(self, user, assignment, event, action, body, timestamp=""):
        self.user = user
        self.assignment = assignment
        self.event = event
        self.action = action
        self.body = body
        self.time = time.time()
        self.timestamp = timestamp

    def __str__(self):
        return json.dumps(OrderedDict([
            ('time', self.time),
            ('user', self.user),
            ('assignment', self.assignment),
            ('event', self.event),
            ('action', self.action),
            ('body', self.body),
            ('timestamp', self.timestamp)
        ]))
    def __repr__(self):
        return self.__str__()

def setup_logging(app):
    ERROR_LOG = app.config['INTERACTIONS_FILE_PATH']
    STUDENT_INTERACTION_LOG = app.config['INTERACTIONS_FILE_PATH']
    LOG_FILENAME = app.config['FEEDBACK_FILE_PATH']
    LOGGING = {
        'version': 1,
        'handlers': {
            'console':{
                'class':'logging.StreamHandler',
                'formatter':'basicFormatter',
                'level': 'WARNING',
            },
            'errorHandler': {
                'class': 'logging.handlers.RotatingFileHandler',
                'filename': ERROR_LOG,
                'level': 'WARNING',
                'formatter': 'basicFormatter'
            }
        },
        'loggers': {
            'Feedbackfull': {
                'level': 'INFO',
                'handlers': ['FeedbackHandler']
            },
            'SystemLogger': {
                'level': 'WARNING',
                'handlers': ['console']
            },
            'StudentInteractions': {
                'level': 'INFO',
                'handlers': ['fileHandler']
            }
        },
        'root': {
            'level': 'WARNING',
            'handlers': ['console', 'errorHandler']
        },
        'formatters': {
            'basicFormatter': {
                'format': '%(name)s[%(levelname)s] - %(message)s'
            },
            'simpleFormatter': {
                'format': '%(message)s'
            }
        }
    }
    if app.config['IS_PRODUCTION']:
        LOGGING['handlers']['fileHandler'] = {
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'filename': STUDENT_INTERACTION_LOG,
            "level": "INFO",
            'when': 'D',
            'formatter': 'simpleFormatter'
        }
    else:
        LOGGING['handlers']['fileHandler'] = {
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': STUDENT_INTERACTION_LOG,
            "level": "INFO",
            'formatter': 'simpleFormatter'
        }
        LOGGING
    LOGGING['handlers']['FeedbackHandler'] = {
        'filename': LOG_FILENAME,
        'formatter': 'simpleFormatter',
        'class': 'logging.handlers.RotatingFileHandler'
    }
        
    logging.config.dictConfig(LOGGING)