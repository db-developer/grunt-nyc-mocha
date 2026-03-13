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
    it( "Function 'getNYCCoverageOptions' should exist", () => {
        expect( defaults.getNYCCoverageOptions ).not.to.be( undefined  );
        expect( defaults.getNYCCoverageOptions ).not.to.be( null       );
        expect( defaults.getNYCCoverageOptions ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'getNYCCoverageOptions' of module 'lib/options/defaults'", () => {
    it( "should return an object", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options ).not.to.be( undefined );
        expect( options ).not.to.be( null      );
        expect( options ).to.be.an(  "object"  );
    });

    it( "should return a new object on every call", () => {
        const options1 = defaults.getNYCCoverageOptions();
        const options2 = defaults.getNYCCoverageOptions();
        expect( options1 ).not.to.be( options2 );
    });

    it( "should contain all expected option properties", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options ).to.have.key( "branches"   );
        expect( options ).to.have.key( "check"      );
        expect( options ).to.have.key( "dir"        );
        expect( options ).to.have.key( "functions"  );
        expect( options ).to.have.key( "lines"      );
        expect( options ).to.have.key( "perfile"    );
        expect( options ).to.have.key( "reporter"   );
        expect( options ).to.have.key( "statements" );
    });

    it( "should contain exactly the expected number of properties", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( Object.keys( options ).length ).to.be( 8 );
    });

    it( "should not contain unexpected properties", () => {
        const options  = defaults.getNYCCoverageOptions();
        const expected = [
          "branches",
          "check",
          "dir",
          "functions",
          "lines",
          "perfile",
          "reporter",
          "statements"
        ];
        expect( Object.keys( options ).sort()).to.eql( expected.sort());
    });

    it( "option 'branches' should default to false", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options.branches ).to.be( false );
    });

    it( "option 'check' should default to false", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options.check ).to.be( false );
    });

    it( "option 'dir' should default to false", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options.dir ).to.be( false );
    });

    it( "option 'functions' should default to false", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options.functions ).to.be( false );
    });

    it( "option 'lines' should default to false", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options.lines ).to.be( false );
    });

    it( "option 'perfile' should default to false", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options.perfile ).to.be( false );
    });

    it( "option 'reporter' should default to false", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options.reporter ).to.be( false );
    });

    it( "option 'statements' should default to false", () => {
        const options = defaults.getNYCCoverageOptions();
        expect( options.statements ).to.be( false );
    });
  });
});
