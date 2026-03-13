/**
 *  © 2026, slashtasks.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/task/nycmocha.js'`, () => {
  const tasks     = require( "../../lib/tasks/nycmocha" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/task/nycmocha'", () => {
    it( "Function 'getMissingMessage' should exist", () => {
        expect( tasks.getMissingMessage ).not.to.be( undefined  );
        expect( tasks.getMissingMessage ).not.to.be( null       );
        expect( tasks.getMissingMessage ).to.be.a(   "function" );
    });
    it( "Function 'execute' should exist", () => {
        expect( tasks.execute           ).not.to.be( undefined  );
        expect( tasks.execute           ).not.to.be( null       );
        expect( tasks.execute           ).to.be.a(   "function" );
    });
    it( "Function 'spawn' should exist", () => {
        expect( tasks.spawn            ).not.to.be( undefined  );
        expect( tasks.spawn            ).not.to.be( null       );
        expect( tasks.spawn            ).to.be.a(   "function" );
    });
    it( "Function 'runTask' should exist", () => {
        expect( tasks.runTask          ).not.to.be( undefined  );
        expect( tasks.runTask          ).not.to.be( null       );
        expect( tasks.runTask          ).to.be.a(   "function" );
    });
  });
});