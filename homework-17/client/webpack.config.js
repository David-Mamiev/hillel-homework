const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/script.js', './src/style.scss'],
    output: {
      path: resolve(__dirname,'./dist'),
      filename: 'index.[hash].js',
    },
    module: {
        rules:[
            {
                test: /\.(sa?)?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};