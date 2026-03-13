/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/options/defaults.js'`, () => {
  const defaults  = require( "../../lib/options/defaults" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/options/defaults'", () => {
    it( "Function 'getNYCSourcemapOptions' should exist", () => {
        expect( defaults.getNYCSourcemapOptions ).not.to.be( undefined  );
        expect( defaults.getNYCSourcemapOptions ).not.to.be( null       );
        expect( defaults.getNYCSourcemapOptions ).to.be.a(   "function" );
    });
  });
  
  describe( "Testing function 'getNYCSourcemapOptions' of module 'lib/options/defaults'", () => {
    it( "should return an object", () => {
        const options = defaults.getNYCSourcemapOptions();
        expect( options ).not.to.be( undefined );
        expect( options ).not.to.be( null      );
        expect( options ).to.be.an(  "object"  );
    });

    it( "should return a new object on every call", () => {
        const options1 = defaults.getNYCSourcemapOptions();
        const options2 = defaults.getNYCSourcemapOptions();
        expect( options1 ).not.to.be( options2 );
    });

    it( "should contain all expected option properties", () => {
        const options = defaults.getNYCSourcemapOptions();
        expect( options ).to.have.key( "create" );
        expect( options ).to.have.key( "use"    );
    });      

    it( "should not contain unexpected properties", () => {
        const options  = defaults.getNYCSourcemapOptions();
        const expected = [
          "create",
          "use"
        ];
        expect( Object.keys( options ).sort()).to.eql( expected.sort());
    });      

    it( "should contain exactly the expected number of properties", () => {
        const options = defaults.getNYCSourcemapOptions();
        expect( Object.keys( options ).length ).to.be( 2 );
    });      

    it( "option 'create' should default to undefined", () => {
        const options = defaults.getNYCSourcemapOptions();
        expect( options.create ).to.be( undefined );
    });

    it( "option 'use' should default to undefined", () => {
        const options = defaults.getNYCSourcemapOptions();
        expect( options.use ).to.be( undefined );
    });
  });
});
