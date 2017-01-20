/**
 * Created by zoriana.kovacs on 20/12/16.
 */

'use strict';
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'tmp'),
        port: 3000,
        // proxy: {'**': 'http://localhost:9000'}
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(rootDir, 'tmp'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    }
});