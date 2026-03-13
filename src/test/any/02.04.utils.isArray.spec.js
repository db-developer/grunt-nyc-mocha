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
    it( "Function 'isArray' should exist", () => {
        expect( utils.isArray ).not.to.be( undefined  );
        expect( utils.isArray ).not.to.be( null       );
        expect( utils.isArray ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'isArray' of module 'lib/utils'", () => {
    it( "should not be callable without parameters", () => {
        expect(() => { utils.isArray(); }).to.throwException();
    });
    it( "should be callable with parameter 'value' {Array}", () => {
        expect(() => { utils.isArray([ ]); }).not.to.throwException();
    });
    it( "should be callable with parameters 'value' {Array} and 'name' {string}", () => {
        expect(() => { utils.isArray([ ], "name" ); }).not.to.throwException();
    });
  });
});
