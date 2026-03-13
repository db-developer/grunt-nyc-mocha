/**
 *  © 2026, slashtasks.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/tasks/index.js'`, () => {
  const tasks     = require( "../../lib/tasks" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/tasks'", () => {
    it( "Function 'runTask' should exist", () => {
        expect( tasks.runTask ).not.to.be( undefined  );
        expect( tasks.runTask ).not.to.be( null       );
        expect( tasks.runTask ).to.be.a(   "function" );
    });
  });
});    