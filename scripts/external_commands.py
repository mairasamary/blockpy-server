from flask.ext.script import Command, Option
from flask.ext.security.utils import encrypt_password
from models.models import db
from main import app
import datetime
import random
from shutil import copy
import os
import json
from tqdm import tqdm

def ensure_dir(f):
    d = os.path.dirname(f)
    if not os.path.exists(d):
        os.makedirs(d)
    return f

class UpdateDatasets(Command):
    """Retrieves the latest generated files from the datasets folder"""
    
    option_list = (
        Option('--directory', '-d', dest='source_directory', default=app.config['DATASETS_SOURCE_DIR']),
    )
    
    def run(self, source_directory, **kwargs):
        source_files = {
            'libraries.html': 'templates/corgis/',
            '_images/csv.png': 'static/images/',
            '_images/java.png': 'static/images/',
            '_images/json.png': 'static/images/',
            '_images/metrics.png': 'static/images/',
            '_images/python.png': 'static/images/',
            '_images/racket.png': 'static/images/',
            '_images/sql.png': 'static/images/',
            '_images/visualizer.png': 'static/images/',
            '_images/corgis-logo-smaller.png': 'static/images/',
            'python/python.html': 'templates/corgis/python/',
            'visualizer/visualizer.html': 'templates/corgis/visualizer/',
            'java/java.html': 'templates/corgis/java/'
        }
        root_directory = app.config['ROOT_DIRECTORY']
        for source_file, target_directory in tqdm(source_files.items()):
            final_source = os.path.join(source_directory, source_file)
            final_target = os.path.join(root_directory, target_directory)
            ensure_dir(final_target)
            copy(final_source, final_target)
        with open(os.path.join(source_directory, 'index.json')) as index_file:
            index = json.load(index_file)
        for language, language_data in tqdm(index.items()):
            for dataset, dataset_data in language_data['datasets'].items():
                dataset_name = dataset.replace(' ', '_').lower()
                dataset_folder = '{language}/{dataset}/'.format(language=language, dataset=dataset_name)
                final_source = os.path.join(source_directory, dataset_folder)
                final_static_target = os.path.join(root_directory, 'static', 'corgis', dataset_folder)
                final_template_target = os.path.join(root_directory, 'templates', 'corgis', dataset_folder)
                ensure_dir(final_static_target)
                ensure_dir(final_template_target)
                for dataset_file in os.listdir(final_source):
                    complete_filepath = os.path.join(final_source, dataset_file)
                    extension = dataset_file.rsplit('.', 1)[1] if '.' in dataset_file else None
                    if extension in ('html',):
                        copy(complete_filepath, final_template_target)
                    elif extension in ('db', 'jar', 'py', 'png', 'sql', 'json', 'js'):
                        copy(complete_filepath, final_static_target)

class UpdateBlockPy(Command):
    """Retrieves the latest generated files from the blockpy folder"""
    
    option_list = (
        Option('--directory', '-d', dest='source_directory', default=app.config['BLOCKPY_SOURCE_DIR']),
    )
    
    def run(self, source_directory, **kwargs):
        source_files = {
            'dist/blockpy.js': 'blockpy_lib/', 
            'dist/blockpy.css': 'blockpy_lib/',
            'skulpt/dist/skulpt.min.js': 'skulpt/dist/',
            'skulpt/dist/skulpt-stdlib.js': 'skulpt/dist/',
            'blockly/blockly_uncompressed.js': 'blockly/',
            'blockly/blockly_compressed.js': 'blockly/',
            'blockly/blocks_compressed.js': 'blockly/',
            'blockly/python_compressed.js': 'blockly/',
            'blockly/pseudo_compressed.js': 'blockly/',
            'blockly/javascript_compressed.js': 'blockly/',
            'blockly/msg/js/en.js': 'blockly/msg/js/'
        }
        static_directory = app.config['STATIC_DIRECTORY']
        for source_file, target_directory in source_files.items():
            final_source = os.path.join(source_directory, source_file)
            final_target = os.path.join(static_directory, target_directory)
            copy(final_source, final_target)
            