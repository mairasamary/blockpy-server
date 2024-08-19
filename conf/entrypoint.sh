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

mkdir -p /run/uwsgi
chown -R www-data:www-data /run/uwsgi
chmod 775 /run/uwsgi

mkdir -p /usr/src/app/static/uploads/
mkdir -p /usr/src/app/static/reports/
mkdir -p /usr/src/app/static/gen/
mkdir -p /usr/src/app/static/.webassets-cache/
mkdir -p /usr/src/app/static/uploads/submission_blocks/
mkdir -p /usr/src/app/logs/
mkdir -p /usr/src/app/backups/
mkdir -p /usr/src/app/instance/
mkdir -p /usr/src/app/instance/certs/
touch /usr/src/app/logs/blockpy_errors.log
touch /usr/src/app/logs/blockpy_events.log
touch /usr/src/app/logs/blockpy_tasks.log
touch /usr/src/app/logs/uwsgi_blockpy.log

python manage.py create_db 
python manage.py db upgrade  
python manage.py populate_db

# Substitute environment variables in the uWSGI configuration
envsubst < /etc/uwsgi/sites/uwsgi.ini.template > /etc/uwsgi/sites/uwsgi.ini

# Start the uWSGI Emperor
exec uwsgi --emperor /etc/uwsgi/sites --uid www-data --gid www-data
