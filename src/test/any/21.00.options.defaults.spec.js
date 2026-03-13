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
        expect( defaults.getMochaOptions        ).not.to.be( undefined  );
        expect( defaults.getMochaOptions        ).not.to.be( null       );
        expect( defaults.getMochaOptions        ).to.be.a(   "function" );
    });
    it( "Function 'getNodeOptions' should exist", () => {
        expect( defaults.getNodeOptions         ).not.to.be( undefined  );
        expect( defaults.getNodeOptions         ).not.to.be( null       );
        expect( defaults.getNodeOptions         ).to.be.a(   "function" );
    });
    it( "Function 'getNYCCoverageOptions' should exist", () => {
        expect( defaults.getNYCCoverageOptions  ).not.to.be( undefined  );
        expect( defaults.getNYCCoverageOptions  ).not.to.be( null       );
        expect( defaults.getNYCCoverageOptions  ).to.be.a(   "function" );
    });
    it( "Function 'getNYCSourcemapOptions' should exist", () => {
        expect( defaults.getNYCSourcemapOptions ).not.to.be( undefined  );
        expect( defaults.getNYCSourcemapOptions ).not.to.be( null       );
        expect( defaults.getNYCSourcemapOptions ).to.be.a(   "function" );
    });
    it( "Function 'getNYCOptions' should exist", () => {
        expect( defaults.getNYCOptions          ).not.to.be( undefined  );
        expect( defaults.getNYCOptions          ).not.to.be( null       );
        expect( defaults.getNYCOptions          ).to.be.a(   "function" );
    });
  });
});
