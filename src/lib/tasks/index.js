/**
 *	index.js: grunt-nyc-mocha/tasks
 *
 *  @module grunt-nyc-mocha/tasks
 *
 *//*
 *  © 2020, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  nycmocha: require( "./nycmocha" )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  REGISTERMULTITASKNYCMOCHA:  "registerMultiTaskNYCMocha",
  RUNTASKNYCMOCHA:            "runTaskNYCMocha"
};

// Module exports:
/**
 *  Register a multitask for nyc_mocha.
 *
 *  @see    Function [registerMultiTaskNYCMocha]{@link nycmocha.md#.registerMultiTaskNYCMocha}
 *          published by module nycmocha for a detailed function description.
 *
 *  @function module:grunt-nyc-mocha/tasks.registerMultiTaskNYCMocha
 *  @param  {grunt} grunt
 */
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKNYCMOCHA, {
  value:    _m.nycmocha.registerMultiTaskNYCMocha,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUNTASKNYCMOCHA,  {
  value:    _m.nycmocha.runTaskNYCMocha,
  writable: false, enumerable: true, configurable: false });
