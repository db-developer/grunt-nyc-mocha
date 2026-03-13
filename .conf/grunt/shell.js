/**
 *  © 2026, db-developer.
 *  Licensed under the MIT license.
 */

// Note: This is used for running tests only!
module.exports = function ( grunt, options ) {
  return {

    test: {
      command: 'mocha --colors "' + options.TESTDIR + '/**/*.spec.js"',
      options: {
        execOptions: {
          cwd: process.cwd(),
          maxBuffer: 1024 * 1024
        }
      }
    },

    coverage: {
      command: [
        "npx nyc",
        "--reporter=html",
        "--reporter=text-summary",
        "--reporter=lcov",
        `--report-dir=${ options.COVERAGEDIR }`,
        "--exclude=Gruntfile.js",
        "--exclude=.conf/**/*.js",
        "--exclude=src/test/**/*.js",
        "--check-coverage",
        "--lines=100",
        "--statements=100",
        "--functions=100",
        "--branches=100",
        "mocha",
        "--colors",
        "--no-parallel",
        `"${ options.TESTDIR }/**/*.spec.js"`
      ].join(" "),
      options: {
        execOptions: {
          cwd: process.cwd(),
          maxBuffer: 1024 * 1024
        }
      }
    }

  };
};