/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */

// Note: This is used for running tests only!
module.exports = function ( grunt, options ) {
  return {
    options: {
      templates: {
        pkgjson:  "package.json",
      }
    },
    build: {
      template:   "pkgjson",
      dest:       `${ options.BUILDDIR }/package.json`,
      merge: {
        scripts:            undefined,
        "peerDependencies": undefined,
        "devDependencies":  undefined
      }
    }
  }
};
