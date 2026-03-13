/**
 *	lib/options/defaults.js: grunt-nyc-mocha/options/defaults
 *
 *  Internal implementation of the default options logic 
 *  for grunt-nyc-mocha.
 *
 *  ⚠ This module is NOT part of the public API surface.
 *  It may change at any time without semver guarantees.
 *
 *  External consumers MUST use `grunt-nyc-mocha/options` instead.
 *
 *  @module grunt-nyc-mocha/options/defaults
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  Returns default settings for basic mocha options.
 *  TODO: Add supported mocha version to this comment, so developers
 *        can decide which options must be passed directly.
 *
 *  @return {object} default settings for basic mocha options.
 */
module.exports.getMochaOptions = function getMochaOptions() {
  return {
    bail:      undefined, // abort ("bail") after first test failure
    color:     false,     // force colored output
    exec:      false,     // path to node_modules/.../mocha script
    exit:      false,     // force Mocha to quit after tests complete
    opts:      false,     // additional mocha options not coveredby plugin
    recursive: false,     // look for tests in subdirectories
    timeout:   false,     // test timeout threshold (millis)
    ui:        false      // user interfaces
  };
}

/**
 *  Returns default settings for basic node options.
 *
 *  @return {object} default settings for basic node options.
 */
module.exports.getNodeOptions = function getNodeOptions() {
  return {
    options: false,  // optional node options not covered by plugin
    exec:    false   // defaults to: process.execPath
  };
}

/**
 *  Returns default options for nyc coverage.
 *
 *  @return {object} default options for nyc coverage.
 */
module.exports.getNYCCoverageOptions = function getNYCCoverageOptions() {
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
module.exports.getNYCSourcemapOptions = function getNYCSourcemapOptions() {
  return {
    create:       undefined,          // should nyc produce sourcemaps?
    use:          undefined           // should nyc detect and handle sourcemaps?
  };
}

/**
 *  Returns default settings for basic nyc options.
 *  TODO: Add supported nyc version to this comment, so developers
 *        can decide which options must be passed directly.
 *
 *  @return {object} default settings for basic nyc options.
 */
module.exports.getNYCOptions = function getNYCOptions() {
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