# How to Install BlockPy on RedHat 8

## Creating the Folder
```bash
cd /var
sudo mkdir www
sudo chown ec2-user:ec2-user ./www

git clone https://github.com/mairasamary/blockpy-server
```

## Install Python 3.9 and Configure Virtual Environment

From the /var/www/blockpy-server create a virtual environment:
```bash
sudo dnf install python39

python3.9 -m venv ./venv

source ./venv/bin/activate
```

## Install OS Dependencies

Install:
```bash
sudo dnf install -y gcc python39-devel postgresql-devel python3-devel make
```

Install Required Python Libraries in your Virtual Environment 

From the /var/www/blockpy-server and having your virtual environment activated run:
```bash
pip install -U psycopg2-binary

pip install -U pip setuptools wheel

pip install --no-cache-dir -r requirements.txt

pip install uwsgi
```

## Creating Required Folders

From the /var/www/blockpy-server run:
```bash
make create_directories
```

## Initial Configuration of Blockpy Python Application 

From the /var/www/blockpy-server run to create our configuration.py:
```bash
cp ./instance/configuration.py.template ./instance/configuration.py

Let’s set the following environment variables:
SITE_NAME = "test.mairasamary.com"
SYS_ADMINS = ["mairasamary@gmail.com"]

# Database settings
DATABASE_USER = "blockpy"
DATABASE_PASS = "blockpy123"
DATABASE_URL = "postgresql://{username}:{password}@127.0.0.1/blockpy"
SQLALCHEMY_DATABASE_URI = DATABASE_URL.format(username=DATABASE_USER, password=DATABASE_PASS)
SQLALCHEMY_DATABASE_URI_ALEMBIC = SQLALCHEMY_DATABASE_URI

SECURITY_PASSWORD_SALT = "lksdfslkdfsfklkf324l32n23o23hfwfsdlkfls"

ADMIN_USERNAME = "mairasamary"
ADMIN_FIRST_NAME = "Maira"
ADMIN_LAST_NAME = "Samary"
ADMIN_PASSWORD = "mairasamary123"
ADMIN_EMAIL = "mairasamary@gmail.com"

TASK_DB_PASSWORD = "redis123"

# PREFERRED_LOGIN_URL = "https://udel.instructure.com/"
```

Please note that I have set several passwords with a basic sample password. Change it appropriately:
* DATABASE_PASS - Postgress password.
* ADMIN_PASSWORD - System Admin password
* TASK_DB_PASSWORD - Redis password


## Configuring the Postgress Database

Let’s enable Postgress 13 by running:
```bash
sudo dnf module enable postgresql:13
```

Then install it:
```bash
sudo dnf install -y postgresql-server postgresql-contrib
```

And initialize it by:
```bash
sudo postgresql-setup --initdb
 * Initializing database in '/var/lib/pgsql/data'
 * Initialized, logs are in /var/lib/pgsql/initdb_postgresql.log
```

Take note of where your data and logs live from the output above.

Let’s start it:
```bash
sudo systemctl start postgresql
```

And configure it to start automatically with the system boot:
```bash
sudo systemctl enable postgresql
```
Here is how to check the status of Postgress:
```bash
systemctl status postgresql
```

Secure and Configure Access. Switch to the postgres user and set a password:
```bash
sudo -i -u postgres
psql -c "ALTER USER postgres WITH PASSWORD 'postgress123';"
exit
````

Configure Postgress to require a simple password for connections to the database coming from the host (127.0.0.1). Open the configuration file:
```bash
sudo vi /var/lib/pgsql/data/pg_hba.conf

```
Find the lines:
```
# IPv4 local connections:
host    all             all             127.0.0.1/32            ident
````

Change ident to md5:
```
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
````

Find the lines:
```
# "local" is for Unix domain socket connections only
local   all             all                                     peer
````

Change peer to md5:
```
# "local" is for Unix domain socket connections only
local   all             all                                     md5
```

Now reload the database configuration:
```bash
sudo systemctl reload postgresql
```

Now you can get into a postgress shell with following command:
```bash
psql -U postgres -h 127.0.0.1
````

Use this shell to create the initial database and user in postgress:
```sql
CREATE DATABASE blockpy;

CREATE USER blockpy WITH PASSWORD 'blockpy123';

ALTER ROLE blockpy SET client_encoding TO 'utf8';

ALTER ROLE blockpy SET default_transaction_isolation TO 'read committed';

ALTER ROLE blockpy SET timezone TO 'UTC';

GRANT ALL PRIVILEGES ON DATABASE blockpy TO blockpy;

GRANT ALL ON ALL TABLES IN SCHEMA public TO blockpy;

\q
````

We now to create the databases required by BlockPy in Postgress:
```bash
python manage.py create_db

python manage.py db upgrade

python manage.py populate_db
```

## Preparing socket for Nginx and UWSGI
```bash
Do the following:
# 1) Create the runtime dir if your unit doesn’t already
sudo mkdir -p /var/run/uwsgi

# 2) Add the correct SELinux context for webserver sockets (httpd_var_run_t)
sudo semanage fcontext -a -t httpd_var_run_t '/var/run/uwsgi(/.*)?'

# 3) Apply the labels
sudo restorecon -Rv /var/run/uwsgi

# 4) Give it to nginx
sudo chown nginx:nginx /var/run/uwsgi
```

## Installing Nginx

Let’s start with installing nginx:
```bash
sudo dnf install -y nginx
```

Now let’s start it and configure it to start with the system:
```bash
sudo systemctl start nginx

sudo systemctl enable nginx

sudo systemctl status nginx
```

By now you should be able to open the server at port 80 at http://test.mairasamary.com.

## Configuring Nginx with TLS

First, we need to install certbot so we can configure our server with LEt’s Encrypt:
```bash
sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm

sudo dnf update -y

sudo dnf install -y certbot python3-certbot-nginx
```

Configure nginx so that Certbot can work using our provided nginx.conf file:
```bash
sudo cp /var/www/blockpy-server/conf/nginx/nginx.conf.http /etc/nginx/nginx.conf
```

Let’s test and reload nginx configuration:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

If all is good, let’s run certbot now:
```bash
sudo certbot --nginx -d test.mairasamary.com
```

Answer the prompts and you shall have a new certificate!

Now, let’s configure nginx with the nginx.conf file that will allow it to serve BlockPy application using TLS:
sudo cp /var/www/blockpy-server/conf/nginx/nginx.conf.https /etc/nginx/nginx.conf

Let’s test and reload nginx configuration:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Installing Redis

Execute:
```bash
sudo dnf install redis

Configure redis:
sudo vi /etc/redis.conf
```

Make sure the following settings are there:
```
bind 127.0.0.1
requirepass redis123
supervised systemd
```

Please note that I have set the redis password to be redis123. Pick your own password and make sure that the file instance/configuration.py has the variable TASK_DB_PASSWORD set to the same password.

Configure redis to start with the system and start it:
```bash
sudo systemctl enable redis

sudo systemctl restart redis

sudo systemctl status redis
```

## HUEY Service

Create file /etc/systemd/system/huey.service with sudo and the following contents:
```ini
[Unit]
Description = Huey Service
After = redis.service

[Service]
User = nginx
Group = nginx
WorkingDirectory = /var/www/blockpy-server/
ExecStart = /var/www/blockpy-server/venv/bin/python3.9 manage.py huey
Restart = always

[Install]
WantedBy = multi-user.target
```

Now enable and start it:
```bash
sudo systemctl enable huey.service

sudo systemctl daemon-reload

sudo systemctl restart huey

systemctl status huey.service
```

## UWSGI Setup

You'll need to register your UWSGI script with your server's systemd or equivalent. Here's our /etc/systemd/system/uwsgi.service file:
```ini
[Unit]
Description=uWSGI Emperor service
After=network.target

[Service]
# Run as the nginx user (no root)
User=nginx
Group=nginx

# Have systemd create /run/uwsgi with the right owner/mode
RuntimeDirectory=uwsgi
RuntimeDirectoryMode=0755

# Optional: set the working directory (not required for Emperor, helpful for logs/relative paths)
WorkingDirectory=/etc/uwsgi

# Start the Emperor; add master & clean shutdown flags
ExecStart=/var/www/blockpy-server/venv/bin/uwsgi \
  --emperor /etc/uwsgi/sites \
  --master \
  --die-on-term

# Sensible restart policy
Restart=on-failure
KillSignal=SIGQUIT
Type=notify
NotifyAccess=all

# (Optional) Hardening - uncomment if/when everything works
# NoNewPrivileges=yes
# PrivateTmp=yes
# ProtectSystem=full
# ProtectHome=true
# RestrictAddressFamilies=AF_UNIX AF_INET AF_INET6

[Install]
WantedBy=multi-user.target
```

Copy the blockpy.ini file to /etc/uwsgi/sites/blockpy.ini:
```bash
sudo mkdir -p /etc/uwsgi/sites

cp /var/www/blockpy-server/blockpy.ini /etc/uwsgi/sites/blockpy.ini

sudo chown -R nginx:nginx /etc/uwsgi
```

Fix the permissions to folder /var/www
```bash
sudo chown ec2-user:nginx -R /var/www
```

Now enable and start the service:
```bash
sudo systemctl enable uwsgi.service

sudo systemctl daemon-reload

sudo systemctl restart uwsgi

systemctl status uwsgi.service
```

If the service is not starting, try relabeling the venv bin directory as executable in SELinux:
```bash
# install tools if needed
sudo dnf install -y policycoreutils-python-utils

# Label the venv bin directory as executables
sudo semanage fcontext -a -t bin_t '/var/www/blockpy-server/venv/bin(/.*)?'
sudo restorecon -Rv /var/www/blockpy-server/venv/bin
```
