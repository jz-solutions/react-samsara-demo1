var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    //'./src',
    //'webpack-dev-server/main?http://localhost:8080'
    //'./src/samsara.css'
  ],
  output: {
    publicPath: '/',
    filename: 'main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "examples"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          //plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};