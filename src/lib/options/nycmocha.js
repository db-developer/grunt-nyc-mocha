/**
 *	options/nycmocha.js: grunt-nyc-mocha
 *
 *  @module grunt-nyc-mocha/options/nycmocha
 *
 *//*
 *  © 2020, slashlib.org.
 *
 *  options/nycmocha.js  is distributed WITHOUT ANY WARRANTY; without even the
 *  implied warranty of  MERCHANTABILITY or FITNESS FOR  A PARTICULAR PURPOSE.
 *
 */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  path:     require( "path"   ),
  lib:      require( "../lib" )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  ERROR_MSG_MISSING_GRUNT:        "nycmocha.js - Function 'toArgsImpl': missing parameter 'grunt'.",
  ERROR_MSG_MISSING_OPTIONS:      "nycmocha.js - Function 'toArgsImpl': missing parameter 'options'.",
  ERROR_MSG_MISSING_TASK_I:       "nycmocha.js - Function 'toArgs': missing parameter 'task'.",
  ERROR_MSG_MISSING_TASK_II:      "nycmocha.js - Function 'toArgsImpl': missing parameter 'task'.",
  FALSE:                          `${ false }`,
  GETOPTIONS:                     "getOptions",
  GETTASKOPTIONS:                 "getTaskOptions",
  OPTIONS_BAILOUT:                "--bail",
  OPTIONS_BRANCHES:               "--branches",
  OPTIONS_CHECK_COVERAGE:         "--check-coverage",
  OPTIONS_CLEAN:                  "--clean",
  OPTIONS_COLOR:                  "--color",
  OPTIONS_CWD:                    "--cwd",
  OPTIONS_EXCLUDE:                "--exclude",
  OPTIONS_EXIT:                   "--exit",
  OPTIONS_EXTENSION:              "--extension",
  OPTIONS_FUNCTIONS:              "--functions",
  OPTIONS_INCLUDE:                "--include",
  OPTIONS_LINES:                  "--lines",
  OPTIONS_MOCHA_OPTS:             "options.mocha.opts",
  OPTIONS_NODE_OPTIONS:           "options.node.options",
  OPTIONS_NYC_COVERAGE_REPORTER:  "options.nyc.coverage.reporter",
  OPTIONS_NYC_EXCLUDES:           "options.nyc.excludes",
  OPTIONS_NYC_EXTENSIONS:         "options.nyc.extensions",
  OPTIONS_NYC_INCLUDES:           "options.nyc.includes",
  OPTIONS_NYC_OPTS:               "options.nyc.opts",
  OPTIONS_PER_FILE:               "--per-file",
  OPTIONS_PRODUCE_SOURCEMAP:      "--produce-source-map",
  OPTIONS_SOURCEMAP:              "--source-map",
  OPTIONS_STATEMENTS:             "--statements",
  OPTIONS_RECURSIVE:              "--recursive",
  OPTIONS_REPORT_DIR:             "--report-dir",
  OPTIONS_REPORTER:               "--reporter",
  OPTIONS_REQUIRE:                "--require",
  OPTIONS_TEMP_DIR:               "--temp-dir",
  OPTIONS_TIMEOUT:                "--timeout",
  OPTIONS_UI:                     "--ui",
  PROPERTY_COVERAGE:              "coverage",
  REPORT_FORMAT_HTML:             "html",
  REPORT_FORMAT_LCOV:             "lcov",
  REPORT_FORMAT_TEXT:             "text",
  TOARGS:                         "toArgs",
  TOARGSIMPL:                     "toArgsImpl",
  TRUE:                           `${ true }`
};

/**
 *  Returns default options for nyc coverage.
 *
 *  @return {object} default options for nyc coverage.
 */
function getNYCCoverageOptions() {
  return {
    branches:     false,              // what % of branches must be covered?
    check:        false,              // check wether coverage is within thresholds
    dir:          false,              // report nyc coverage results to folder
    functions:    false,              // what % of functions must be covered?
    lines:        false,              // what % of lines must be covered?
    perfile:      false,              // check thresholds per file
    reporter:     false,              // report coverage using reporter 'text'|'html'
    statements:   false               // what % of statements must be covered?
  };
}

/**
 *  Returns default options for nyc sourcemap.
 *
 *  @return {object} default options for nyc sourcemap.
 */
function getNYCSourcemapOptions() {
  return {
    create:       undefined,          // should nyc produce sourcemaps?
    use:          undefined           // should nyc detect and handle sourcemaps?
  };
}

/**
 *  Returns default settings for basic nyc options.
 *
 *  @return {object} default settings for basic nyc options.
 */
function getNYCOptions() {
  return {
    all:            false,              // whether or not to instrument all files
                                        // (not just the ones touched by your test suite)
    clean:          undefined,          // clean .nyc_output folder before testing
    excludes:       false,              // array of files and directories to exclude
    exec:           false,              // path to node_modules/.../nyc script
    extensions:     false,              // additional extensions that nyc should handle
    includes:       false,              // array of files and directories to include
    opts:           false,              // additional options not covered by this grunt plugin
    requires:       false,              // array of scripts to additionally require
    temp:           false,              // directory to output raw coverage information
  };
}

/**
 *  Returns default settings for basic mocha options.
 *
 *  @return {object} default settings for basic mocha options.
 */
function getMochaOptions() {
  return {
    bail:           undefined,          // abort ("bail") after first test failure
    color:          false,              // force colored output
    exec:           false,              // path to node_modules/.../mocha script
    exit:           false,              // force Mocha to quit after tests complete
    opts:           false,              // additional mocha options not coveredby plugin
    recursive:      false,              // look for tests in subdirectories
    timeout:        false,              // test timeout threshold (millis)
    ui:             false               // user interfaces
  };
}

/**
 *  Returns default settings for basic node options.
 *
 *  @return {object} default settings for basic node options.
 */
function getNodeOptions() {
  return {
    options:        false,
    exec:           false               // defaults to: process.execPath
  };
}

/**
 *  Defines and returns the set of options that is passed to task 'nyc_mocha'.
 *
 *  @return {Object}  nyc_mocha default options
 */
function getOptions() {
  return {
    cwd:              process.cwd(),      // working directory for nyc + mocha run
    dryrun:           false,              // dry run - do nothing just print cmd line
  };
}

/**
 *  Returns grunt task specific options for 'nyc_mocha'.
 *  Note: 'nyc_mocha' default options and configuration options
 *        have already been merged!
 *
 *  @param  {grunt.task}  task
 *
 *  @return {Object}  'nyc_mocha' options for grunt task
 */
function getTaskOptions( task ) {
  const  taskopts  = task.options();
  const  options   = Object.assign( getOptions(), taskopts );
         options.mocha = Object.assign( getMochaOptions(), /* istanbul ignore next */ taskopts.mocha || {});
         options.node  = Object.assign( getNodeOptions(),  /* istanbul ignore next */ taskopts.node  || {});
         options.nyc   = Object.assign( getNYCOptions(),   /* istanbul ignore next */ taskopts.nyc   || {});
         options.nyc.coverage  = Object.assign( getNYCCoverageOptions(),
                                               (( taskopts.nyc ) && ( taskopts.nyc.coverage  )) ?
                                                  /* istanbul ignore next */ taskopts.nyc.coverage  : {});
         options.nyc.sourcemap = Object.assign( getNYCSourcemapOptions(), /* istanbul ignore next */
                                               (( taskopts.nyc ) && ( taskopts.nyc.sourcemap )) ?
                                                  /* istanbul ignore next */ taskopts.nyc.sourcemap : {});
  return options
}

/**
 *  Convert grunt task specific options for 'nyc_mocha' to an array of
 *  arguments, which will be used for calling nyc and mocha.
 *
 *  @param  {grunt}                   grunt
 *  @param  {grunt.task}              task
 *  @return {Promise<Array<Object>>}  { args, opts }
 */
function toArgsImpl( grunt, task, options ) {
  return new Promise(( resolve, reject ) => {
    if (( grunt === null ) || ( grunt === undefined )) {
          return reject( new Error( _STRINGS.ERROR_MSG_MISSING_GRUNT ));
    }
    else  if (( task === null ) || ( task === undefined )) {
          return reject( new Error( _STRINGS.ERROR_MSG_MISSING_TASK_II ));
    }
    else  if (( options === null ) || ( options === undefined )) {
          return reject( new Error( _STRINGS.ERROR_MSG_MISSING_OPTIONS ));
    }
    try {
      const args    = [ ];
      const retval  = { args, opts: options };

      if ( ! options.node.exec ) {
           options.node.exec = process.execPath;
      }

      if ( options.node.options ) {
           _m.lib.isArray( grunt, options.node.options, _STRINGS.OPTIONS_NODE_OPTIONS, function( options ) {
             options.forEach( function( option ) {
               args.push( option );
             });
           })
      }

      /*
       *  NYC:  Set path to nyc
       */
      if ( ! options.nyc.exec ) {
           options.nyc.exec = _m.lib.getNYCPath();
      }
      args.push( options.nyc.exec );

      /*
       *  NYC:  Set current working directory --cwd
       */
      if ( ! options.cwd ) {
           options.cwd = process.cwd();
      }
      args.push( _STRINGS.OPTIONS_CWD, options.cwd );

      /*
       *  NYC:  Set directory for temporary files --temp-dir
       */
      if ( options.nyc.temp ) {
           args.push( _STRINGS.OPTIONS_TEMP_DIR, _m.path.resolve( options.cwd, options.nyc.temp ));
      }

      /*
       *  NYC:  Set requires --require, -i
       */
      if ( options.nyc.requires ) {
           _m.lib.isArray( grunt, options.nyc.requires, _STRINGS.OPTIONS_NYC_EXCLUDES, function( requires ) {
              requires.forEach( function ( script ) {
                  args.push( _STRINGS.OPTIONS_REQUIRE, script );
              });
          })
      }

      /*
       *  NYC:  Set excludes --exclude, -x
       */
      if ( options.nyc.excludes ) {
           _m.lib.isArray( grunt, options.nyc.excludes, _STRINGS.OPTIONS_NYC_EXCLUDES, function( options ) {
              options.forEach( function ( exclude ) {
                  args.push( _STRINGS.OPTIONS_EXCLUDE, exclude );
              });
          })
      }

      /*
       *  NYC:  Set includes --include, -i
       */
      if ( options.nyc.includes ) {
           _m.lib.isArray( grunt, options.nyc.includes, _STRINGS.OPTIONS_NYC_INCLUDES, function( options ) {
              options.forEach( function ( include ) {
                  args.push( _STRINGS.OPTIONS_INCLUDE, include );
              });
          })
      }

      /*
       *  NYC:  Set includes --extension, -e
       */
      if ( options.nyc.extensions ) {
           _m.lib.isArray( grunt, options.nyc.extensions, _STRINGS.OPTIONS_NYC_EXTENSIONS, function( options ) {
              options.forEach( function ( extension ) {
                  args.push( _STRINGS.OPTIONS_EXTENSION, extension );
              });
          })
      }

      /*
       *  NYC:  Set coverage directory --report-dir
       */
      if ( options.nyc.coverage.dir ) {
           args.push( _STRINGS.OPTIONS_REPORT_DIR, _m.path.resolve( options.cwd, options.nyc.coverage.dir ));
      }

      /*
       *  NYC:  Set includes --reporter, -r
       */
      if ( options.nyc.coverage.reporter ) {
           _m.lib.isArray( grunt, options.nyc.coverage.reporter, _STRINGS.OPTIONS_NYC_COVERAGE_REPORTER, function( reporters ) {
              reporters.forEach( function ( reporter ) {
                  args.push( _STRINGS.OPTIONS_REPORTER, reporter );
              });
          })
      }

      /*
       *  NYC:  Set coverage check values
       */
      if ( options.nyc.coverage.check ) {
           args.push( _STRINGS.OPTIONS_CHECK_COVERAGE, _STRINGS.TRUE );
           if ( options.nyc.coverage.perfile ) {
                args.push( _STRINGS.OPTIONS_PER_FILE, _STRINGS.TRUE );
           }
           if ( options.nyc.coverage.branches ) {
                args.push( _STRINGS.OPTIONS_BRANCHES, options.nyc.coverage.branches );
           }
           if ( options.nyc.coverage.functions ) {
                args.push( _STRINGS.OPTIONS_FUNCTIONS, options.nyc.coverage.functions );
           }
           if ( options.nyc.coverage.lines ) {
                args.push( _STRINGS.OPTIONS_LINES, options.nyc.coverage.lines );
           }
           if ( options.nyc.coverage.statements ) {
                args.push( _STRINGS.OPTIONS_STATEMENTS, options.nyc.coverage.statements );
           }
      }

      /*
       *  NYC:  Set, if nyc should clean the .nyc_output folder before running tests.
       *        Note: defaults to undefined, to have nyc use its default settings
       */
      if ( options.nyc.clean === true ) {
           args.push( _STRINGS.OPTIONS_CLEAN, _STRINGS.TRUE );
      }
      else if ( options.nyc.clean === false ) {
           args.push( _STRINGS.OPTIONS_CLEAN, _STRINGS.FALSE );
      }

      /*
       *  NYC:  Set, if nyc should produce sourcemaps --produce-source-map
       *        Note: defaults to undefined, to have nyc use its default settings
       */
      if ( options.nyc.sourcemap.create === true ) {
           args.push( _STRINGS.OPTIONS_PRODUCE_SOURCEMAP, _STRINGS.TRUE );
      }
      else if ( options.nyc.sourcemap.create === false ) {
           args.push( _STRINGS.OPTIONS_PRODUCE_SOURCEMAP, _STRINGS.FALSE );
      }

      /*
       *  NYC:  Set, if nyc should detect and handle sourcemaps --source-map
       *        Note: defaults to undefined, to have nyc use its default settings
       */
      if ( options.nyc.sourcemap.use === true ) {
           args.push( _STRINGS.OPTIONS_SOURCEMAP, _STRINGS.TRUE );
      }
      else if ( options.nyc.sourcemap.use === false ) {
           args.push( _STRINGS.OPTIONS_SOURCEMAP, _STRINGS.FALSE );
      }

      /*
       *  NYC:  Set additional options
       *        This is an array where developers can pass nyc options which are not covered
       *        by the grunt-nyc-mocha plugin.
       */
      if ( options.nyc.opts ) {
           _m.lib.isArray( grunt, options.nyc.opts, _STRINGS.OPTIONS_NYC_OPTS, function( options ) {
              options.forEach( function ( option ) { args.push( option ); });
          });
      }

      /*
       *  Append mocha and mocha options
       */
      if ( ! options.mocha.exec ) {
           options.mocha.exec = _m.lib.getMochaPath();
      }
      args.push( options.mocha.exec );

      /*
       *  mocha:  bailout on first test failure --bail, -b
       */
      if ( options.mocha.bail === true ) {
           args.push( _STRINGS.OPTIONS_BAILOUT, _STRINGS.TRUE );
      }
      else if ( options.mocha.bail === false ) {
           args.push( _STRINGS.OPTIONS_BAILOUT, _STRINGS.FALSE );
      }

      /*
       *  mocha:  exit  force mocha to leave after completing tests --exit
       */
      if ( options.mocha.exit === true ) {
           args.push( _STRINGS.OPTIONS_EXIT );
      }

      /*
       *  mocha:  test timeout threshold (in milliseconds) --timeout
       */
      if ( options.mocha.timeout ) {
           args.push( _STRINGS.OPTIONS_TIMEOUT, options.mocha.timeout );
      }

      /*
       *  mocha:  user interface --ui
       */
      if ( options.mocha.ui ) {
           args.push( _STRINGS.OPTIONS_UI, options.mocha.ui );
      }

      /*
       *  mocha:  force colored output --color
       */
      if ( options.mocha.color ) {
           args.push( _STRINGS.OPTIONS_COLOR );
      }

      /*
       *  mocha:  look for tests in subdirectories --recursive
       */
      if ( options.mocha.recursive ) {
           args.push( _STRINGS.OPTIONS_RECURSIVE );
      }

      /*
       *  mocha:  Set additional options
       *          This is an array where developers can pass mocha options which
       *          are not covered by the grunt-nyc-mocha plugin.
       */
      if ( options.mocha.opts ) {
           _m.lib.isArray( grunt, options.mocha.opts, _STRINGS.OPTIONS_MOCHA_OPTS, function( options ) {
             options.forEach( function ( option ) { args.push( option ); });
           });
      }

      /*
       *  mocha:  append test files
       */
      retval.args = args.concat( task.filesSrc );

      resolve( retval );
    }
    catch( error ) { /* istanbul ignore next */ reject( error ); }
  });
}

/**
 *  Convert grunt task specific options for 'nyc_mocha' to an array of
 *  arguments, which will be used for calling nyc and mocha.
 *
 *  @param  {grunt}                   grunt
 *  @param  {grunt.task}              task
 *  @return {Promise<Array<Object>>}  { args, opts }
 */
function toArgs( grunt, task ) {
  try {
    if (( task === null ) || ( task === undefined )) {
          throw new Error( _STRINGS.ERROR_MSG_MISSING_TASK_I );
    }
    else  return toArgsImpl( grunt, task, getTaskOptions( task )); }
  catch( error ) { return Promise.reject( error ); }
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.GETOPTIONS,     {
  value:    getOptions,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.GETTASKOPTIONS, {
  value:    getTaskOptions,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.TOARGS,         {
  value:    toArgs,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.TOARGSIMPL,     {
  value:    toArgsImpl,
  writable: false, enumerable: true, configurable: false });
