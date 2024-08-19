#!/bin/sh
set -e

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "postgres started"
fi

# List of directories to create
DIRS="/usr/src/app/logs \
    /usr/src/app/static/uploads \
    /usr/src/app/static/reports \
    /usr/src/app/static/gen \
    /usr/src/app/static/.webassets-cache \
    /usr/src/app/static/uploads/submission_blocks \
    /usr/src/app/backups \
    /usr/src/app/instance \
    /run/uwsgi \
    /usr/src/app/instance/certs"

# Create directories if they don't exist
for dir in $DIRS; do
    mkdir -p $dir
done

touch /usr/src/app/logs/blockpy_errors.log
touch /usr/src/app/logs/blockpy_events.log
touch /usr/src/app/logs/blockpy_tasks.log
touch /usr/src/app/logs/uwsgi_blockpy.log

# Ensure log files have correct ownership and permissions
# chown www-data:www-data /usr/src/app/logs/*.log
# chmod 664 /usr/src/app/logs/*.log

python manage.py create_db 
python manage.py db upgrade  
python manage.py populate_db

# Substitute environment variables in the uWSGI configuration
envsubst < /etc/uwsgi/sites/uwsgi.ini.template > /etc/uwsgi/sites/uwsgi.ini

# Start the uWSGI Emperor
exec uwsgi --emperor /etc/uwsgi/sites --uid www-data --gid www-data
