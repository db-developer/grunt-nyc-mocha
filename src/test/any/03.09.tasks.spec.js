/**
 *  © 2020, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.09.tasks.spec.ts - Testing module 'lib/tasks/index.js'", () => {
    const tasks   = require( "../../lib/tasks" );

    describe( "Testing exports of module 'tasks'", () => {
      it( "Function 'registerMultiTaskNYCMocha' should exist", () => {
          expect( tasks.registerMultiTaskNYCMocha ).not.to.be( undefined  );
          expect( tasks.registerMultiTaskNYCMocha ).not.to.be( null       );
          expect( tasks.registerMultiTaskNYCMocha ).to.be.a(   "function" );
      });
      it( "Function 'runTaskNYCMocha' should exist", () => {
          expect( tasks.runTaskNYCMocha           ).not.to.be( undefined  );
          expect( tasks.runTaskNYCMocha           ).not.to.be( null       );
          expect( tasks.runTaskNYCMocha           ).to.be.a(   "function" );
      });
    });
  });
})();
