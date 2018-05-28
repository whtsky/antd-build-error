const path = require("path");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: { filename: "bundle.js", path: path.resolve(__dirname) },
  optimization: {
    minimizer: [
      new ParallelUglifyPlugin({
        uglifyJS: {
          warnings: false,
          toplevel: true,
          output: {
            comments: false,
            ascii_only: true
          }
        }
      })
    ]
  }
};
