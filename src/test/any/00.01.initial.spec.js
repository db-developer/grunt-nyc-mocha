/**
 *  © 2026, slashlib.org.
 *
 *  Initial tests - to be run in advance to any other test.
 *
 */ // use nodes default assertions
const assert = require( "assert"    );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )}`, () => {
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing for prerequisites.", () => {
    it( "Check for availability of assertion library 'expect.js'", () => {
        assert.doesNotThrow(() => {
            const test = require( "expect.js" );
        }, undefined, "Missing assertion framework 'expect.js'" );
    });
  });
});
