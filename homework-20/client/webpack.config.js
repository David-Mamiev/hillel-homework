const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/script.js', './src/style.css'],
    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],   
}