'use strict';
/*eslint no-process-env:0*/

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost:27017/test',
    options: {
      db: {
        safe: true
      }
    }
  },

  // Server port
  port: 1234
};
