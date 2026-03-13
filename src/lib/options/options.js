/**
 *	lib/options/options.js: grunt-nyc-mocha/options/options
 *
 *  Internal implementation of the options handling logic 
 *  for grunt-nyc-mocha.
 *
 *  ⚠ This module is NOT part of the public API surface.
 *  It may change at any time without semver guarantees.
 *
 *  External consumers MUST use `grunt-nyc-mocha/options` instead.
 *
 *  @module grunt-nyc-mocha/options/options
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const utils    = require( "../utils"   );
const defaults = require( "./defaults" );

/**
 *  Defines and returns the set of options that is passed to task 'nyc_mocha'.
 *  TODO: This function was put to this file, because it neither belongs to nyc
 *        nor to mocha options. Maybe it should be moved to a separate file? 
 *        @coding AI: review this and, if really useful, move it to another file.
 *
 *  @return {Object}  nyc_mocha default options
 */
module.exports.getOptions = function getOptions() {
  return {
    cwd:    process.cwd(), // working directory for nyc + mocha runs
    dryrun: false,         // dry run - do nothing just print cmd line
  };
}

/**
 *  Returns grunt task specific options for 'nyc_mocha'.
 *
 *  @param  {grunt.task}  task
 *
 *  @return {Object}  'nyc_mocha' options for grunt task
 */
module.exports.getTaskOptions = function getTaskOptions( task ) {
  // get task options and clone them, to avoid side effects for other tasks.
  const  taskopts      = structuredClone( task.options());

  if ( ! utils.isPlainObject( taskopts )) {
       throw new TypeError( "'task.options()' is expected to return a plain object." );
  }

  // merge task options with default options, shallow merge of clone is fine
  const  options       = Object.assign( module.exports.getOptions(), taskopts );
         options.mocha = Object.assign( defaults.getMochaOptions(),  taskopts.mocha || {});
         options.node  = Object.assign( defaults.getNodeOptions(),   taskopts.node  || {});
         options.nyc   = Object.assign( defaults.getNYCOptions(),    taskopts.nyc   || {});

  const  covopts       = taskopts?.nyc?.coverage ? taskopts.nyc.coverage  : {};
         options.nyc.coverage  = Object.assign( defaults.getNYCCoverageOptions(),  covopts );

  const  smopts        = taskopts?.nyc?.sourcemap ? taskopts.nyc.sourcemap : {};
         options.nyc.sourcemap = Object.assign( defaults.getNYCSourcemapOptions(), smopts  );

  return options
}
