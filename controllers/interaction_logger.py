import logging
import logging.config

def setup_logging(app):
    error_log_path = app.config['ERROR_FILE_PATH']
    event_log_path = app.config['EVENTS_FILE_PATH']
    logging_configuration = {
        'version': 1,
        'handlers': {
            # Set up console logging for dev
            'console': {
                'class': 'logging.StreamHandler',
                'formatter': 'basicFormatter',
                'level': 'DEBUG',
            },
            # Things have gone wrong!
            'errorHandler': {
                'class': 'logging.handlers.RotatingFileHandler',
                'filename': error_log_path,
                'level': 'WARNING',
                'formatter': 'basicFormatter'
            },
            # Just logging some events from users (redundant to database)
            'eventHandler': {
                'class': 'logging.handlers.RotatingFileHandler',
                'filename': event_log_path,
                "level": "INFO",
                'formatter': 'simpleFormatter'
            }
        },
        'loggers': {
            'SystemLogger': {
                'level': 'WARNING',
                'handlers': ['console']
            },
            'Events': {
                'level': 'INFO',
                'handlers': ['eventHandler']
            },
            #'pylti': {
            #    'level': 'DEBUG',
            #    'handlers': []
            #}
        },
        'root': {
            'level': 'WARNING',
            'handlers': ['console', 'errorHandler']
        },
        'formatters': {
            'basicFormatter': {
                'format': '%(asctime)s [%(levelname)s] - %(filename)s:%(funcName)s:%(lineno)d - %(message)s'
            },
            'simpleFormatter': {
                'format': '%(message)s'
            }
        }
    }
    if app.config['IS_PRODUCTION']:
        logging_configuration['handlers']['fileHandler']['class'] = 'logging.handlers.TimedRotatingFileHandler'
        logging_configuration['handlers']['fileHandler']['when'] = 'D'

    logging.config.dictConfig(logging_configuration)
