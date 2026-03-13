/**
 *	lib/index.js: grunt-nyc-mocha
 *
 *  Public API of the grunt-nyc-mocha package.
 * 
 *  Consumers MUST depend on this module path 
 *  instead of internal implementation files.
 *
 *  The underlying implementation is intentionally 
 *  encapsulated and may change without notice.
 *
 *  @module grunt-nyc-mocha
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const constants = require( "./constants" );
const tasks     = require( "./tasks"     );

/**
 *  Registers the `nyc_mocha` Grunt multi task.
 *
 *  Attaches a multitask to the provided Grunt instance using the
 *  configured task name and description from the constants module.
 *  The registered task delegates execution to `tasks.runTask`
 *  and propagates errors via `grunt.fail.fatal`.
 *
 *  @async
 *  @function module:grunt-nyc-mocha.registerMultiTask
 *  @param    {grunt} grunt - The Grunt instance used to register the multitask.
 *  @returns  {Promise<void>} Resolves once the multitask has been registered.
 */
module.exports.registerMultiTask = function registerMultiTask( grunt ) {
  grunt.registerMultiTask( constants.TASKNAME, constants.TASKDESCRIPTION,
    /* istanbul ignore next */ async function () {
      const task = this;
      try {
        await tasks.runTask( grunt, task );
      } catch ( error ) {
        grunt.log.error( error );
        grunt.fail.fatal( error );
      }
    });
}