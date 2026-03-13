/**
 *	lib/utils.js: grunt-nyc-mocha/utils
 *
 *  Shared internal helper utilities.
 *
 *  This module intentionally groups a few small helper functions that
 *  are used across the plugin. Splitting them into separate modules
 *  would add unnecessary structure for a codebase of this size, so
 *  they are consolidated here to keep the implementation simple.
 *
 *  This module is **internal implementation detail** and is **not part
 *  of the public API surface**. Its structure and exported helpers may
 *  change without notice.
 *
 *  @module grunt-nyc-mocha/utils
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  @constant {string} FUNCTION
 *  @default
 */
const FUNCTION = "function";

/**
 *  A 'tag' that should be replaced by a function or parameter name.
 *  @constant {string} TAG_NAME
 *  @default
 */
const TAG_NAME = "<name>";

/**
 *  A human-readable error message indicating that the `mocha`
 *  package is required but not installed.
 *  @constant {string} ERROR_PEER_DEPENDENCY_MOCHA
 *  @default
 */
const ERROR_PEER_DEPENDENCY_MOCHA = "Mocha peer dependency missing.  Please \"npm install mocha\"";

/**
 *  A human-readable error message indicating that the `nyc`
 *  package is required but not installed.
 * 
 *  @constant {string} ERROR_PEER_DEPENDENCY_NYC
 *  @default
 */
const ERROR_PEER_DEPENDENCY_NYC   = "NYC peer dependency missing.  Please \"npm install nyc\"";

/**
 *  Error message used when a required callback parameter is missing
 *  or not of type `Function`.
 *
 *  The placeholder {@link TAG_NAME} is replaced with the logical name
 *  of the option array for which the callback was expected.
 *
 *  @constant {string}
 *  @default
 */
const ERROR_MISSING_CALLBACK      = `Callback for options "${ TAG_NAME }" must be of type ${ FUNCTION }`;

/**
 *  A human-readable log message indicating that the iteration
 *  of an array was skipped.
 * 
 *  @constant {string} MSG_SKIPPING_ARRAY
 *  @default
 */
const MSG_SKIPPING_ARRAY          = "Skipping empty <name> array";

/**
 *  Human-readable error message used when a function argument is expected
 *  to be an Array but a different type was provided.
 * 
 *  @constant {string} MSG_ARRAY_EXPECTED
 *  @default
 */
const MSG_ARRAY_EXPECTED          = "<name> must be an array of strings";

/**
 *  @constant {string} PATH_BIN_MOCHA
 *  @default
 */
const PATH_BIN_MOCHA              = "mocha/bin/_mocha";

/**
 *  @constant {string} PATH_BIN_NYC
 *  @default
 */
const PATH_BIN_NYC                = "nyc/bin/nyc";

/**
 *  Iterates over an option array and invokes a callback for each element.
 *
 *  This helper is intended for Grunt task implementations where configuration
 *  properties may optionally contain arrays of items that should be processed
 *  sequentially.
 *
 *  The function validates that `options` is an Array using the internal
 *  `isArray` utility. If validation fails, a `TypeError` is thrown.
 *
 *  If the array is empty, iteration is skipped and a diagnostic message is
 *  written via `grunt.verbose.ok` indicating that the corresponding option
 *  was intentionally ignored.
 *
 *  @param {Object}   grunt    The active Grunt instance. Only
 *                             `grunt.verbose.ok` is used for optional
 *                             diagnostic output.
 *  @param {*}        options  The value expected to contain the option array.
 *                             Must be an Array.
 *  @param {string}   name     Logical name of the configuration property
 *                             represented by `options`. Used for diagnostics
 *                             and validation messages.
 *  @param {Function} callback Function invoked for each element of `options`.
 *                             Receives the standard `Array.prototype.forEach`
 *                             arguments (`element`, `index`, `array`).
 *
 *  @throws {TypeError} If `options` is not an Array.
 *  @throws {TypeError} If `callback` is not a function.
 */
module.exports.forEachOption = function forEachOption( grunt, options, name, callback ) {
  module.exports.isArray( options, name );

  if ( typeof callback !== FUNCTION ) {
       throw new TypeError( ERROR_MISSING_CALLBACK.replace( TAG_NAME, name ));
  }

  if ( options.length === 0 ) {
       grunt.verbose.ok(MSG_SKIPPING_ARRAY.replace(TAG_NAME, name));
       return;
  }

  options.forEach( callback ); 
}

/**
 *  Resolves and returns the filesystem path to the `mocha` executable.
 *
 *  This utility attempts to locate the Mocha test runner using Node.js
 *  module resolution via `require.resolve`. The resolved path typically
 *  points to the start script located in the `bin` directory of the
 *  installed `mocha` package within the current project's dependency
 *  tree.
 *
 *  The returned path can be used by Grunt tasks or other automation
 *  utilities to spawn or execute Mocha programmatically (for example
 *  when running tests as part of a build pipeline).
 *
 *  If the `mocha` package cannot be resolved, the function throws a
 *  descriptive Error indicating that the required peer dependency
 *  is missing. The original resolution error is preserved and attached
 *  as the `cause` property to aid debugging.
 *
 *  Notes:
 *   - Error handling is intentionally delegated to the calling Grunt
 *     task or higher-level orchestration logic.
 *   - The `grunt` parameter is currently unused but retained for API
 *     consistency with other helper utilities and may be used in the
 *     future for logging or diagnostic output.
 *
 *  @param   {Object} grunt - The active Grunt instance. Currently unused.
 *
 *  @returns {string} The absolute filesystem path to the resolved Mocha
 *                    executable start script.
 *  @throws  {Error}  Thrown if the `mocha` executable cannot be resolved.
 *                    This usually indicates that the `mocha` package is 
 *                    not installed or not available in the current module
 *                    resolution context.
 *
 *//* eslint-disable-next-line no-unused-vars */
module.exports.getMochaPath = function getMochaPath( grunt ) {
  try { return require.resolve( PATH_BIN_MOCHA )}
  catch( error ) { /* istanbul ignore next */
    throw new Error( ERROR_PEER_DEPENDENCY_MOCHA, { cause: error });
  }
}

/**
 *  Resolves and returns the filesystem path to the `nyc` executable.
 *
 *  This helper attempts to locate the `nyc` binary using Node.js module
 *  resolution (`require.resolve`). The resolved path typically points to
 *  the start script located in the `nyc` package's `bin` directory within
 *  the current project's dependency tree.
 *
 *  The function is intended for use by Grunt tasks or internal utilities
 *  that need to programmatically invoke `nyc` (for example, when spawning
 *  coverage processes or delegating test execution with instrumentation).
 *
 *  If the `nyc` package cannot be resolved, the function throws an Error
 *  indicating that the required peer dependency is missing. The original
 *  resolution error is attached as the `cause` property to preserve the
 *  underlying diagnostic information.
 *
 *  Note:
 *   - Error handling is intentionally delegated to the calling Grunt
 *     task or higher-level orchestration logic.
 *   - The `grunt` parameter is currently unused but kept for interface
 *     consistency with other utility helpers and may be used in the
 *     future for logging or diagnostic output.
 *
 *  @param   {Object} grunt - The active Grunt instance. Currently unused.
 *  @returns {string} The absolute filesystem path to the resolved `nyc`
 *                    executable start script.
 *  @throws  {Error}  Thrown if the `nyc` executable cannot be resolved.
 *                    This typically indicates that the `nyc` package is 
 *                    not installed or not accessible from the current 
 *                    module resolution context.
 * 
 *//* eslint-disable-next-line no-unused-vars */
module.exports.getNYCPath = function getNYCPath( grunt ) {
  try { return require.resolve( PATH_BIN_NYC )}
  catch( error ) { /* istanbul ignore next */
    throw new Error( ERROR_PEER_DEPENDENCY_NYC, { cause: error });
  }
}

/**
 *  Validates that the provided value is an Array.
 *
 *  If the value is an Array, the function returns `true`. Otherwise, a
 *  `TypeError` is thrown with a descriptive message indicating which
 *  parameter failed validation.
 *
 *  Error handling is intentionally delegated to the calling Grunt task
 *  or higher-level control flow.
 *
 *  @param   {*}        value - The value to validate.
 *  @param   {string}   name  - The logical name of the parameter being 
 *                              validated. This value is inserted into
 *                              the error message to improve diagnostics.
 *  @returns {boolean} Returns `true` if `value` is an Array.
 *  @throws  {TypeError} Thrown if `value` is not an Array.
 */
module.exports.isArray = function isArray( value, name ) {
  if ( Array.isArray( value )) { return true }
  else throw new TypeError( MSG_ARRAY_EXPECTED.replace( TAG_NAME, name ));
}

/**
 *  Determines whether the given value is a plain object literal.
 *
 *  This function strictly detects plain object literals (e.g. `{ ... }`).
 *  It excludes arrays, dates, maps, sets, class instances, buffers,
 *  and all other non-plain object types.
 *
 *  ⚠ Objects created via `Object.create(null)` are NOT considered plain
 *  objects by this implementation because their prototype is `null`.
 * 
 *  Note: 
 *   - Because the code relies on constructs like 'a || {}',
 *     handling objects created with 'Object.create(null)' is not required.
 *
 *  @example
 *    isPlainObject({})                  // true
 *    isPlainObject(Object.create(null)) // false
 *    isPlainObject([])                  // false
 *    isPlainObject(new Date())          // false
 * 
 *  @function module:grunt-jsonfile/utils.isPlainObject
 *  @param    {*} value - The value to test.
 *  @returns  {boolean} Returns `true` if `value` is a non-null object whose
 *                      prototype is exactly `Object.prototype`; otherwise `false`.
 */
module.exports.isPlainObject = function isPlainObject( value ) {
  if ( typeof value !== "object" || value === null ) {
       return false;
  }
  else return Object.getPrototypeOf( value ) === Object.prototype;
}