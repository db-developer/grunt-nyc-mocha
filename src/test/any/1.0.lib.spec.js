/**
 *  © 2020, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./0.0.constants" );
  const env       = await constants.env;

  describe( "1.0.options.nycmocha.spec.ts - Testing module 'lib/lib.js'", () => {
    const lib     = require( "../../lib/lib" );
    const nycmoc  = require( "../../lib/options/nycmocha" );

    describe( "Testing exports of module 'lib'", () => {
      it( "Function 'getMochaPath' should exist", () => {
          expect( lib.getMochaPath    ).not.to.be( undefined  );
          expect( lib.getMochaPath    ).not.to.be( null       );
          expect( lib.getMochaPath    ).to.be.a(   "function" );
      });
      it( "Function 'getNYCPath' should exist", () => {
          expect( lib.getNYCPath      ).not.to.be( undefined  );
          expect( lib.getNYCPath      ).not.to.be( null       );
          expect( lib.getNYCPath      ).to.be.a(   "function" );
      });
      it( "Function 'isArray' should exist", () => {
          expect( lib.isArray         ).not.to.be( undefined  );
          expect( lib.isArray         ).not.to.be( null       );
          expect( lib.isArray         ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'getMochaPath' of module 'lib'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { lib.getMochaPath(); }).not.to.throwException();
      });
      it( "should return a path {string}", () => {
          const value = lib.getMochaPath();
          expect( value ).to.be.a( "string" );
      });
    });
    describe( "Testing function 'getNYCPath' of module 'lib'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { lib.getNYCPath(); }).not.to.throwException();
      });
      it( "should return a path {string}", () => {
          const value = lib.getNYCPath();
          expect( value ).to.be.a( "string" );
      });
    });
    describe( "Testing function 'isArray' of module 'lib'", () => {
      it( "should not be callable without parameters", () => {
          expect(() => { lib.isArray(); }).to.throwException();
      });
      it( "should not be callable with parameter 'grunt' {grunt} soley", () => {
          expect(() => { lib.isArray( env.grunt ); }).to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt} and 'options' {Array}", () => {
          expect(() => { lib.isArray( env.grunt, [ ]); }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'options' {Array} and 'name' {string}", () => {
          expect(() => { lib.isArray( env.grunt, [ ] , "name" ); }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'options' {Array}, 'name' {string} and callback", () => {
          const callback = () => { };
          expect(() => { lib.isArray( env.grunt, [ "blubb" ] , "name", callback ); }).not.to.throwException();
      });
    });
  });
})();
