from flask_assets import Bundle, Environment
from main import app

bundles = {
    'libs_js': Bundle(
        # NaturalSort
        'libs/naturalSort/naturalSort.js',
        # JQuery
        'libs/jquery/jquery-3.4.1.min.js',
        'libs/jquery/jquery-ui.min.js',
        'libs/jquery/jquery.multi-select.js',
        'libs/jquery/jquery.hotkeys.js',
        # Bootstrap
        'libs/bootstrap/popper.min.js',
        'libs/bootstrap/bootstrap.min.js',
        # Knockout
        'libs/knockout/knockout-3.5.0.js',
        # Highlight
        'libs/highlight/highlight.min.js',
        # EasyMDE
        'libs/easymde/easymde.min.js',
        # CodeMirror
        'libs/codemirror/codemirror.js',
        'libs/codemirror/diff.js',
        'libs/codemirror/fullscreen.js',
        'libs/codemirror/markdown.js',
        'libs/codemirror/python.js',
        'libs/codemirror/shell.js',
        'libs/codemirror/yaml-frontmatter.js',
        # D3
        'libs/d3/d3.v5.min.js',
        # Output
        output='gen/libs.js'
    ),

    'blockly_js': Bundle(
        "blockly/blockly_compressed.js",
        "blockly/blocks_compressed.js",
        "blockly/python_compressed.js",
        "blockly/msg/js/en.js",
        output='gen/blockly.js'
    ),

    'skulpt_js': Bundle(
        "libs/skulpt/skulpt.js",
        "libs/skulpt/skulpt-stdlib.js",
        output='gen/skulpt.js'
    ),

    'blockpy_js': Bundle(
        "libs/block_mirror/block_mirror.js",
        #"libs/blockpy/blockpy.js",
        "libs/blockpy/blockpy.js" if app.config["IS_PRODUCTION"] else "../../blockpy-edu/blockpy/dist/blockpy.js",
        output='gen/blockpy.js'
    ),

    'libs_css': Bundle(
        # FontAwesome
        'libs/fontawesome/all.min.css',
        # JQuery
        'libs/jquery/multi-select.css',
        # Bootstrap
        'libs/bootstrap/bootstrap.min.css',
        # Highlight
        'libs/highlight/default.min.css',
        # EasyMDE
        'libs/easymde/easymde.css',
        # CodeMirror
        'libs/codemirror/fullscreen.css',
        'libs/codemirror/codemirror.css',
        # Output
        output='gen/libs.css'
    ),

    'blockpy_css': Bundle(
        "libs/block_mirror/block_mirror.css",
        "libs/blockpy/blockpy.css" if app.config["IS_PRODUCTION"] else "../../blockpy-edu/blockpy/dist/blockpy.css",
        output='gen/blockpy.css'
    ),
        
    'blockly_maze_css': Bundle(
        'blockly-games/common/common.css',
        'blockly-games/maze/style.css',
        output='gen/blockly_maze.css'),

    'blockly_maze_js': Bundle(
        'blockly-games/common/boot.js',
        'blockly-games/common/storage.js',
        output='gen/blockly_maze.js')
}

assets = Environment(app)

assets.register(bundles)