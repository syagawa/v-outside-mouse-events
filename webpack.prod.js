const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: [
    "./index.js"
  ],
  output: {
    filename: "outside-events.js",
    path: path.resolve(__dirname, "./"),
    library: 'v-outside-events',
    libraryExport: "default",
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
      // Vue: 'vue/dist/vue.esm.js'
    }),
  ],
  resolve: {}
};
