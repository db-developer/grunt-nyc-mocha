/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/options/options.js'`, () => {
  const options   = require( "../../lib/options/options" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/options/options'", () => {
    it( "Function 'getOptions' should exist", () => {
        expect( options.getOptions     ).not.to.be( undefined  );
        expect( options.getOptions     ).not.to.be( null       );
        expect( options.getOptions     ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'getOptions' of module 'lib/options/options'", () => {
    it( "should return an object", () => {
        const opts = options.getOptions();
        expect( opts ).not.to.be( undefined );
        expect( opts ).not.to.be( null      );
        expect( opts ).to.be.an(  "object"  );
    });

    it( "should return a new object on every call", () => {
        const opts1 = options.getOptions();
        const opts2 = options.getOptions();
        expect( opts1 ).not.to.be( opts2 );
    });

    it( "should contain all expected option properties", () => {
        const opts = options.getOptions();
        expect( opts ).to.have.key( "cwd"    );
        expect( opts ).to.have.key( "dryrun" );
    });

    it( "should contain exactly the expected number of properties", () => {
        const opts = options.getOptions();
        expect( Object.keys( opts ).length ).to.be( 2 );
    });

    it( "should not contain unexpected properties", () => {
        const opts  = options.getOptions();
        const expected = [ "cwd", "dryrun" ];
        expect( Object.keys( opts ).sort()).to.eql( expected.sort());
    });

  });
});
