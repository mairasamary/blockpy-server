from flask_script import Command, Option
from flask_security.utils import encrypt_password
from models.models import db
from main import app
import datetime
import random
from shutil import copy
import os
import json

try:
    from tqdm import tqdm
except ImportError:
    tqdm = list

import shutil


def copytree(src, dst, symlinks=False, ignore=None):
    if not os.path.exists(dst):
        os.makedirs(dst)
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            copytree(s, d, symlinks, ignore)
        else:
            if not os.path.exists(d) or os.stat(s).st_mtime - os.stat(d).st_mtime > 1:
                shutil.copy2(s, d)


def ensure_dir(f):
    d = os.path.dirname(f)
    if not os.path.exists(d):
        os.makedirs(d)
    return f


class UpdateBlockPy(Command):
    """Retrieves the latest generated files from the blockpy folder"""

    option_list = (
        Option('--directory', '-d', dest='source_directory', default=app.config['BLOCKPY_SOURCE_DIR']),
    )

    def run(self, source_directory, **kwargs):
        source_files = {
            'dist/blockpy.js': 'libs/blockpy/',
            'dist/blockpy.css': 'libs/blockpy/',
            '../blockmirror/dist/block_mirror.js': 'libs/block_mirror/',
            '../blockmirror/dist/block_mirror.css': 'libs/block_mirror/',
            '../skulpt/dist/skulpt.js': 'libs/skulpt/',
            '../skulpt/dist/skulpt-stdlib.js': 'libs/skulpt/',
            '../pygame4skulpt/dist/pygameskulpt.js': 'libs/pygame4skulpt/',
            '../../pedal-edu/pedal/dist-js/skulpt-pedal.js': 'libs/pedal/',
            '../../pedal-edu/curriculum-ctvt/dist-js/skulpt-curriculum-ctvt.js': 'libs/pedal/',
            '../../pedal-edu/curriculum-sneks/dist-js/skulpt-curriculum-sneks.js': 'libs/pedal/',
            '../blockly/blockly_uncompressed.js': 'blockly/',
            '../blockly/blockly_compressed.js': 'blockly/',
            '../blockly/blocks_compressed.js': 'blockly/',
            '../blockly/python_compressed.js': 'blockly/',
            '../blockly/msg/js/en.js': 'blockly/msg/js/'
        }
        static_directory = app.config['STATIC_DIRECTORY']
        for source_file, target_directory in tqdm(source_files.items()):
            final_source = os.path.join(source_directory, source_file)
            final_target = os.path.join(static_directory, target_directory)
            copy(final_source, final_target)
