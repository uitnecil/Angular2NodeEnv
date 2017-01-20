/**
 * Main application file
 */

'use strict';

const cluster = require('cluster');
const logger = require('./services/logger');

if(cluster.isMaster && process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test') {
  const numWorkers = require('os').cpus();
  logger.info(`Master cluster setting up ${numWorkers.length} workers`);
  numWorkers.forEach(() => {
    cluster.fork();
  });

  cluster.on('online', worker => {
    logger.info(`Worker ${worker.process.pid} is online`);
  });

  cluster.on('exit', worker => {
    logger.warn('Worker server died (ID: %d, PID: %d)', worker.id, worker.process.pid);
    logger.info('Starting a new worker');
    cluster.fork();
  });
  
} else {
  
  const express = require('express');
  const http = require('http');
  const config = require('./config/environment');

  if(config.seedDB) {
    require('./config/seed');
  }

  // Setup http server
  const app = express();
  const server = http.createServer(app);
  require('./config/express')(app);
  require('./routes')(app);

  // Start http server
  server.listen(config.port, config.ip, () => {
    logger.info('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });

  // Expose app
  module.exports = app;

  // Expose server
  module.exports.server = server;
}
