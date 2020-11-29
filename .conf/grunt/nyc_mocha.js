/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */

// Note: This is used for running tests only!
module.exports = function ( grunt, options ) {
  return {
    options: {
      targetlvlopt: true
    },
    target1: {
      src: `./src/test/**/*.spec.js`,
      options: {
        tasklvlopt: true,
        nyc: {

        }
      }
    }
  }
};
