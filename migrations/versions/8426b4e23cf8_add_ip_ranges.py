"""Add ip_ranges column to assignment

Revision ID: 8426b4e23cf8
Revises: f6ee6f9df554
Create Date: 2019-08-18 12:10:42.000639

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8426b4e23cf8'
down_revision = 'f6ee6f9df554'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('assignment', sa.Column('ip_ranges', sa.Text))


def downgrade():
    op.drop_column('assignment', 'ip_ranges')
