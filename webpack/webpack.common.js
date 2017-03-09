/**
 * Created by zoriana.kovacs on 21/12/16.
 */

'use strict';
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const autoprefixer = require('autoprefixer');

// const videos = require('../client/assets/videos/recording.webm');

module.exports = {
    entry: {
        app: [path.resolve(rootDir, 'client', 'bootstrap')],
        vendor: [path.resolve(rootDir, 'client', 'vendor')]
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module : {
        loaders: [
            {test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'], exclude: /node_modules/},
            {test: /\.js$/, loader: 'babel',  exclude: /node_modules/, query: {presets: ['es2015']}},
            {test: /\.html$/, loader: 'html'},
            {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/, loader: 'file'},
            {test: /\.scss$/, loaders: ['to-string', 'style', 'css', 'resolve-url', 'sass?sourceMap', 'postcss'], include: [path.resolve(rootDir, 'client')]},
            {test: /\.css$/, loader: 'raw'}
            // {test: /\.webm$/, loader: 'url?limit=10000&mimetype=video/webm'}webm
            // ,{test: /\.(webm)([\?]?.*)$/, loader: 'file'}
            ,{ test: /\.(mp4|webm)$/, loader: 'url-loader?limit=100000000&name=videos/[path][name].[ext]' }
           // ,{ test: /\.html$/, loader: 'html-loader?attrs[]=video:src'},
           //  ,{ test: /\.webm$/, loader: 'file'}
        ]
    },
    postcss: [autoprefixer({browsers: ['last 2 version']})],
    plugins: [
        new ChunkWebpack({
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            title: 'AppName',
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'client', 'index.html')
        })
    ]
};