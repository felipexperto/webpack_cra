const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


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
    path: __dirname + '/public/dist',
  },

  // entry: {
  //   main: path.resolve(__dirname, './src/index.js'),
  // },
  // output: {
  //   path: path.resolve(__dirname, 'public/dist'),
  //   publicPath: '/',
  //   filename: 'main.js'
  // },

  plugins: [
    new MiniCSSExtractPlugin(),
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement',
    // }),
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
      use: ['babel-loader']
    }
    ]
  },

  devServer: {
    // contentBase: './',
    contentBase: './public',
    hot: true,
    open: true,
    port: 8080,
    // writeToDisk: true,
  }
};
