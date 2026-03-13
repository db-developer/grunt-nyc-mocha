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
    it( "Function 'getNodeOptions' should exist", () => {
        expect( defaults.getNodeOptions ).not.to.be( undefined  );
        expect( defaults.getNodeOptions ).not.to.be( null       );
        expect( defaults.getNodeOptions ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'getNodeOptions' of module 'lib/options/defaults'", () => {
    it( "should return an object", () => {
        const options = defaults.getNodeOptions();
        expect( options ).not.to.be( undefined );
        expect( options ).not.to.be( null      );
        expect( options ).to.be.an(  "object"  );
    });

    it( "should return a new object on every call", () => {
        const options1 = defaults.getNodeOptions();
        const options2 = defaults.getNodeOptions();
        expect( options1 ).not.to.be( options2 );
    });

    it( "should contain all expected option properties", () => {
        const options = defaults.getNodeOptions();
        expect( options ).to.have.key( "options" );
        expect( options ).to.have.key( "exec"    );
    });

    it( "should not contain unexpected properties", () => {
        const options  = defaults.getNodeOptions();
        const expected = [
          "options",
          "exec"
        ];
        expect( Object.keys( options ).sort()).to.eql( expected.sort());
    });

    it( "should contain exactly the expected number of properties", () => {
        const options = defaults.getNodeOptions();
        expect( Object.keys( options ).length).to.be( 2 );
    });

    it( "option 'options' should default to false", () => {
        const options = defaults.getNodeOptions();
        expect( options.options ).to.be( false );
    });

    it( "option 'exec' should default to false", () => {
        const options = defaults.getNodeOptions();
        expect( options.exec ).to.be( false );
    });

  });
});
