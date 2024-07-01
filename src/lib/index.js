/**
 *	Package interface of grunt-nyc-mocha<br />
 *  All static members of this module are available for 3rd party access.
 *
 *  @module grunt-nyc-mocha
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
 *  Moduletable
 *  @ignore
 */
const _m = {
  tasks:    require( "./tasks" )
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  REGISTERMULTITASKNYCMOCHA:  "registerMultiTaskNYCMocha"
}

// Module exports:
/**
 *  Register a multitask for nyc_mocha.
 *
 *  @see    Function [registerMultiTaskNYCMocha]{@link tasks/index.md#.registerMultiTaskNYCMocha}
 *          published by module tasks for a detailed function description.
 *
 *  @function module:grunt-nyc-mocha.registerMultiTaskNYCMocha
 *  @param  {grunt} grunt
 */
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKNYCMOCHA, {
  value:    _m.tasks.registerMultiTaskNYCMocha,
  writable: false, enumerable: true, configurable: false });
