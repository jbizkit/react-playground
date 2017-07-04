const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        'entry': './entry.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'ReactPlayground',
        libraryTarget: "this",
        publicPath: 'dist'
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
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev') 
            }
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [
            path.resolve(__dirname, 'dev'), // Mock data and dev pages
        ],
        proxy: {
            '/experiences': {
                target: 'http://localhost:8080/',
                pathRewrite: (path, req) => '/expr.phone.html',
            },
            '/api': {
                target: 'https://localhost/',
                secure: false,
                changeOrigin: true,
            }
        }

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
