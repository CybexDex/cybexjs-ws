const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "index-umd.js"),
  output: {
    path: path.resolve(__dirname),
    filename: "index.js",
    library: "cybexjs-ws",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
  },
  devtool: false,
  resolve: {
    extensions: [
      ".js",
    ],
    modules: [
      "node_modules"
    ]
  },
  target: "node"
};