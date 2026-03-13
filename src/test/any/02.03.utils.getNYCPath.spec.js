/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/utils.js'`, () => {
  const utils     = require( "../../lib/utils" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/utils'", () => {
    it( "Function 'getNYCPath' should exist", () => {
        expect( utils.getNYCPath      ).not.to.be( undefined  );
        expect( utils.getNYCPath      ).not.to.be( null       );
        expect( utils.getNYCPath      ).to.be.a(   "function" );
    });
  });
  describe( "Testing function 'getNYCPath' of module 'lib/utils'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { utils.getNYCPath(); }).not.to.throwException();
    });
    it( "should return a path {string}", () => {
        const value = utils.getNYCPath();
        expect( value ).to.be.a( "string" );
    });
  });
});
