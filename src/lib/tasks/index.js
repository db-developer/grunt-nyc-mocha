/*
 *	tasks/index.js: grunt-nyc-mocha
 *
 *  © 2020, slashlib.org.
 *
 *  tasks/index.js  is  distributed  WITHOUT ANY WARRANTY;  without even the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

const _m = {
  nycmocha:         require( "./nycmocha" )
};

const _STRINGS = {
  RUNTASKNYCMOCHA:  "runTaskNYCMocha"
};

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.RUNTASKNYCMOCHA,  {
       value:    _m.nycmocha.runTaskNYCMocha,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
