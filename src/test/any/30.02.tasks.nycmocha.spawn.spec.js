/**
 *  © 2026, slashtasks.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/task/nycmocha.js'`, () => {
  const nycmocha  = require( "../../lib/tasks/nycmocha" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/task/nycmocha'", () => {
    it( "Function 'spawn' should exist", () => {
        expect( nycmocha.spawn ).not.to.be( undefined  );
        expect( nycmocha.spawn ).not.to.be( null       );
        expect( nycmocha.spawn ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'spawn' of module 'lib/task/nycmocha'", () => {
    it( "should get rejected", ( done ) => {
        const errmsg = "successfully rejected";
        const grunt  = {
          util: {
            spawn: ( args, callback ) => { callback( new Error( errmsg ))}
          }
        };
        expect(() => { nycmocha.spawn( grunt, env.task )
                               .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                     ( error ) => {
                                       // console.log( error );
                                       expect( error ).to.be.an( Error );
                                       expect( error.message === errmsg ).to.be.ok();
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should resolve", ( done ) => {
        const result = "mocked result";
        const grunt  = {
          util: {
            spawn: ( args, callback ) => { callback( undefined, result )}
          }
        };
        expect(() => { nycmocha.spawn( grunt, env.task, {})
                               .then(( value ) => {
                                       // console.log( value );
                                       expect( value.result ).to.be( result );
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
  });
});