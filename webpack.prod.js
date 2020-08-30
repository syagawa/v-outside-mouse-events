const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: [
    "./src/index.js"
  ],
  output: {
    filename: "outside-events.js",
    path: path.resolve(__dirname, "./dist"),
    library: 'v-outside-events',
    libraryExport: "",
    libraryTarget: "umd",
    globalObject: "this"
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
        exclude: /node_modules\/(?!(core-module)\/).*/,
        loader: "babel-loader",
        options: {
          presets: [[
            "@babel/preset-env",
            {
              targets: {
                chrome: 80,
                ie: 11,
                esmodules: true,
              },
              useBuiltIns: "entry",
              corejs: 3,
            }
          ]]
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Vue: ['vue/dist/vue.esm.js', 'default']
      // Vue: 'vue/dist/vue.esm.js'
    }),
  ],
  resolve: {}
};
