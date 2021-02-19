const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    writeToDisk: true,
    contentBase: './public',
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
    ]
  },
};
