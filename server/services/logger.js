// Logging levels: error[0], warn[1], info[2], verbose[3], debug[4]
// To dynamically change the log level of a transport use =>
// ex.: logger.transports.file.level = 'verbose'
// ex.: logger.transports.console.level = 'debug'

const winston = require('winston');
const path = require('path');
const fs = require('fs');

const dir = path.normalize(`${__dirname}/../log`);

/* eslint-disable no-sync */
if(!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
/* eslint-enable no-sync */

winston.emitErrs = true;

const logger = new winston.Logger({
  transports: [
    // Level of full application log file transport: error[0], warn[1], info[2]
    new winston.transports.File({
      name: 'info-file',
      level: 'debug',
      filename: path.normalize(`${dir}/application.log`),
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    }),
    //Error log file transport
    new winston.transports.File({
      name: 'error-file',
      level: 'error',
      filename: path.normalize(`${dir}/error.log`),
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: true,
      maxsize: 1000000, //1MB
      maxFiles: 5,
      colorize: false
    }),
    // Log level of console transport: error[0], warn[1], info[2], verbose[3], debug[4]
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write(message) {
    logger.info(message);
  }
};
