/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js"   );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/constants.js'`, () => {
  const constants = require( "../../lib/constants" );

  let env;
  before( async function () {
    const constants = require( "./00.00.constants" );
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/constants'", () => {
    it( "Constant 'TASKNAME' should exist", () => {
        expect( constants.TASKNAME ).not.to.be( undefined );
        expect( constants.TASKNAME ).not.to.be( null      );
        expect( constants.TASKNAME ).to.be.a(   "string"  );
        const expected = "nyc_mocha";
        expect( constants.TASKNAME === expected ).to.be.ok();
    });
    it( "Constant 'TASKDESCRIPTION' should exist", () => {
        expect( constants.TASKDESCRIPTION ).not.to.be( undefined );
        expect( constants.TASKDESCRIPTION ).not.to.be( null      );
        expect( constants.TASKDESCRIPTION ).to.be.a(   "string"  );
        const expected = "Generate coverage reports with nyc from mocha testruns";
        expect( constants.TASKDESCRIPTION === expected ).to.be.ok();
    });
  });
});

