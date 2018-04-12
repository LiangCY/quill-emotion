const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    library: 'QuillEmotion',
    libraryTarget: 'umd',
    filename: "quill-emotion.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            "presets": [["es2015", { "modules": false }]],
            "plugins": ["babel-plugin-transform-class-properties"]
          }
        }]
      },
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('quill-emotion.min.css')]
};
