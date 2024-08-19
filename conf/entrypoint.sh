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

cd /usr/src/app

# Check if the database is already initialized by looking for an existing table
DB_CHECK=$(psql -U "$SQL_USER" -h "$SQL_HOST" -d "$SQL_NAME" -c "SELECT to_regclass('public.submission_index');")

# If the table does not exist, initialize the database
if [ "$DB_CHECK" = " public.submission_index" ]; then
  echo "Database already initialized"
else
  echo "Initializing the database"
  python /usr/src/app/manage.py create_db
  python /usr/src/app/manage.py db upgrade
  python /usr/src/app/manage.py populate_db
fi

# Substitute environment variables in the uWSGI configuration
envsubst < /etc/uwsgi/sites/uwsgi.ini.template > /etc/uwsgi/sites/uwsgi.ini

# Start the uWSGI Emperor
exec /usr/src/app/venv/bin/uwsgi --emperor /etc/uwsgi/sites --uid www-data --gid www-data
