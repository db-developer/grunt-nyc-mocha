/*
 *	tasks/nycmocha.js: grunt-nyc-mocha
 *
 *  © 2020, slashlib.org.
 *
 *  tasks/nycmocha.js  is distributed WITHOUT ANY WARRANTY; without even the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

const _m = { nycmochaopts: require( "../options/nycmocha" ) };

function _init_STRINGS() {
  const executenycmocha = "executeNYCMocha";
  const missingproperty = "Missing property";

  return {
    ERROR_MSG_MISSING_ARGS:     `${ executenycmocha }: ${ missingproperty } 'obj.args'.`,
    ERROR_MSG_MISSING_OPTS:     `${ executenycmocha }: ${ missingproperty } 'obj.opts'.`,
    ERROR_MSG_MISSING_CWD:      `${ executenycmocha }: ${ missingproperty } 'options.cwd'.`,
    ERROR_MSG_MISSING_NODEEXEC: `${ executenycmocha }: ${ missingproperty } 'options.node.exec'.`,
    EXECUTENYCMOCHA:            `${ executenycmocha }`,
    IGNORE:                     "ignore",
    INHERIT:                    "inherit",
    RUNTASKNYCMOCHA:            "runTaskNYCMocha"
  };
}

const _STRINGS = _init_STRINGS();

/**
 *  Return a promise for executing
 *    'node --[node opts] nyc --[nyc opts] mocha --[mocha opts]'
 *
 *  @param  {grunt}       grunt the runtime 'instance' of grunt.
 *  @param  {grunt.task}  task  the current task
 *  @param  {Object}      obj wrapper for options and arguments.
 */
function executeNYCMocha( grunt, task, obj ) {
  return new Promise(( resolve, reject ) => {
    try {
      let args = undefined;
      if (( ! obj ) || ( ! obj.args )) {
            throw new Error( _STRINGS.ERROR_MSG_MISSING_ARGS );
      }
      else args = obj.args;

      let options = undefined;
      if (( ! obj ) || ( ! obj.opts )) {
            throw new Error( _STRINGS.ERROR_MSG_MISSING_OPTS );
      }
      else  options = obj.opts;

      const env = process.env;

      let   cwd = undefined;
      if ( ! options.cwd ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_CWD );
      }
      else cwd = options.cwd;

      let   stdio = options.quiet ? _STRINGS.IGNORE : _STRINGS.INHERIT;
      const opts  = { env, cwd, stdio };

      let   cmd = undefined;
      if ( ! options.node.exec ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_NODEEXEC );
      }
      else cmd = options.node.exec;

      const logmsg = `Will execute (stdio: '${ stdio }'): ${ cmd } ${ args.join( " " )}`;
      /* istanbul ignore else */
      if ( options.dryrun ) {
           grunt.log.ok( logmsg );
           return resolve( obj );
      }
      else grunt.verbose.ok( logmsg );

      /* istanbul ignore next */
      grunt.util.spawn({ cmd, args, opts }, ( error, result ) => {
        if ( ! error ) {
             obj.result = result;
             resolve( obj );
        }
        else reject( error );
      });
    }
    catch( error ) { reject( error ); }
  });
}

/**
 *  @return {Promise} ... required by callee to terminate async call (on "then")
 */
function runTaskNYCMocha( grunt, task ) {
  let    promise = _m.nycmochaopts.toArgs( grunt, task ); // prepare args for test runs ...
         promise = promise.then(( obj ) => { // run the tests...
                     return executeNYCMocha( grunt, task, obj );
                   });
  return promise;
}

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.EXECUTENYCMOCHA,  {
       value:    executeNYCMocha,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUNTASKNYCMOCHA,  {
       value:    runTaskNYCMocha,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
