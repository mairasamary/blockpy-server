# Blockpy Server 

Flask-based server for managing the BlockPy LTI app. This is a fork of the main Kennel application for the Think.cs.vt.edu project. Kennel has a number of other components, but this app trims it down to just BlockPy (and the Maze game). It maintains the architectural components required (e.g., user registration, LTI). 

First, you'll need to create a `secrets.json` file.

    {
        "FLASK_SECRET_KEY": "MAKE UP A SECRET KEY",
        "EMAIL_USERNAME": "give the username for your email host",
        "EMAIL_PASSWORD": "give the password for your email host",
        "CONSUMER_KEY_CERT": "/path to .crt file",
        "CONSUMER_KEY_PEM_FILE": "/path to .pem file",
        "CONSUMER_KEY": "MAKE UP A CONSUMER KEY",
        "CONSUMER_KEY_SECRET": "MAKE UP A CONSUMER SECRET",
        "LOCAL_SSL_CERT": "certs/server.crt",
        "LOCAL_SSL_KEY": "certs/server.key",
        "SECURITY_PASSWORD_SALT": "MAKE UP A GOOD SALT",
        "BLOCKPY_SOURCE_DIR": "/path to the blockpy/ source folder",
        "DATASETS_SOURCE_DIR": "/path to the datasets/ source folder",
        "PRODUCTION": false,
        "DB_USER": "username for the database, if not sqlite",
        "DB_PASS": "password for the database, if not sqlite",
        # Use {username} and {password} in the DB_ACCESS_URL so the proper
        # string will be interpolated with .format()
        "DB_ACCESS_URL": "Full URL for SQLAlchemy",
        "SYS_ADMINS": ["your_email@whatever.com"],
        "SITE_NAME": "BlockPy @ Wherever",
        "ADMIN": {
            "first_name": "Your first name",
            "last_name": "Your last name",
            "password": "your password",
            "email": "your email address"
        }
    }
    
Next, edit the appropriate settings in the `config.py` file. Most of the settings will probably work for you, but you should review them all and particularly update:

* Email server settings
* Debug/Test flags for Flask (True if you're just locally developing)
    
You need to create some folders. I know it's weird that we have two log folders - that needs to be fixed. There's a makefile command (`make create_directories`) that will create the following:
    
* `static/uploads/` - This is where we put user uploaded files.
* `static/uploads/submission_blocks/` - Images of students' block get uploaded here.
* `logs/` - This is where we store student code files (every edit creates a new file).
* `log/` - This is where we store the single-file logs for tracking errors and events.
* `database/` - This is where we store the SQLITE database.
* `certs/` - This is where I store any local https certificates for local dev.
* `backups/` - If you run the backup commands, data will be dumped here.

To run the server, you'll want to start by initizalizing the database:

    python manage.py reset_db
    
And you can install some test data too.

    python manage.py populate_db
    
Apparently this creates an admin user named "Austin Cory Bart", so that's gotta be fixed. Sigh. But, you can always visualize the database schema if you have graphviz installed.

    python manage.py display_db
    
You'll want to set up a local SSL certificate. You should be able to get some instructions from [CSSPlice](http://splice.cs.vt.edu/lti/building-lti-tool#ssl).
    
Anyway, you can start the server with a local secure connection with the following:

    python manage.py secure
    
Now you can open your browser and navigate to "https://localhost:5000" and start interacting with the environment.

If you don't want to deal with SSL stuff, you can also start using it without setting up a secure local connection. But don't do this in production.

    python manage.py insecure

Installing on a Server
======================

You might also want to run this on a server. You'll need to set up NGinx or Apache, and then follow the usual instructions for installing a new Flask app. Make sure it supports HTTPS or you won't be able to interact with an LMS like Canvas or Moodle.
