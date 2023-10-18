const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );

module.exports = {
  entry: "../js/genre.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "genre.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, "public"),
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin( {
      "process.env.GOOGLE_KEY": JSON.stringify(process.env.GOOGLE_KEY),
    } ),
  ],
};