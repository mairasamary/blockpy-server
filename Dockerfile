###########
# BUILDER #
###########

FROM python:3.9-slim  as builder
USER root
RUN apt-get update && apt-get install -y python3-dev \
                      build-essential \
                      libc-dev \
                      netcat

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt


#########
# FINAL #
#########
FROM python:3.9-slim

# Install uWSGI and other necessary packages
RUN apt-get update && apt-get install -y netcat htop uwsgi uwsgi-plugin-python3 gettext-base

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
USER root
RUN useradd --user-group --system --create-home --no-log-init app

# create the appropriate directories
ENV APP_HOME=/usr/src/app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# install dependencies
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .
RUN pip install --no-cache /wheels/*

# BlockPy's server has a few folders that it puts things in. 
# Most of them can be created via the makefile:
# add app
COPY . $APP_HOME

# Copy the uWSGI template and entrypoint script
COPY ./uwsgi.ini.template /etc/uwsgi/sites/uwsgi.ini.template
COPY ./docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

# change to the app user
USER app

# run entrypoint.sh
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
