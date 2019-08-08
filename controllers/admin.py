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
from models.models import (db, AssignmentGroupMembership)
from models.user import User
from models.course import Course
from models.role import Role
from models.authentication import Authentication
from models.log import Log
from models.submission import Submission
from models.sample_submission import SampleSubmission
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.assignment_tag import AssignmentTag

admin = Admin(app)


class RegularView(ModelView):
    def is_accessible(self):
        if g.user:
            return g.user.is_admin()
        return False


class UserView(RegularView):
    def _list_roles(view, context, model, name):
        return Markup('<br>\n'.join(('{} in {}'.format(role.name,
                                              Course.query.get(role.course_id).name
                                              if role.course_id is not None else 'all courses')
                            for role in model.roles.all())))

    column_hide_backrefs = False
    column_formatters = {'roles': _list_roles}
    form_excluded_columns = ('password',)
    column_exclude_list = ('password', 'proof')
    column_display_pk = True
    column_searchable_list = ('first_name', 'last_name', 'email')
    column_list = ('id', 'first_name', 'last_name', 'email', 'active', 'roles')


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
        return rows + "</ul>"
    else:
        return "<code>{}</code>".format(item)


def _render_settings(view, context, model, name):
    body = "<div>" + model.type + "</div>"
    body += "<pre>"
    if model.settings:
        try:
            body += _recurse_render_settings(json.loads(model.settings))
        except TypeError:
            body += model.settings
    body += "</pre>"
    return Markup(body)


def _render_code(view, context, model, name):
    if name is None:
        return Markup("<pre></pre>")
    code = getattr(model, name)
    if code is None:
        return Markup("<pre></pre>")
    return Markup("<pre>" + code + "</pre>")


def _render_assignment_settings(view, context, model, name):
    return Markup("<div>" + model.instructions + "</div>" +
                  "<pre>" + model.on_run + "</pre>" +
                  "<pre>" + model.starting_code + "</pre>")


def _render_assignment_type(view, context, model, name):
    return Markup("<div>" + model.type + "</div>")


def _render_version(view, context, model, name):
    body = "<p>S: {}</p>".format(model.version)
    body += "<p>A: {}</p>".format(model.assignment_version)
    return Markup(body)


def _smaller(view, context, model, name):
    return Markup("<small>" + (getattr(model, name) or "") + "</small>")


class RoleView(RegularView):
    column_list = ('id', 'date_created', 'name', 'user_id', 'course_id')
    column_labels = {'id': 'Role ID', 'date_created': 'Created',
                     'name': 'Name', 'user_id': "User", "course_id": "Course"}
    column_searchable_list = ('name', 'course_id', 'user_id')
    column_sortable_list = ('id', 'date_created', 'name', 'user_id', 'course_id')
    column_formatters = {'user_id': _id(User),
                         'course_id': _id(Course)}
    form_columns = ('name', 'user_id', 'course_id')


class AssignmentView(RegularView):
    column_list = ('id', 'date_modified',
                   'owner_id', 'course_id',
                   'name',  # 'type', #'body',
                   'on_run',  # 'starting_code',
                   'settings',
                   # 'visibility', 'disabled',
                   # 'mode',
                   'version'
                   )
    column_searchable_list = ('name', 'instructions')
    form_widget_args = {
        'description': {
            'style': 'width: 25%'
        }
    }
    column_formatters = {'settings': _render_settings,
                         # 'type': _render_assignment_type,
                         'on_run': _render_assignment_settings  # _render_code,
                         # 'starting_code': _render_code
                         }


class AssignmentGroupView(RegularView):
    def _list_assignments(view, context, model, name):
        assignments = model.get_assignments()
        if assignments and assignments[0].type == 'maze':
            return Markup("Levels: "+(', '.join((assignment.name for assignment in assignments))))
        return Markup("<ol>{}</ol>".format(
            '\n'.join(("<li>{}</li>".format(assignment.name) for assignment in assignments))))
    column_list = ('id', 'date_modified',
                   'owner_id', 'course_id',
                   'name', 'position', 'assignments'
                   )
    column_formatters = {'assignments': _list_assignments}


class LogView(RegularView):
    column_list = ('id', 'date_modified',
                   'course_id', 'assignment_id', 'subject_id',
                   'event_type', 'category',
                   'label', 'message'
                   )
    column_formatters = {'message': _render_code}


class AssignmentGroupMembershipView(RegularView):
    column_list = ('id', 'date_modified',
                   'assignment_group_id', 'assignment_id',
                   'position'
                   )
    form_columns = ('assignment_group_id', 'assignment_id', 'position')
    column_formatters = {'user_id': _editable(User, 'id'),
                         'course_id': _editable(Course, 'id')}


class AssignmentTagView(RegularView):
    column_list = ('id', 'date_modified',
                   'owner_id', 'course_id',
                   'name', 'kind', 'description',
                   'version'
                   )
    column_formatters = {'owner_id': _editable(User, 'id'),
                         'course_id': _editable(Course, 'id')}


class SampleSubmissionView(RegularView):
    column_list = ('id', 'date_modified',
                   'owner_id', 'assignment_id', 'version'
                                                'name', 'status', 'code',
                   'correct', 'forked_id', 'forked_version',
                   'version'
                   )
    column_formatters = {'owner_id': _editable(User, 'id'),
                         'assignment_id': _editable(Assignment, 'id')}


class SubmissionView(RegularView):
    column_list = ('id', 'date_modified',
                   'user_id', 'assignment_id', 'course_id',
                   'code', 'correct', 'status',
                   'version', 'url'
                   )
    column_formatters = {'code': _render_code, 'endpoint': _smaller,
                         'version': _render_version}


admin.add_view(UserView(User, db.session, category='Tables'))
admin.add_view(ModelIdView(Course, db.session, category='Tables'))
admin.add_view(SubmissionView(Submission, db.session, category='Tables'))
admin.add_view(SampleSubmissionView(SampleSubmission, db.session, category='Tables'))
admin.add_view(AssignmentView(Assignment, db.session, category='Tables'))
admin.add_view(AssignmentGroupView(AssignmentGroup, db.session, category='Tables'))
admin.add_view(AssignmentGroupMembershipView(AssignmentGroupMembership, db.session, category='Tables'))
admin.add_view(AssignmentTagView(AssignmentTag, db.session, category='Tables'))
admin.add_view(ModelIdView(Authentication, db.session, category='Tables'))
admin.add_view(RoleView(Role, db.session, category='Tables'))
admin.add_view(LogView(Log, db.session, category='Tables'))

# admin.add_view(FileAdmin(app.config['BLOCKPY_LOG_DIR'], base_url='/admin/code_logs/', name='Disk Logs'))
admin.add_view(FileAdmin(app.config['UPLOADS_DIR'], '',
                         name='File Uploads'))


@app.route('/admin/log_check', methods=['GET', 'POST'])
def log_check():
    try:
        def generate():
            root = os.path.join(app.config['ROOT_DIRECTORY'], 'log/student_interactions/')
            all_paths = os.listdir(root)
            total = 0
            for a_file in sorted(all_paths):
                r = subprocess.check_output("wc -l " + root + a_file,
                                            shell=True)
                total += int(r.split()[0])
                yield r
            yield "Total: {}".format(total)

        return Response(generate(), mimetype='text')
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
