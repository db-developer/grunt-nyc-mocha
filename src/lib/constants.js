
/**
 *	constants.js: grunt-nyc-mocha
 *
 *  @module grunt-nyc-mocha/constants
 *
 *//*
 *  © 2020, db-developer.
 *
 *  constants.js  is distributed  WITHOUT  ANY WARRANTY;  without  even  the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  PROPERTY_TASKNAME_NYCMOCHA:   "TASKNAME_NYCMOCHA",
  PROPERTY_TASKDESC_NYCMOCHA:   "TASKDESCRIPTION_NYCMOCHA",
  TASKNAME_NYCMOCHA:            "nyc_mocha",
  TASKDESCRIPTION_NYCMOCHA:     "Generate coverage reports with nyc from mocha testruns"
};

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKNAME_NYCMOCHA, {
       value:    _STRINGS.TASKNAME_NYCMOCHA,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKDESC_NYCMOCHA, {
       value:    _STRINGS.TASKDESCRIPTION_NYCMOCHA,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
