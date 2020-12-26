/**
 *  © 2020, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "09.00.index.spec.ts - Testing module 'lib/index.js'", () => {
    const idx     = require( "../../lib/index" );

    describe( "Testing exports of module 'index'", () => {
      it( "Function 'registerMultiTaskNYCMocha' should exist", () => {
          expect( idx.registerMultiTaskNYCMocha ).not.to.be( undefined  );
          expect( idx.registerMultiTaskNYCMocha ).not.to.be( null       );
          expect( idx.registerMultiTaskNYCMocha ).to.be.a(   "function" );
      });
    });
  });
})();
