module.exports = {
    entry: './renderer.js',
    output: {
      filename: './public/js/bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    }
  }
  