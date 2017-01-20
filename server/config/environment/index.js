'use strict';

const path = require('path');
const _ = require('lodash');

// All configurations will extend these options
// ============================================
const all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Client path
  clientRoot: path.resolve(__dirname, '../../../client/'),

  // Browser-sync port
  // browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: true,

  // Secret for session, make it an environment variable in production
  secrets: {
    session: 'app-secret'
  },
  //MongoDB connection
  mongo: {
    uri: 'mongodb://localhost:27017/dev',
    options: {
      db: {
        safe: true
      }
    }
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require(`./${process.env.NODE_ENV}.js`) || {});
