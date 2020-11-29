/**
 *  © 2020, slashlib.org.
 */
const expect = require( "expect.js" );

( async function() {
  const constants = require( "./0.0.constants" );
  const env       = await constants.env;

  describe( "2.9.options.spec.ts - Testing module 'lib/options/index.js'", () => {
    const options = require( "../../lib/options" );

    describe( "Testing exports of module 'options'", () => {
      it( "Function 'toNYCMochaArgs' should exist", () => {
          expect( options.toNYCMochaArgs ).not.to.be( undefined  );
          expect( options.toNYCMochaArgs ).not.to.be( null       );
          expect( options.toNYCMochaArgs ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'toNYCMochaArgs' of module 'options'", () => {
      it( "should be callable without parameters, but get rejected.", ( done ) => {
          expect(() => { options.toNYCMochaArgs()
                                .then(( value ) => { done( new Error( "Should be rejected!")); },
                                      ( error ) => {
                                        expect( error ).to.be.an( Error );
                                        done();
                                 })
                                .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
    });
  });
})();
