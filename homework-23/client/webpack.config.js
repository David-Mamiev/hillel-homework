const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ NODE_ENV }) => {
    return {
        mode: NODE_ENV === 'production' ? 'production' : 'development',
        entry: ['./src/script.ts', './src/style.scss'],
        output: {
            path: resolve(__dirname, './dist'),
            filename: '[name].[hash].js',
        },
        module: {
            rules: [
                {
                    test: /\.[tj]s$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ],
                            plugins: ['@babel/plugin-proposal-class-properties'],
                        }
                    }
                },
                {
                    test: /\.s[cs]ss$/,
                    use: [
                        NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
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
}