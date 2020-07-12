const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: [
    "./test.js"
  ],
  output: {
    filename: "test-import.js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "eslint-loader",
        options: {
          fix: false,
          formatter: "stylish" //"codeframe"
        }
      },
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
    new webpack.ProvidePlugin({
      // Vue: ['vue/dist/vue.esm.js', 'default']
      Vue: 'vue/dist/vue.esm.js'
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }

};
