module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  devServer: {
    contentBase: "./public",
    inline: true
  }
}