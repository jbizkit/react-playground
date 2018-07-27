const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { GenerateSW } = require('workbox-webpack-plugin');

const config = {
    entry: {
        'entry': './entry.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        library: 'ReactPlayground',
        libraryTarget: "this",
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', // backup loader when not building .css file
                    use: ['css-loader', 'postcss-loader', 'sass-loader'] // loaders to preprocess CSS
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        }),
        new GenerateSW({
            include: [/\.js$/, /\.css$/, /\.html$/],
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [
            path.resolve(__dirname, 'dev'), // Mock data and dev pages
        ]
    }
};

module.exports = (env) => {
    if (env && env.watch) {
        config.watch = true;
        config.watchOptions = {
            poll: 1000
        };
    }
    return config;
};
