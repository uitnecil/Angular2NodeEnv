/**
 * Express configuration
 */

'use strict';

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const config = require('./environment');
const logger = require('../services/logger');

module.exports = function(app) {
  const env = app.get('env');
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.set('appPath', path.join(config.root, 'client'));

  if(env === 'production' || env === 'staging') {
    app.use(express.static(app.get('appPath')));
    app.use(require('morgan')('short', { stream: logger.stream }));
  }

  if(env === 'development' || env === 'test') {
    const errorHandler = require('errorhandler');
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(app.get('appPath')));
    app.use(require('morgan')('dev', { stream: logger.stream }));
    app.use(errorHandler()); // Error handler - has to be last
  }
};
