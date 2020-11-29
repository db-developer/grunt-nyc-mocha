/**
 *  © 2020, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./0.0.constants" );
  const env       = await constants.env;

  describe( "9.0.index.spec.ts - Testing module 'lib/index.js'", () => {
    const idx     = require( "../../lib/index" );

    describe( "Testing exports of module 'index'", () => {
      it( "Function 'registerMultiTaskNYCMocha' should exist", () => {
          expect( idx.registerMultiTaskNYCMocha ).not.to.be( undefined  );
          expect( idx.registerMultiTaskNYCMocha ).not.to.be( null       );
          expect( idx.registerMultiTaskNYCMocha ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'registerMultiTaskNYCMocha' of module 'lib'", () => {
      const errmsg  = "Cannot read property 'registerMultiTask' of undefined";
      it( "should not be callable without parameters", () => {
          expect(() => { idx.registerMultiTaskNYCMocha(); }).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect( error.message === errmsg ).to.be.ok();
          });
      });
      it( "should be callable with parameter 'grunt' {grunt}", () => {
          expect(() => { idx.registerMultiTaskNYCMocha( env.grunt ); }).not.to.throwException();
      });
    });
  });
})();
