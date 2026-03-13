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
    it( "Function 'runTask' should exist", () => {
        expect( nycmocha.runTask ).not.to.be( undefined  );
        expect( nycmocha.runTask ).not.to.be( null       );
        expect( nycmocha.runTask ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'runTask' of module 'lib/task/nycmocha'", () => {
    it( "should be callable without parameters but get rejected", ( done ) => {
        const errmsg = "Function 'toArgs': missing parameter 'task'.";
        expect(() => { nycmocha.runTask()
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
    it( "should be callable with parameter 'task' {task} and get rejected", ( done ) => {
        const errmsg = "Function 'toArgsImpl': missing parameter 'grunt'.";
        expect(() => { nycmocha.runTask( undefined, env.task )
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
    it( "should be callable with parameters 'grunt' {grunt} and 'task' {task} and resolve", ( done ) => {
        const val = "success";
        const fn  = nycmocha.execute;
        nycmocha.execute = () => { return val };

        expect(() => { nycmocha.runTask( env.grunt, env.task )
                               .then(( value ) => {
                                       // console.log( value );
                                       expect( value ).to.be( val );
                                       nycmocha.execute = fn;
                                       done();
                                })
                               .catch(( error ) => { done( error ); });
                     }).not.to.throwException(( error ) => { console.log( error )});
    });
  });
});