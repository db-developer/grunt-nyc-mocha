/**
 *  © 2020, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./0.0.constants" );
  const env       = await constants.env;

  describe( "3.9.tasks.spec.ts - Testing module 'lib/tasks/index.js'", () => {
    const tasks   = require( "../../lib/tasks" );

    describe( "Testing exports of module 'tasks'", () => {
      it( "Function 'executeNYCMocha' should exist", () => {
          expect( tasks.runTaskNYCMocha ).not.to.be( undefined  );
          expect( tasks.runTaskNYCMocha ).not.to.be( null       );
          expect( tasks.runTaskNYCMocha ).to.be.a(   "function" );
      });
    });
  });
})();
