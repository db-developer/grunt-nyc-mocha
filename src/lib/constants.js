/**
 *	lib/constants.js: grunt-nyc-mocha/constants
 *
 *  @module grunt-nyc-mocha/constants
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  Name of the Grunt task as registered via `grunt.registerTask`.
 *
 *  This constant defines the public task identifier that users invoke
 *  in the Grunt CLI or within their Grunt configuration.
 *
 *  @constant {string}
 *  @default
 */
module.exports.TASKNAME = "nyc_mocha";

/**
 *  Human-readable description of the Grunt task.
 *
 *  Used for CLI help output and documentation to summarize the
 *  functional responsibility of the task.
 *
 *  @constant {string}
 *  @default
 */
module.exports.TASKDESCRIPTION = "Generate coverage reports with nyc from mocha testruns";
