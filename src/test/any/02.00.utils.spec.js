/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js"   );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/utils.js'`, () => {
  const utils     = require( "../../lib/utils" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib'", () => {
    it( "Function 'iterate' should exist", () => {
        expect( utils.forEachOption ).not.to.be( undefined  );
        expect( utils.forEachOption ).not.to.be( null       );
        expect( utils.forEachOption ).to.be.a(   "function" );
    });
    it( "Function 'getMochaPath' should exist", () => {
        expect( utils.getMochaPath  ).not.to.be( undefined  );
        expect( utils.getMochaPath  ).not.to.be( null       );
        expect( utils.getMochaPath  ).to.be.a(   "function" );
    });
    it( "Function 'getNYCPath' should exist", () => {
        expect( utils.getNYCPath    ).not.to.be( undefined  );
        expect( utils.getNYCPath    ).not.to.be( null       );
        expect( utils.getNYCPath    ).to.be.a(   "function" );
    });
    it( "Function 'isArray' should exist", () => {
        expect( utils.isArray       ).not.to.be( undefined  );
        expect( utils.isArray       ).not.to.be( null       );
        expect( utils.isArray       ).to.be.a(   "function" );
    });
    it( "Function 'isArray' should exist", () => {
        expect( utils.isPlainObject ).not.to.be( undefined  );
        expect( utils.isPlainObject ).not.to.be( null       );
        expect( utils.isPlainObject ).to.be.a(   "function" );
    });
  });
});
