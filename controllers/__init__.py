from controllers.setup import registry, rebar, generator

import controllers.auth
from controllers.admin import setup_admin
from controllers.security import setup_security
from controllers.assets import setup_assets


def create_blueprints(app):
    """
    Register all the routes of our project here.

    :param app: The main application context
    :return:
    """
    setup_assets(app)
    setup_security(app)
    import controllers.endpoints
    setup_admin(app)
    rebar.init_app(app)
