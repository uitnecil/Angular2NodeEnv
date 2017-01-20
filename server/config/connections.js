
'use strict';

const mongoose = require('mongoose');
const logger = require('../services/logger');
const config = require('./environment/index');

const mongoConnection = mongoose.createConnection(config.mongo.uri, config.mongo.options);

mongoConnection.on('error', err => {
  logger.error(err);
});

module.exports.mongoConnection = mongoConnection;
