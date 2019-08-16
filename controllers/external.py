from datetime import datetime
import os
import json
from typing import Tuple

from slugify import slugify
from natsort import natsorted

from flask import Blueprint, url_for, session, request, jsonify, g, render_template, redirect
from werkzeug.utils import secure_filename

from main import app

from models.models import (db)
from models.log import Log
from models.submission import Submission
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup

from controllers.helpers import (lti, highlight_python_code, normalize_url,
                                 ensure_dirs, ajax_failure, parse_assignment_load, require_request_parameters,
                                 get_course_id, maybe_int, get_user, check_resource_exists, ajax_success,
                                 login_required, require_course_instructor, require_course_grader, maybe_bool)

blueprint_external = Blueprint('external', __name__, url_prefix='/external')

# TODO: download
# TODO: upload