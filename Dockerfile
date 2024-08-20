###########
# BUILDER #
###########

FROM python:3.9-slim  as builder
USER root
RUN apt-get update && apt-get install -y python3-dev \
                      build-essential \
                      libc-dev \
                      netcat-traditional \
                      libpq-dev \
                      gcc

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create virtual environment
RUN python3 -m venv /usr/src/app/venv

# install dependencies
RUN /usr/src/app/venv/bin/pip install --upgrade pip
RUN /usr/src/app/venv/bin/pip install psycopg2
COPY ./requirements.txt .
RUN /usr/src/app/venv/bin/pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt


#########
# FINAL #
#########
FROM python:3.9-slim

# Install uWSGI and other necessary packages
RUN apt-get update && apt-get install -y netcat-traditional  \
    htop uwsgi uwsgi-plugin-python3 gettext-base \
    python3-dev libc-dev libpq-dev gcc postgresql-client

# Copy the virtual environment from the builder stage
COPY --from=builder /usr/src/app/venv /usr/src/app/venv

# Create a list of directories and iterate over it to create them
RUN DIRS="/run/uwsgi \
    /usr/src/app/logs \
    /usr/src/app/static/uploads \
    /usr/src/app/static/reports \
    /usr/src/app/static/gen \
    /usr/src/app/static/.webassets-cache \
    /usr/src/app/static/uploads/submission_blocks \
    /usr/src/app/backups \
    /usr/src/app/instance \
    /usr/src/app/instance/certs" \
    && for dir in $DIRS; do \
        mkdir -p $dir; \
        chown www-data:www-data $dir; \
        chmod 775 $dir; \
    done

# install dependencies
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .
RUN /usr/src/app/venv/bin/pip install psycopg2
RUN /usr/src/app/venv/bin/pip install --no-cache /wheels/*

# BlockPy's server has a few folders that it puts things in. 
# Most of them can be created via the makefile:
# add app
COPY --chown=root:www-data . /usr/src/app

# Copy the uWSGI template and entrypoint script
COPY ./uwsgi.ini.template /etc/uwsgi/sites/uwsgi.ini.template
COPY ./conf/entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# chown all the files to the app user
#RUN chmod -R 775 /usr/src/app
#RUN chown -R www-data:www-data /usr/src/app

# change to the app user
USER www-data

# run entrypoint.sh
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
