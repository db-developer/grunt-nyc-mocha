/*
 *	index.js: grunt-nyc-mocha
 *
 *  © 2020, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

const _m = {
  const:    require( "./constants" ),
  tasks:    require( "./tasks"     )
}

const _STRINGS = {
  REGISTERMULTITASKNYCMOCHA:  "registerMultiTaskNYCMocha"
}

/**
 *  Registers the 'nyc_mocha' multitask.
 *
 *  @param  {grunt} grunt
 */
function registerMultiTaskNYCMocha( grunt ) {
  grunt.registerMultiTask( _m.const.TASKNAME_NYCMOCHA, _m.const.TASKDESCRIPTION_NYCMOCHA,
    /* istanbul ignore next */ function () {
      const task = this;
      const done = task.async();
      _m.tasks.runTaskNYCMocha( grunt, task )
              .then((       ) => { done(); },
                    ( error ) => { grunt.log.error( error ); done( false ); });
  });
}

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKNYCMOCHA, {
       value:    registerMultiTaskNYCMocha,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
