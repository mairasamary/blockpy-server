"""Adding Invite and Log Index

Revision ID: c56a36fb0a55
Revises: 39829a4d3a94
Create Date: 2020-12-08 14:18:01.211627

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c56a36fb0a55'
down_revision = '39829a4d3a94'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('invite',
                    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
                    sa.Column('date_created', sa.DateTime(), nullable=True),
                    sa.Column('date_modified', sa.DateTime(), nullable=True),
                    sa.Column('url', sa.String(length=80), nullable=True),
                    sa.Column('user_id', sa.Integer(), nullable=True),
                    sa.Column('course_id', sa.Integer(), nullable=True),
                    sa.Column('role', sa.String(length=80), nullable=True),
                    sa.Column('expires', sa.DateTime(), nullable=True),
                    sa.ForeignKeyConstraint(('course_id',), ['course.id'], ),
                    sa.ForeignKeyConstraint(('user_id',), ['user.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_index('log_index', 'log', ['course_id', 'assignment_id', 'subject_id'], unique=False)


def downgrade():
    op.drop_constraint('url_course_index', 'assignment', type_='unique')
    op.drop_table('invite')
