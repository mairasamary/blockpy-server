help:
	sed '/^\t/ d' makefile
update_blockpy:
	python manage.py update_blockpy
update_datasets_dev:
	python manage.py update_datasets
update_datasets:
	py3 manage.py update_datasets
check_log:
	less +G /var/log/uwsgi/kennel.log
check_interactions:
	less +G log/student_interactions/student_interactions.log
restart_server:
	sudo systemctl restart uwsgi
create_directories:
	mkdir static/uploads/
	mkdir static/gen/
	mkdir static/.webassets-cache/
	mkdir static/uploads/submission_blocks/
	mkdir logs/
	mkdir log/
	mkdir database/
	mkdir certs/
	mkdir backups/