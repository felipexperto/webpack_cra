const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


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
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: 'Hot Module Replacement',
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
    {
      test: /\.(s[ac]|c)ss$/i,
      use: [
        {
          loader: MiniCSSExtractPlugin.loader,
          options: { publicPath: "" },
        },
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }
    ]
  },

  devServer: {
    contentBase: './public',
    hot: true,
    open: true,
    port: 8080,
  }
};
