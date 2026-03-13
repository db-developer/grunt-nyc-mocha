/**
 *  © 2020, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/index.js'`, () => {
  const index     = require( "../../lib/index" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib'", () => {
    it( "Function 'registerMultiTask' should exist", () => {
        expect( index.registerMultiTask ).not.to.be( undefined  );
        expect( index.registerMultiTask ).not.to.be( null       );
        expect( index.registerMultiTask ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'registerMultiTask' of module 'lib'", () => {
    it( "Testing function 'registerMultiTask'.", () => {
        let   taskname, taskdescription;
        const grunt = {
          registerMultiTask: ( name, description ) => { taskname = name; taskdescription = description; }
        }
        expect(() => { 
          index.registerMultiTask( grunt );
          expect( taskname        ).to.be( "nyc_mocha" );
          expect( taskdescription ).to.be( "Generate coverage reports with nyc from mocha testruns" );
        }).not.to.throwException(( error ) => {
          console.log( error );
        });
    });
  });
});
