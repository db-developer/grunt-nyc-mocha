/**
 *  © 2026, slashtasks.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/task/nycmocha.js'`, () => {
  const options   = require( "../../lib/options" );
  const nycmocha  = require( "../../lib/tasks/nycmocha" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/task/nycmocha'", () => {
    it( "Function 'execute' should exist", () => {
        expect( nycmocha.execute ).not.to.be( undefined  );
        expect( nycmocha.execute ).not.to.be( null       );
        expect( nycmocha.execute ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'execute' of module 'lib/task/nycmocha'", () => {
    it( "should be callable without parameters but get rejected", ( done ) => {
        const errmsg = "execute: Missing property 'obj.args'.";
        expect(() => { nycmocha.execute()
                               .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                     ( error ) => {
                                       // console.log( error );
                                       expect( error ).to.be.an( Error );
                                       expect( error.message === errmsg ).to.be.ok();
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                      }).not.to.throwException(( error ) => { console.log( error )});
    });
    it( "should be callable without parameter 'obj' {object} but get rejected", ( done ) => {
        const args    = [ ];
        const errmsg  = "execute: Missing property 'obj.opts'.";
        expect(() => { nycmocha.execute( undefined, undefined, { args })
                               .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                     ( error ) => {
                                       // console.log( error );
                                       expect( error ).to.be.an( Error );
                                       expect( error.message === errmsg ).to.be.ok();
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                      }).not.to.throwException(( error ) => { console.log( error )});
    });
    it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing options.cwd)", ( done ) => {
        const obj    = options.toArgs( env.grunt, env.task );
        const errmsg = "execute: Missing property 'options.cwd'.";
        expect(() => { delete obj.opts.cwd;
                       nycmocha.execute( env.grunt, env.task, obj )
                               .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                     ( error ) => {
                                       // console.log( error );
                                       expect( error ).to.be.an( Error );
                                       expect( error.message === errmsg ).to.be.ok();
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                     }).not.to.throwException(( error ) => { console.log( error )});
    });
    it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing options.node.exec and options.quiet = 'inherit'))", ( done ) => {
        const obj    = options.toArgs( env.grunt, env.task );
        const errmsg = "execute: Missing property 'options.node.exec'.";
        expect(() => { delete obj.opts.node.exec;
                       nycmocha.execute( env.grunt, env.task, obj )
                               .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                     ( error ) => {
                                       // console.log( error );
                                       expect( error ).to.be.an( Error );
                                       expect( error.message === errmsg ).to.be.ok();
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                     }).not.to.throwException(( error ) => { console.log( error )});
    });
    it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing options.node.exec and options.quiet = 'ignore')", ( done ) => {
        const obj    = options.toArgs( env.grunt, env.task );
        const errmsg = "execute: Missing property 'options.node.exec'.";
        expect(() => { delete obj.opts.node.exec;
                       obj.opts.quiet = "ignore";
                       nycmocha.execute( env.grunt, env.task, obj )
                               .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                     ( error ) => {
                                       // console.log( error );
                                       expect( error ).to.be.an( Error );
                                       expect( error.message === errmsg ).to.be.ok();
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                     }).not.to.throwException(( error ) => { console.log( error )});
    });
    it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and otions.dryrun = {true}", ( done ) => {
        const obj    = options.toArgs( env.grunt, env.task );
        const errmsg = "execute: Missing property 'options.node.exec'.";
        expect(() => { obj.opts.dryrun = true;
                       nycmocha.execute( env.grunt, env.task, obj )
                               .then(( value ) => {
                                       // console.log( value );
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                     }).not.to.throwException(( error ) => { console.log( error )});
    });
    it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (options.quiet === true, dryrun)", ( done ) => {
        const obj      = options.toArgs( env.grunt, env.task );
        const fn       = nycmocha.spawn;
        const retval   = "mocked spawn";
        nycmocha.spawn = async () => { return retval };
        expect(() => { obj.opts.quiet = true;
                       nycmocha.execute( env.grunt, env.task, obj )
                               .then(( value ) => {
                                       // console.log( value );
                                       expect( value ).to.be( retval );
                                       nycmocha.spawn = fn;
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                     }).not.to.throwException(( error ) => { console.log( error )});
    });
  });
});