const path = require("path");
const webpack = require("webpack");

let ENV = process.env.NODE_ENV;
console.log(ENV);
const MODE = process.env.APP_MODE;
if(ENV !== "production"){
  ENV = "development";
}

module.exports = {
  mode: ENV,
  entry: [
    "./src/index.js"
  ],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./dist"),
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
      Vue: 'vue/dist/vue.esm.js'
    }),
  ],
  resolve: {}
};

if (ENV !== 'production') {
    module.exports.devtool = 'inline-source-map';
}