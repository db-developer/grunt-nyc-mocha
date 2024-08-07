/**
 *	lib.js: grunt-nyc-mocha
 *
 *  @module grunt-nyc-mocha/lib
 *
 *//*
 *	lib.js: grunt-nyc-mocha
 *
 *  © 2020, slashlib.org.
 *
 *  lib.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  ERROR_PEER_DEPENDENCY_MOCHA:  "Mocha peer dependency missing.  Please \"npm install mocha\"",
  ERROR_PEER_DEPENDENCY_NYC:    "NYC peer dependency missing.  Please \"npm install nyc\"",
  GETMOCHAPATH:                 "getMochaPath",
  GETNYCPATH:                   "getNYCPath",
  ISARRAY:                      "isArray",
  MSG_SKIPPING_ARRAY:           "Skipping empty <name> array",
  MSG_ARRAY_EXPECTED:           "<name> must be an array of strings",
  PATH_BIN_MOCHA:               "mocha/bin/_mocha",
  PATH_BIN_NYC:                 "nyc/bin/nyc",
  TAG_NAME:                     "<name>"
};

/**
 *  Returns the path to the mocha executable/startscript
 *
 *  @param  {grunt}   grunt
 *  @return {string}  path to mocha
 */
function getMochaPath( grunt ) {
  /* eslint-disable no-unused-vars */
  try { return require.resolve( _STRINGS.PATH_BIN_MOCHA ); }
  catch( error ) { /* istanbul ignore next */ grunt.fail.fatal( _STRINGS.ERROR_PEER_DEPENDENCY_MOCHA ); }
}

/**
 *  Returns the path to the nyc executable/startscript
 *
 *  @param  {grunt}   grunt
 *  @return {string}  path to nyc
 */
function getNYCPath( grunt ) {
  /* eslint-disable no-unused-vars */
  try { return require.resolve( _STRINGS.PATH_BIN_NYC ); }
  catch( error ) { /* istanbul ignore next */  grunt.fail.fatal( _STRINGS.ERROR_PEER_DEPENDENCY_NYC ); }
}

/**
 *  Checks if options is of type array and passes it to callback.
 *
 *  @param  {grunt}     grunt
 *  @param  {Array}     options
 *  @param  {string}    name
 *  @param  {Function}  callback
 */
function isArray( grunt, options, name, callback ) {
  if ( Array.isArray( options )) {
       if (( options.length ) && ( callback )) { callback( options ); }
       else grunt.verbose.ok( _STRINGS.MSG_SKIPPING_ARRAY.replace( _STRINGS.TAG_NAME, name ));
  }
  else throw new Error( _STRINGS.MSG_ARRAY_EXPECTED.replace( _STRINGS.TAG_NAME, name ));
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.GETMOCHAPATH,     {
  value:    getMochaPath,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.GETNYCPATH,       {
  value:    getNYCPath,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISARRAY,          {
  value:    isArray,
  writable: false, enumerable: true, configurable: false });
