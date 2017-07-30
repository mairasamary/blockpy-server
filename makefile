help:
	sed '/^\t/ d' makefile
update_blockpy:
	python manage.py update_blockpy
update_datasets_dev:
	python manage.py update_datasets
update_datasets:
	python3.6 manage.py update_datasets
check_log:
	less +G /var/log/uwsgi/kennel.log
check_interactions:
	less +G log/student_interactions/student_interactions.log
restart_server:
	sudo systemctl restart uwsgi
