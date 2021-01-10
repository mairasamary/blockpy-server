const path = require('path');

module.exports = {
  entry: './app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
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
    codemirror: 'CodeMirror'
  }
};