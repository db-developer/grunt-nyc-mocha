/**
 *  © 2026, slashtasks.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/task/nycmocha.js'`, () => {
  const nycmocha  = require( "../../lib/tasks/nycmocha" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/task/nycmocha'", () => {
    it( "Function 'getMissingMessage' should exist", () => {
        expect( nycmocha.getMissingMessage ).not.to.be( undefined  );
        expect( nycmocha.getMissingMessage ).not.to.be( null       );
        expect( nycmocha.getMissingMessage ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'getMissingMessage' of module 'lib/task/nycmocha'", () => {

    it( "should return normalized message for property 'obj.args'", () => {
        const result = nycmocha.getMissingMessage( "obj.args" );
        expect( result ).to.be( "execute: Missing property 'obj.args'." );
    });

    it( "should return normalized message for property 'obj.opts'", () => {
        const result = nycmocha.getMissingMessage( "obj.opts" );
        expect( result ).to.be( "execute: Missing property 'obj.opts'." );
    });

    it( "should return normalized message for nested property names", () => {
        const result = nycmocha.getMissingMessage( "options.node.exec" );
        expect( result ).to.be( "execute: Missing property 'options.node.exec'." );
    });

    it( "should handle empty string as property name", () => {
        const result = nycmocha.getMissingMessage( "" );
        expect( result ).to.be( "execute: Missing property ''." );
    });

    it( "should stringify non-string values (number)", () => {
        const result = nycmocha.getMissingMessage( 123 );
        expect( result ).to.be( "execute: Missing property '123'." );
    });

    it( "should stringify undefined property name", () => {
        const result = nycmocha.getMissingMessage( undefined );
        expect( result ).to.be( "execute: Missing property 'undefined'." );
    });

    it( "should stringify null property name", () => {
        const result = nycmocha.getMissingMessage( null );
        expect( result ).to.be( "execute: Missing property 'null'." );
    });
  });
});