const path = require('path');

module.exports = {
  cache: {
    type: 'filesystem',
  },
  entry: './app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
            /node_modules/
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
    noParse: /typescript/
  },
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    library: 'frontend',
    libraryTarget: 'var',
    filename: 'frontend.js',
    path: path.resolve(__dirname, '../static/libs/blockpy_server/'),
  },
  externals: {
    knockout: 'ko',
    select2: 'select2',
    "highlight.js": 'hljs',
    jquery: "jQuery",
    "$URL_ROOT": "$URL_ROOT",
    codemirror: 'CodeMirror',
    filepond: 'FilePond',
    browserfs: 'BrowserFS',
    doppiojvm: "Doppio",
    ConTodo: "ConTodo",
    raw_kettle_compiler_dts: "RAW_D_TS_FILES"
  }
};