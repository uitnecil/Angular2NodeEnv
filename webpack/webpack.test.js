/**
 * Created by zoriana.kovacs on 20/12/16.
 */

'use strict';

const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'], exclude: /node_modules/},
            {test: /\.html$/, loader: 'html'},
            {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|webm)([\?]?.*)$/, loader: 'file'},
            {test: /\.scss$/, loaders: ['to-string', 'style', 'css', 'resolve-url', 'sass?sourceMap', 'postcss'], include: [path.resolve(rootDir, 'client')]},
            {test: /\.css$/, loader: 'raw'}
            // ,{test: /\.(webm|mp4)$/, loader: 'file'}

        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules'],
        root: path.resolve(rootDir, 'client')
    },
    tslint: {
        emitErrors: true
    }
};