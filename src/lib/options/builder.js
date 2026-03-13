/**
 *	lib/options/builder.js: grunt-nyc-mocha/options/builder
 *
 *  Internal implementation of the argument building logic
 *  for grunt-nyc-mocha.
 *
 *  ⚠ This module is NOT part of the public API surface.
 *  It may change at any time without semver guarantees.
 *
 *  External consumers MUST use `grunt-nyc-mocha/options` instead.
 *
 *  @module grunt-nyc-mocha/options/builder
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const nodepath = require( "node:path" );
const STRINGS  = require( "./strings" );
const utils    = require( "../utils"  );

/**
 *  Converts a set of Node.js options into a flat array of CLI arguments.
 *
 *  This function is intended for internal use only and is exported solely
 *  for unit testing during the build process. It assumes that its caller
 *  has already ensured the presence of required parameters; additional
 *  validation of the parameter content may be performed here in some cases.
 *
 *  @todo   Consider removing option mutation once all usages are verified
 *          to work without automatic defaulting of output paths.
 *
 *  @param   {grunt}    grunt   - The active Grunt instance, used for optional logging.
 *  @param   {object}   options - An object-literal containing Node.js options to convert.
 *  @returns {string[]} A flat array of CLI arguments suitable for spawning a Node process.
 */
module.exports.nodeOptionsToArgs = function nodeOptionsToArgs( grunt, options ) {
  const args = [ ];

  if ( ! options.node.exec ) {
       // See "todo" in function description
       options.node.exec = process.execPath;
  }

  if ( options.node.options ) {
       utils.forEachOption( grunt, options.node.options, STRINGS.OPTIONS_NODE_OPTIONS, function( option ) {
         args.push( option );
       });
  }

  return args;
}

/**
 *  Converts NYC options into a flat array of CLI arguments for spawning processes.
 *
 *  This function is internal and exported only for unit testing during the build.
 *  It assumes that its caller has already ensured the presence of required 
 *  parameters; additional validation of the parameter content may be performed
 *  here in some cases.
 *
 *  @todo Currently emits "--option true" for Boolean values for historical reasons.
 *        In the future, this should be removed once all usages are verified to
 *        work with either plain "--option" or "--option=true|false".
 *
 *  @param   {grunt}    grunt   - The active Grunt instance, used for optional logging.
 *  @param   {object}   options - An object containing NYC CLI options to convert.
 *  @returns {string[]} A flat array of CLI arguments suitable for spawning NYC.
 */
module.exports.nycOptionsToArgs = function nycOptionsToArgs(grunt, options) {
  const args = [ ];

  /*
   *  NYC:  Set path to nyc
   */
  if ( ! options.nyc.exec ) {
       options.nyc.exec = utils.getNYCPath();
  }
  args.push( options.nyc.exec );

  /*
   *  NYC:  Set current working directory --cwd
   */
  if ( ! options.cwd ) {
       options.cwd = process.cwd();
  }
  args.push( STRINGS.OPTIONS_CWD, options.cwd );

  /*
   *  NYC:  Set directory for temporary files --temp-dir
   */
  if ( options.nyc.temp ) {
       args.push( STRINGS.OPTIONS_TEMP_DIR, nodepath.resolve( options.cwd, options.nyc.temp ));
  }

  /*
   *  NYC:  Set requires --require, -i
   */
  if ( options.nyc.requires ) {
       utils.forEachOption( grunt, options.nyc.requires, STRINGS.OPTIONS_NYC_REQUIRES, function( script ) {
         args.push( STRINGS.OPTIONS_REQUIRE, script );
       });
  }

  /*
   *  NYC:  Set excludes --exclude, -x
   */
  if ( options.nyc.excludes ) {
       utils.forEachOption( grunt, options.nyc.excludes, STRINGS.OPTIONS_NYC_EXCLUDES, function( exclude ) {
         args.push( STRINGS.OPTIONS_EXCLUDE, exclude );
       });
  }

  /*
   *  NYC:  Set includes --include, -i
   */
  if ( options.nyc.includes ) {
       utils.forEachOption( grunt, options.nyc.includes, STRINGS.OPTIONS_NYC_INCLUDES, function( include ) {
         args.push( STRINGS.OPTIONS_INCLUDE, include );
       });
  }

  /*
   *  NYC:  Set includes --extension, -e
   */
  if ( options.nyc.extensions ) {
       utils.forEachOption( grunt, options.nyc.extensions, STRINGS.OPTIONS_NYC_EXTENSIONS, function( extension ) {
         args.push( STRINGS.OPTIONS_EXTENSION, extension );
       });
  }

  /*
   *  NYC:  Set coverage directory --report-dir
   */
  if ( options.nyc.coverage.dir ) {
       args.push( STRINGS.OPTIONS_REPORT_DIR, nodepath.resolve( options.cwd, options.nyc.coverage.dir ));
  }

  /*
   *  NYC:  Set includes --reporter, -r
   */
  if ( options.nyc.coverage.reporter ) {
       utils.forEachOption( grunt, options.nyc.coverage.reporter, STRINGS.OPTIONS_NYC_COVERAGE_REPORTER, function( reporter ) {
         args.push( STRINGS.OPTIONS_REPORTER, reporter );
       });
  }

  /*
   *  NYC:  Set coverage check values
   */
  if ( options.nyc.coverage.check ) {
       args.push( STRINGS.OPTIONS_CHECK_COVERAGE, STRINGS.TRUE );
       if ( options.nyc.coverage.perfile ) {
            args.push( STRINGS.OPTIONS_PER_FILE, STRINGS.TRUE );
       }
       if ( options.nyc.coverage.branches ) {
            args.push( STRINGS.OPTIONS_BRANCHES, options.nyc.coverage.branches );
       }
       if ( options.nyc.coverage.functions ) {
            args.push( STRINGS.OPTIONS_FUNCTIONS, options.nyc.coverage.functions );
       }
       if ( options.nyc.coverage.lines ) {
            args.push( STRINGS.OPTIONS_LINES, options.nyc.coverage.lines );
       }
       if ( options.nyc.coverage.statements ) {
            args.push( STRINGS.OPTIONS_STATEMENTS, options.nyc.coverage.statements );
       }
  }

  /*
   *  NYC:  Set, if nyc should clean the .nyc_output folder before running tests.
   *        Note: defaults to undefined, to have nyc use its default settings
   */
  if ( options.nyc.clean === true ) {
       args.push( STRINGS.OPTIONS_CLEAN, STRINGS.TRUE );
  }
  else if ( options.nyc.clean === false ) {
       args.push( STRINGS.OPTIONS_CLEAN, STRINGS.FALSE );
  }

  /*
   *  NYC:  Set, if nyc should produce sourcemaps --produce-source-map
   *        Note: defaults to undefined, to have nyc use its default settings
   */
  if ( options.nyc.sourcemap.create === true ) {
       args.push( STRINGS.OPTIONS_PRODUCE_SOURCEMAP, STRINGS.TRUE );
  }
  else if ( options.nyc.sourcemap.create === false ) {
       args.push( STRINGS.OPTIONS_PRODUCE_SOURCEMAP, STRINGS.FALSE );
  }

  /*
   *  NYC:  Set, if nyc should detect and handle sourcemaps --source-map
   *        Note: defaults to undefined, to have nyc use its default settings
   */
  if ( options.nyc.sourcemap.use === true ) {
       args.push( STRINGS.OPTIONS_SOURCEMAP, STRINGS.TRUE );
  }
  else if ( options.nyc.sourcemap.use === false ) {
       args.push( STRINGS.OPTIONS_SOURCEMAP, STRINGS.FALSE );
  }

  /*
   *  NYC:  Set additional options
   *        This is an array where developers can pass nyc options which are not covered
   *        by the grunt-nyc-mocha plugin.
   */
  if ( options.nyc.opts ) {
       utils.forEachOption( grunt, options.nyc.opts, STRINGS.OPTIONS_NYC_OPTS, function( option ) {
         args.push( option );
       });
  }

  return args;
}

/**
 *  Converts Mocha options into a flat array of CLI arguments for spawning processes.
 *
 *  This function is internal and exported only for unit testing during the build.
 *  It assumes that its caller has already ensured the presence of required 
 *  parameters; additional validation of the parameter content may be performed
 *  here in some cases.
 *
 *  @todo   Currently emits "--option true" for Booleans for historical reasons.
 *          This should be removed in the future once all usages are verified
 *          to work with plain "--option" or "--option=true|false".
 *
 *  @param   {grunt}    grunt    - The active Grunt instance, used for optional logging.
 *  @param   {object}   options  - An object containing Mocha CLI options to convert.
 *  @returns {string[]} A flat array of CLI arguments suitable for spawning Mocha.
 */
module.exports.mochaOptionsToArgs = function mochaOptionsToArgs( grunt, options ) {
  const args = [ ];

  /*
   *  Append mocha and mocha options
   */
  if ( ! options.mocha.exec ) {
       options.mocha.exec = utils.getMochaPath();
  }
  args.push( options.mocha.exec );

  /*
   *  mocha:  bailout on first test failure --bail, -b
   */
  if ( options.mocha.bail === true ) {
       args.push( STRINGS.OPTIONS_BAILOUT, STRINGS.TRUE );
  }
  else if ( options.mocha.bail === false ) {
       args.push( STRINGS.OPTIONS_BAILOUT, STRINGS.FALSE );
  }

  /*
   *  mocha:  exit  force mocha to leave after completing tests --exit
   */
  if ( options.mocha.exit === true ) {
       args.push( STRINGS.OPTIONS_EXIT );
  }

  /*
   *  mocha:  test timeout threshold (in milliseconds) --timeout
   */
  if ( options.mocha.timeout ) {
       args.push( STRINGS.OPTIONS_TIMEOUT, options.mocha.timeout );
  }

  /*
   *  mocha:  user interface --ui
   */
  if ( options.mocha.ui ) {
       args.push( STRINGS.OPTIONS_UI, options.mocha.ui );
  }

  /*
   *  mocha:  force colored output --color
   */
  if ( options.mocha.color ) {
       args.push( STRINGS.OPTIONS_COLOR );
  }

  /*
   *  mocha:  look for tests in subdirectories --recursive
   */
  if ( options.mocha.recursive ) {
       args.push( STRINGS.OPTIONS_RECURSIVE );
  }

  /*
   *  mocha:  Set additional options
   *          This is an array where developers can pass mocha options which
   *          are not covered by the grunt-nyc-mocha plugin.
   */
  if ( options.mocha.opts ) {
       utils.forEachOption( grunt, options.mocha.opts, STRINGS.OPTIONS_MOCHA_OPTS, function( option ) {
         args.push( option );
       });
  }

  return args;
}

/**
 *  Converts grunt task-specific options for 'nyc_mocha' into a structured
 *  set of CLI arguments for Node, NYC, and Mocha.
 *
 *  This internal function combines the outputs of `nodeOptionsToArgs`,
 *  `nycOptionsToArgs`, and `mochaOptionsToArgs`, then appends the test files
 *  at the end, as required by Mocha.
 *
 *  @param   {grunt}      grunt   - The active Grunt instance, used for optional logging.
 *  @param   {grunt.task} task    - The current Grunt task object containing file info.
 *  @param   {object}     options - An object containing Node, NYC, and Mocha CLI options.
 *  @returns {{ args: string[], opts: object }}  An object with a flat array of CLI arguments
 *                                               and the original options object.
 *  @throws  {Error} Throws if `grunt`, `task`, or `options` are missing.
 */
module.exports.toArgsImpl = function toArgsImpl( grunt, task, options ) {
  if ( ! grunt ) {
       throw new Error( STRINGS.ERROR_MSG_MISSING_GRUNT );
  }
  else if ( ! task ) {
       throw new Error( STRINGS.ERROR_MSG_MISSING_TASK_II );
  }
  else if ( ! options ) {
       throw new Error( STRINGS.ERROR_MSG_MISSING_OPTIONS );
  }

  const nodeargs = module.exports.nodeOptionsToArgs(  grunt, options );
  const nycargs  = module.exports.nycOptionsToArgs(   grunt, options );
  const mochargs = module.exports.mochaOptionsToArgs( grunt, options );

  const args     = [ ...nodeargs, ...nycargs, ...mochargs ];
  const retval   = { args, opts: options };

  /*
   *  mocha:  append test files
   *  Testfiles must be appended at the end of the arguments array.
   *  That's why this is done here and not within 'mochaOptionsToArgs'
   */
  retval.args = args.concat( task.filesSrc );

  return retval;
}
