/**
 *	lib/tasks/nycmocha.js: grunt-nyc-mocha
 *
 *  Internal implementation for running the grunt-nyc-mocha
 *  plugin task.
 *
 *  ⚠ This module is NOT part of the public API surface.
 *  It may change at any time without semver guarantees.
 *
 *  External consumers MUST use `grunt-nyc-mocha/tasks` instead.
 *
 *  @module grunt-nyc-mocha/tasks/nycmocha
 *
 *//*
 *  © 2026, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const options = require( "../options" );

/**
 *  @constant {string}
 *  @default
 *  @ignore
 */
const FNCTNAME = "execute";

/**
 *  @constant {string}
 *  @default
 *  @ignore
 */
const MISSINGPROPERTY = "Missing property";

/**
 *  Returns normalized messages about missing properties.
 * 
 *  @example
 *    getMissingMessage( "obj.args" )          // => "execute: Missing property 'obj.args'."
 *    getMissingMessage( "obj.opts" )          // => "execute: Missing property 'obj.opts'."
 *    getMissingMessage( "options.cwd" )       // => "execute: Missing property 'options.cwd'."
 *    getMissingMessage( "options.node.exec" ) // => "execute: Missing property 'options.node.exec'."
 * 
 *  @param   {string} propertyname - Name or description of a property
 *  @returns {string} normalized messages about a missing property.
 */
module.exports.getMissingMessage = function getMissingMessage( propertyname ) {
  return `${ FNCTNAME }: ${ MISSINGPROPERTY } '${ propertyname }'.`;
}

/**
 *  Return a promise for executing
 *    'node --[node opts] nyc --[nyc opts] mocha --[mocha opts]'
 *
 *  @param  {grunt}       grunt the runtime 'instance' of grunt.
 *  @param  {grunt.task}  task  the current task
 *  @param  {Object}      obj wrapper for options and arguments.
 */
module.exports.execute = async function execute( grunt, task, obj ) {
  let args = undefined;
  if ( ! obj?.args ) {
       throw new Error( module.exports.getMissingMessage( "obj.args" ));
  }
  else args = obj.args;

  let options = undefined;
  if ( ! obj?.opts ) {
       throw new Error( module.exports.getMissingMessage( "obj.opts" ));
  }
  else  options = obj.opts;

  const env = process.env;

  let   cwd = undefined;
  if ( ! options.cwd ) {
       throw new Error( module.exports.getMissingMessage( "options.cwd" ));
  }
  else cwd = options.cwd;

  let   stdio = options.quiet ? "ignore" : "inherit";
  const opts  = { env, cwd, stdio };

  let   cmd = undefined;
  if ( ! options.node.exec ) {
       throw new Error( module.exports.getMissingMessage( "options.node.exec" ));
  }
  else cmd = options.node.exec;

  const logmsg = `Will execute (stdio: '${ stdio }'): ${ cmd } ${ args.join( " " )}`;

  if ( options.dryrun ) {
       grunt.log.ok( logmsg );
       return obj;
  }
  else {
       grunt.verbose.ok( logmsg );
       return module.exports.spawn( grunt, task, obj, cmd, args, opts );
  }
}

/**
 *  Promisification of grunts spawn functionality.
 * 
 *  @param  {grunt}      grunt 
 *  @param  {grunt.task} task 
 *  @param  {Object}     obj   - wrapper for options and arguments.
 *  @param  {string}     cmd 
 *  @param  {string}     args 
 *  @param  {*}          opts 
 * 
 */
module.exports.spawn = async function spawn( grunt, task, obj, cmd, args, opts ) {
  return new Promise(( resolve, reject ) => {
      grunt.util.spawn({ cmd, args, opts }, ( error, result ) => {
        if ( ! error ) {
             obj.result = result;
             resolve( obj );
        }
        else reject( error );
      });
  });
}

/**
 *  Run the nyc mocha task.
 *
 *  @return {Promise} ... required by callee to terminate async call (on "then")
 */
module.exports.runTask = async function runTask( grunt, task ) {
  const obj = options.toArgs( grunt, task ); // prepare args for test runs ...
  return module.exports.execute( grunt, task, obj );
}
