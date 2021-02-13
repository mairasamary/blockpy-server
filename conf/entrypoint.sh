#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "postgres started"
fi

mkdir -p /usr/src/app/static/uploads/
mkdir -p /usr/src/app/static/gen/
mkdir -p /usr/src/app/static/.webassets-cache/
mkdir -p /usr/src/app/static/uploads/submission_blocks/
mkdir -p /usr/src/app/database/
mkdir -p /usr/src/app/certs/
mkdir -p /usr/src/app/logs/
mkdir -p /usr/src/app/logs/uwsgi/
mkdir -p /usr/src/app/backups/ 
touch /usr/src/app/logs/blockpy_errors.log
touch /usr/src/app/logs/uwsgi/blockpy.log

python manage.py create_db 
python manage.py db upgrade  
python manage.py populate_db 
# python manage.py add_maze_course_db 
python manage.py add_test_users_db 
exec "$@"
