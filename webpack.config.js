const path = require("path");

let ENV = process.env.NODE_ENV;
console.log(ENV);
const MODE = process.env.APP_MODE;
if(ENV !== "production"){
  ENV = "development";
}

module.exports = {
  mode: ENV,
  entry: [
    // "core-js/modules/es6.promise",
    // "core-js/modules/es6.array.iterator",
    "./index.js"
  ],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./"),
    library: 'suapp',
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
  plugins: [],
  resolve: {}
};

if (ENV !== 'production') {
    module.exports.devtool = 'inline-source-map';
}