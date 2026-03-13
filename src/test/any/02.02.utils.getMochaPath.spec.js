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
    it( "Function 'getMochaPath' should exist", () => {
        expect( utils.getMochaPath    ).not.to.be( undefined  );
        expect( utils.getMochaPath    ).not.to.be( null       );
        expect( utils.getMochaPath    ).to.be.a(   "function" );
    });
  });
  describe( "Testing function 'getMochaPath' of module 'lib/utils'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { utils.getMochaPath(); }).not.to.throwException();
    });

    it( "should return a path {string}", () => {
        const value = utils.getMochaPath();
        expect( value ).to.be.a( "string" );
    });
  });
});
