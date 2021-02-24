const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const envVariables = require('dotenv').config().parsed;


module.exports = ({ NODE_ENV }) => {
    return {
        entry: [resolve(__dirname, './src/script.js'),  resolve(__dirname,'./src/style.scss')],
        mode: NODE_ENV === 'production' ? 'production' : 'development',
        module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        node: '10',
                                    },
                                },
                            ],
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.s[ca]ss$/,
                use: [
                    NODE_ENV === 'production' ? MiniCssExtractPlugin.loader
                    : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new HTMLWebpackPlugin({
                template: './src/index.html',
            }),
            new webpack.DefinePlugin({
                process: JSON.stringify({ env: envVariables }),
            })
        ],
    }
};