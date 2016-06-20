/**
 * Created by Denis on 6/19/2016.
 */

var path = require('path');
var fs = require('fs');

const webpack = require('webpack');
var ExternalsPlugin = require('webpack-externals-plugin');



module.exports = {

    entry: {
        server: ['webpack/hot/poll.js?1000',path.join(process.cwd(),'src','page-server','index.tsx')]
    },


    output: { // Compile into js/build.js
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/',
        libraryTarget : 'commonjs2',
        pathinfo: true,
        filename: 'server.js',
    },


    devtool: "source-map",
    target: 'node',

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
        modules: [path.join('src','app'),path.join('src','server'), 'node_modules'],
        packageMains: [
            'jsnext:main',
            'main',
        ],
    },

    module: {
        loaders: [

            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExternalsPlugin({
            type: 'commonjs2',
            include: path.join(process.cwd(), 'node_modules'),

        }),
    ],
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    }

};


