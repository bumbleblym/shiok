export default {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    inline: true
  }
};
