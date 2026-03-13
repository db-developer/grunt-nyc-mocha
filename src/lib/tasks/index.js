/**
 *	lib/tasks/index.js: grunt-nyc-mocha/tasks
 *
 *  Public API of the grunt-nyc-mocha/tasks module.
 *
 *  This module exposes the stable, documented interface
 *  for running the plugins task
 *
 *  Consumers MUST depend on this module path instead of
 *  internal implementation files.
 *
 *  The underlying implementation is intentionally 
 *  encapsulated and may change without notice.
 *
 *  @module grunt-nyc-mocha/tasks
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const nycmocha = require( "./nycmocha" );

/**
 *  Register a multitask for nyc_mocha.
 *
 *  @see Function [runTask]{@link nycmocha.md#.runTask}
 *       published by module nycmocha for a detailed function description.
 *
 *  @function module:grunt-nyc-mocha/tasks.runTask
 *  @param    {grunt} grunt
 */
module.exports.runTask = nycmocha.runTask;
