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
redo_database:
	python.exe manage.py reset_db
	python.exe manage.py populate_db
	python.exe manage.py add_test_users_db
	python.exe manage.py add_maze_course_db
create_directories:
	mkdir static/uploads/
	mkdir static/gen/
	mkdir static/.webassets-cache/
	mkdir static/uploads/submission_blocks/
	mkdir database/
	mkdir certs/
	mkdir logs/
	mkdir logs/uwsgi/
	mkdir backups/