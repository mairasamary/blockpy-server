from flask import g, request, redirect, url_for, make_response, current_app, render_template
from flask import flash, session, jsonify, abort

import controllers.pylti.common


@current_app.errorhandler(controllers.pylti.common.LTIException)
def handle_lti_exception(error):
    if "Expired timestamp" in str(error):
        return render_template('lti/lti_error.html', message=
            "Your session has expired. Please close this window and try again with a fresh request.\n<br>\nThe exact error was: "+str(error)
        ), 500
    return render_template('lti/lti_error.html', message=
        "LTI Exception: "+str(error)
    ), 500


@current_app.errorhandler(401)
def handle_401(error):
    return render_template('lti/lti_error.html', message=
                           "Unauthorized Error: "+str(error)+"\n<br>Please reload the page and try again."
    ), 401


@current_app.errorhandler(403)
def handle_403(error):
    return render_template('errors/forbidden.html', message=
                           str(error)
    ), 403