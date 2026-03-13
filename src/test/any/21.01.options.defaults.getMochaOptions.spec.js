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
    it( "Function 'getMochaOptions' should exist", () => {
        expect( defaults.getMochaOptions ).not.to.be( undefined  );
        expect( defaults.getMochaOptions ).not.to.be( null       );
        expect( defaults.getMochaOptions ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'getMochaOptions' of module 'lib/options/defaults'", () => {
    it( "should return an object", () => {
        const options = defaults.getMochaOptions();
        expect( options ).not.to.be( undefined );
        expect( options ).not.to.be( null      );
        expect( options ).to.be.an(  "object"  );
    });

    it( "should return a new object on every call", () => {
        const options1 = defaults.getMochaOptions();
        const options2 = defaults.getMochaOptions();
        expect( options1 ).not.to.be( options2 );
    });

    it( "should contain all expected option properties", () => {
        const options = defaults.getMochaOptions();
        expect( options ).to.have.key( "bail"      );
        expect( options ).to.have.key( "color"     );
        expect( options ).to.have.key( "exec"      );
        expect( options ).to.have.key( "exit"      );
        expect( options ).to.have.key( "opts"      );
        expect( options ).to.have.key( "recursive" );
        expect( options ).to.have.key( "timeout"   );
        expect( options ).to.have.key( "ui"        );
    });

    it( "should not contain unexpected properties", () => {
        const options  = defaults.getMochaOptions();
        const expected = [
          "bail",
          "color",
          "exec",
          "exit",
          "opts",
          "recursive",
          "timeout",
          "ui"
        ];
        expect( Object.keys( options ).sort()).to.eql( expected.sort());
    });

    it( "should contain exactly the expected number of properties", () => {
        const options = defaults.getMochaOptions();
        expect( Object.keys( options ).length).to.be( 8 );
    });
    
    it( "option 'bail' should default to undefined", () => {
        const options = defaults.getMochaOptions();
        expect( options.bail ).to.be( undefined );
    });

    it( "option 'color' should default to false", () => {
        const options = defaults.getMochaOptions();
        expect( options.color ).to.be( false );
    });

    it( "option 'exec' should default to false", () => {
        const options = defaults.getMochaOptions();
        expect( options.exec ).to.be( false );
    });

    it( "option 'exit' should default to false", () => {
        const options = defaults.getMochaOptions();
        expect( options.exit ).to.be( false );
    });

    it( "option 'opts' should default to false", () => {
        const options = defaults.getMochaOptions();
        expect( options.opts ).to.be( false );
    });

    it( "option 'recursive' should default to false", () => {
        const options = defaults.getMochaOptions();
        expect( options.recursive ).to.be( false );
    });

    it( "option 'timeout' should default to false", () => {
        const options = defaults.getMochaOptions();
        expect( options.timeout ).to.be( false );
    });

    it( "option 'ui' should default to false", () => {
        const options = defaults.getMochaOptions();
        expect( options.ui ).to.be( false );
    });

  });
});
