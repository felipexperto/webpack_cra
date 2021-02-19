const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // solving bug with 'hot reloading' caused by browserslist: 
  // https://youtu.be/TOb1c39m64A?t=2457
  target = "browserslist"; 
}

module.exports = {
  mode: mode,
  target: target,
  devtool: "source-map",

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/',
    filename: 'main.js'
  },

  devServer: {
    contentBase: './public',
    hot: true,
    writeToDisk: true,
  },

  module: {
    rules: [
    {
      test: /\.(s[ac]|c)ss$/i,
      use: [MiniCSSExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
    ]
  },

  plugins: [new MiniCSSExtractPlugin()],
};
