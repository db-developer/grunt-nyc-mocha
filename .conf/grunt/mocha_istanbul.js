/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */

module.exports = function ( grunt, options ) {
  return {
    coverage: {
      src: `${ options.TESTDIR }/**/*.spec.js`,
      options: {
        "report-formats": "html",
        print: "summary",
        coverageFolder: `${ options.COVERAGEDIR }`,
        check: {
          lines:      100,
          statements: 100,
          functions:  100,
          branches:   100
        }
      }
    }
  }
};
