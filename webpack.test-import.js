const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: [
    "./src/test.js"
  ],
  output: {
    filename: "test-import.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  plugins: [
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }

};
