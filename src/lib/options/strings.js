/**
 *	lib/options/strings.js: grunt-nyc-mocha/options/strings
 *
 *  Internal implementation of constants used by the option
 *  handling logic for grunt-nyc-mocha.
 *
 *  ⚠ This module is NOT part of the public API surface.
 *  It may change at any time without semver guarantees.
 *
 *  External consumers MUST use `grunt-nyc-mocha/options` instead.
 *
 *  @module grunt-nyc-mocha/options/strings
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const ERRORMESSAGES = {
  /**
   *  @constant {string}
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  ERROR_MSG_MISSING_GRUNT:   "Function 'toArgsImpl': missing parameter 'grunt'.",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  ERROR_MSG_MISSING_OPTIONS: "Function 'toArgsImpl': missing parameter 'options'.",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  ERROR_MSG_MISSING_TASK_I : "Function 'toArgs': missing parameter 'task'.",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  ERROR_MSG_MISSING_TASK_II: "Function 'toArgsImpl': missing parameter 'task'."
}

const OPTIONS = {
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_BAILOUT:               "--bail",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_BRANCHES:              "--branches",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_CHECK_COVERAGE:        "--check-coverage",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_CLEAN:                 "--clean",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_COLOR:                 "--color",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_CWD:                   "--cwd",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_EXCLUDE:               "--exclude",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_EXIT:                  "--exit",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_EXTENSION:             "--extension",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_FUNCTIONS:             "--functions",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_INCLUDE:               "--include",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_LINES:                 "--lines",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_MOCHA_OPTS:            "options.mocha.opts",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_NODE_OPTIONS:          "options.node.options",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_NYC_COVERAGE_REPORTER: "options.nyc.coverage.reporter",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_NYC_EXCLUDES:          "options.nyc.excludes",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_NYC_EXTENSIONS:        "options.nyc.extensions",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_NYC_INCLUDES:          "options.nyc.includes",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_NYC_OPTS:              "options.nyc.opts",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_NYC_REQUIRES:          "options.nyc.requires",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */  
  OPTIONS_PER_FILE:              "--per-file",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_PRODUCE_SOURCEMAP:     "--produce-source-map",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_SOURCEMAP:             "--source-map",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_STATEMENTS:            "--statements",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_RECURSIVE:             "--recursive",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_REPORT_DIR:            "--report-dir",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_REPORTER:              "--reporter",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_REQUIRE:               "--require",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_TEMP_DIR:              "--temp-dir",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_TIMEOUT:               "--timeout",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  OPTIONS_UI:                    "--ui",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  PROPERTY_COVERAGE:             "coverage",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  REPORT_FORMAT_HTML:            "html",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  REPORT_FORMAT_LCOV:            "lcov",
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  REPORT_FORMAT_TEXT:            "text",
}

const CONSTANTS = {
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  FALSE: `${ false }`,
  /**
   *  @constant {string}  
   *  @memberof module:grunt-nyc-mocha/options/strings
   *  @default
   */
  TRUE:  `${ true }`
}

module.exports = { ...ERRORMESSAGES, ...OPTIONS, ...CONSTANTS };