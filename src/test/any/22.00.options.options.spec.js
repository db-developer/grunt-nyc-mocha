/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/options/options.js'`, () => {
  const options   = require( "../../lib/options/options" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/options/options'", () => {
    it( "Function 'getOptions' should exist", () => {
        expect( options.getOptions     ).not.to.be( undefined  );
        expect( options.getOptions     ).not.to.be( null       );
        expect( options.getOptions     ).to.be.a(   "function" );
    });
    it( "Function 'getTaskOptions' should exist", () => {
        expect( options.getTaskOptions ).not.to.be( undefined  );
        expect( options.getTaskOptions ).not.to.be( null       );
        expect( options.getTaskOptions ).to.be.a(   "function" );
    });
  });
});
