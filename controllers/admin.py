# Import built-ins
import os, sys
import json
from subprocess import call
import subprocess
import csv
import io
import os.path as op

# Import Flask
from flask_admin import Admin, BaseView, expose, form
from flask_admin.contrib.sqla import ModelView
from flask_admin.contrib.fileadmin import FileAdmin
from flask import g, Blueprint, request, url_for, render_template, Response
from jinja2 import Markup

# Import runestone
from main import app
from controllers.helpers import admin_required
from models.models import (User, db, Course, Submission, Assignment,
                           AssignmentGroup, AssignmentGroupMembership, Settings,
                           Authentication, Log, Role, CourseAssignment)

admin = Admin(app)

class RegularView(ModelView):
    def is_accessible(self):
        if g.user:
            return g.user.is_admin()
        return False
        
class UserView(RegularView):
    def _list_roles(view, context, model, name):
        return ', '.join(model.roles.all())
    def _list_thumbnail(view, context, model, name):
        if model.picture is not None and model.picture.startswith('http'):
            return Markup('<img style="width:50px" src="{}">'.format(model.picture))
        else:
            return Markup('<img src="{}">'.format(url_for('static', filename='anon.jpg')))
    column_formatters = { 'picture': _list_thumbnail, 'roles': _list_roles }
    form_excluded_columns = ('password',)
    column_exclude_list = ('password',)
    column_display_pk = True

class ModelIdView(RegularView):
    column_display_pk = True
    
def _editable(table, field):
    def _edit_field(view, context, model, name):
        return table.query.filter(getattr(table, field) == getattr(model, name)).first()
    return _edit_field
    
def _id(table):
    def _edit_id(view, context, model, name):
        return table.query.filter(table.id == getattr(model, name)).first()
    return _edit_id
    
def _recurse_render_settings(item):
    if isinstance(item, list):
        return "[{}]".format(','.join("<code>{}</code>".format(s) for s in item))
    elif isinstance(item, dict):
        rows = "<ul>"
        for name, setting in item.items():
            rows += "<li><b>{name}</b>: ".format(name=name)
            rows += _recurse_render_settings(setting)
            rows += "</li>"
        return rows+"</ul>"
    else:
        return "<code>{}</code>".format(item)
        
    
def _render_settings(view, context, model, name):
    body = "<div>"+model.type+"</div>"
    body += "<div>"+model.mode+"</div>"
    body += "<pre>"
    if model.settings:
        try:
            body += _recurse_render_settings(json.loads(model.settings))
        except TypeError:
            body += model.settings
    body += "</pre>"
    return Markup(body)
    
def _render_code(view, context, model, name):
    return Markup("<pre>"+getattr(model, name)+"</pre>")
    
def _render_assignment_settings(view, context, model, name):
    return Markup("<div>"+model.body+"</div>"+
                  "<pre>"+model.give_feedback+"</pre>"+
                  "<pre>"+model.starting_code+"</pre>")
def _render_assignment_type(view, context, model, name):
    return Markup("<div>"+model.type+"</div>"+
                  "<div>"+model.mode+"</div>")
    
def _smaller(view, context, model, name):
    return Markup("<small>"+getattr(model, name)+"</small>")
    
class RoleView(RegularView):
    column_list = ('id', 'date_created', 'name', 'user_id', 'course_id')
    column_labels = {'id': 'Role ID', 'date_created': 'Created',
                     'name': 'Name', 'user_id': "User", "course_id": "Course"}
    column_searchable_list = ('name', 'course_id', 'user_id')
    column_sortable_list = ('id', 'date_created', 'name', 'user_id', 'course_id')
    column_formatters = { 'user_id': _id(User),
                          'course_id': _id(Course)}
    form_columns = ('name', 'user_id', 'course_id')
class AssignmentView(RegularView):
    column_list = ('id', 'date_modified', 
                   'owner_id', 'course_id', 
                   'name', #'type', #'body', 
                   'give_feedback', #'starting_code', 
                   'settings',
                   #'visibility', 'disabled', 
                   #'mode', 
                   'version'
                   )
    column_searchable_list = ('name', 'body')
    form_widget_args  = {
        'description': {
            'style': 'width: 25%'
        }
    }
    column_formatters = { 'settings': _render_settings, 
                          #'type': _render_assignment_type,
                          'give_feedback': _render_assignment_settings #_render_code,
                          #'starting_code': _render_code
                          }
class AssignmentGroupView(RegularView):
    column_list = ('id', 'date_modified', 
                   'owner_id', 'course_id',
                   'name', 'position'
                   )
class LogView(RegularView):
    column_list = ('id', 'date_modified', 
                   'assignment_id', 'user_id',
                   'event', 'action'
                   )
class AssignmentGroupMembershipView(RegularView):
    column_list = ('id', 'date_modified', 
                   'assignment_group_id', 'assignment_id',
                   'position'
                   )
    form_columns = ('assignment_group_id', 'assignment_id', 'position')
    column_formatters = { 'user_id': _editable(User, 'id'),
                          'course_id': _editable(Course, 'id')}
class SubmissionView(RegularView):
    column_list = ('id', 'date_modified', 
                   'user_id', 'assignment_id', 'course_id',
                   'code', #'status', 
                   'correct', 'version', 'assignment_version', 'url'
                   )
    column_formatters = { 'code': _render_code, 'url': _smaller }

admin.add_view(UserView(User, db.session, category='Tables'))
admin.add_view(ModelIdView(Course, db.session, category='Tables'))
admin.add_view(SubmissionView(Submission, db.session, category='Tables'))
admin.add_view(AssignmentView(Assignment, db.session, category='Tables'))
admin.add_view(ModelIdView(CourseAssignment, db.session, category='Tables'))
admin.add_view(AssignmentGroupView(AssignmentGroup, db.session, category='Tables'))
admin.add_view(AssignmentGroupMembershipView(AssignmentGroupMembership, db.session, category='Tables'))
admin.add_view(ModelIdView(Settings, db.session, category='Tables'))
admin.add_view(ModelIdView(Authentication, db.session, category='Tables'))
admin.add_view(RoleView(Role, db.session, category='Tables'))
admin.add_view(LogView(Log, db.session, category='Tables'))

admin.add_view(FileAdmin(app.config['BLOCKLY_LOG_DIR'], '/code_logs/', name='Log Files'))

@app.route('/admin/log_check', methods=['GET', 'POST'])
def log_check():
    try:
        return subprocess.check_output("cat {dir} | wc -l".format(
                dir=app.config['ROOT_DIRECTORY']+'/log/student_interactions/*',
                shell=True))
    except subprocess.CalledProcessError as cpe:
        return str(cpe)

@app.route('/admin/shutdown', methods=['GET', 'POST'])
@admin_required
def shutdown():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()
    return 'Server shutting down...'