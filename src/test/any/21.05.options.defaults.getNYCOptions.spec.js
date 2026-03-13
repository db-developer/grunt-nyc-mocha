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
    it( "Function 'getNYCOptions' should exist", () => {
        expect( defaults.getNYCOptions ).not.to.be( undefined  );
        expect( defaults.getNYCOptions ).not.to.be( null       );
        expect( defaults.getNYCOptions ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'getNYCOptions' of module 'lib/options/defaults'", () => {
    it( "should return an object", () => {
        const options = defaults.getNYCOptions();
        expect( options ).not.to.be( undefined );
        expect( options ).not.to.be( null      );
        expect( options ).to.be.an(  "object"  );
    });

    it( "should return a new object on every call", () => {
        const options1 = defaults.getNYCOptions();
        const options2 = defaults.getNYCOptions();
        expect( options1 ).not.to.be( options2 );
    });

    it( "should contain all expected option properties", () => {
        const options = defaults.getNYCOptions();
        expect( options ).to.have.key( "all"        );
        expect( options ).to.have.key( "clean"      );
        expect( options ).to.have.key( "excludes"   );
        expect( options ).to.have.key( "exec"       );
        expect( options ).to.have.key( "extensions" );
        expect( options ).to.have.key( "includes"   );
        expect( options ).to.have.key( "opts"       );
        expect( options ).to.have.key( "requires"   );
        expect( options ).to.have.key( "temp"       );
    });

    it( "should contain exactly the expected number of properties", () => {
        const options = defaults.getNYCOptions();
        expect( Object.keys( options ).length ).to.be( 9 );
    });      

    it( "should not contain unexpected properties", () => {
        const options  = defaults.getNYCOptions();
        const expected = [
          "all",
          "clean",
          "excludes",
          "exec",
          "extensions",
          "includes",
          "opts",
          "requires",
          "temp"
        ];
        expect( Object.keys( options ).sort()).to.eql( expected.sort());
    });

    it( "option 'all' should default to false", () => {
        const options = defaults.getNYCOptions();
        expect( options.all ).to.be( false );
    });

    it( "option 'clean' should default to undefined", () => {
        const options = defaults.getNYCOptions();
        expect( options.clean ).to.be( undefined );
    });

    it( "option 'excludes' should default to false", () => {
        const options = defaults.getNYCOptions();
        expect( options.excludes ).to.be( false );
    });

    it( "option 'exec' should default to false", () => {
        const options = defaults.getNYCOptions();
        expect( options.exec ).to.be( false );
    });

    it( "option 'extensions' should default to false", () => {
        const options = defaults.getNYCOptions();
        expect( options.extensions ).to.be( false );
    });

    it( "option 'includes' should default to false", () => {
        const options = defaults.getNYCOptions();
        expect( options.includes ).to.be( false );
    });

    it( "option 'opts' should default to false", () => {
        const options = defaults.getNYCOptions();
        expect( options.opts ).to.be( false );
    });

    it( "option 'requires' should default to false", () => {
        const options = defaults.getNYCOptions();
        expect( options.requires ).to.be( false );
    });

    it( "option 'temp' should default to false", () => {
        const options = defaults.getNYCOptions();
        expect( options.temp ).to.be( false );
    });
  });
});
