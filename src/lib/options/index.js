/**
 *	lib/options/index.js: grunt-nyc-mocha/options
 *
 *  Public options API of the grunt-nyc-mocha/options module.
 *
 *  This module exposes the stable, documented interface for resolving
 *  task options into arguments for spawned nyc and mocha processes.
 *
 *  Consumers MUST depend on this module path instead of internal
 *  implementation files.
 *
 *  The underlying implementation is intentionally encapsulated and
 *  may change without notice.
 *
 *  @module grunt-nyc-mocha/options
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const STRINGS = require( "./strings" );
const builder = require( "./builder" );
const options = require( "./options" );

/**
 *  Convert grunt task specific options for 'nyc_mocha' to an array of
 *  arguments, which will be used for calling nyc and mocha.
 *
 *  @function module:grunt-nyc-mocha/options.toArgs
 *  @param    {grunt}                   grunt
 *  @param    {grunt.task}              task
 *  @return   TODO
 */
module.exports.toArgs = function toArgs( grunt, task ) {
  if ( ! task ) { throw new Error( STRINGS.ERROR_MSG_MISSING_TASK_I )}
  else return builder.toArgsImpl( grunt, task, options.getTaskOptions( task ));
}
