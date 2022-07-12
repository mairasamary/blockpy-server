const webpack = require('webpack');
const path = require('path');

module.exports = {
  //cache: true,
  entry: './app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        /*include: [
            path.resolve(__dirname, 'components/'),
            path.resolve(__dirname, 'models/'),
            path.resolve(__dirname, 'utilities/'),
        ],*/
        exclude: [
            /node_modules/
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        //exclude: /node_modules/,
      },
    ],
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
    filepond: 'FilePond'
  }/*,
  plugins: [
      new webpack.debug.ProfilingPlugin()
  ]*/
};