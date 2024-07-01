
/**
 *	index.js: grunt-nyc-mocha/options
 *
 *  @module grunt-nyc-mocha/options
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
  nycmocha:     require( "./nycmocha" )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  TONYCMOCHAARGS:   "toNYCMochaArgs"
};

/**
 *  Returns an object wich holds an array of arguments, which will be used to
 *  run the 'nyc_mocha' task and the array of options the arguments were created
 *  from.
 *
 *  @return {Promise<Object>} obj
 *  @return {Array<strings>}  obj.args  an array of arguments
 *  @return {Array<any>}      obj.opts  an array of options
 */
function toNYCMochaArgs( grunt, task ) {
  return _m.nycmocha.toArgs( grunt, task );
}


// Module exports:
Object.defineProperty( module.exports, _STRINGS.TONYCMOCHAARGS, {
  value:    toNYCMochaArgs,
  writable: false, enumerable: true, configurable: false });
