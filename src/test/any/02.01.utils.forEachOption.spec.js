/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/utils.js'`, () => {
  const utils     = require( "../../lib/utils" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/utils'", () => {
    it( "Function 'forEachOption' should exist", () => {
        expect( utils.forEachOption ).not.to.be( undefined  );
        expect( utils.forEachOption ).not.to.be( null       );
        expect( utils.forEachOption ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'forEachOption' of module 'lib/utils'", () => {

    it( "should iterate over array and call callback for each element", () => {
        const calls = [];
        const grunt = {
          verbose: {
            ok: () => { throw new Error( "skip should not be called" ); }
          }
        };

        const options = [ 1, 2, 3 ];

        utils.forEachOption( grunt, options, "testOption", ( value, index ) => {
          calls.push({ value, index });
        });

        expect( calls.length ).to.be( 3 );
        expect( calls[0].value ).to.be( 1 );
        expect( calls[1].value ).to.be( 2 );
        expect( calls[2].value ).to.be( 3 );
    });


    it( "should call grunt.verbose.ok when array is empty", () => {
        let called = false;

        const grunt = {
          verbose: {
            ok: () => { called = true; }
          }
        };

        utils.forEachOption( grunt, [], "emptyArray", () => {});

        expect( called ).to.be( true );
    });


    it( "should throw TypeError when callback is missing", () => {
        let called = false;

        const grunt = {
          verbose: {
            ok: () => { called = true; }
          }
        };

        expect(() => { 
          utils.forEachOption( grunt, [ 1, 2 ], "noCallback" );
        }).to.throwError( TypeError );
    });


    it( "should throw TypeError if options is not an array", () => {
        const grunt = {
          verbose: {
            ok: () => {}
          }
        };

        expect(() => {
          utils.forEachOption( grunt, "not-an-array", "invalid", () => {} );
        }).to.throwError( TypeError );
    });


    it( "should pass correct values to callback (value, index)", () => {
        const received = [];

        const grunt = {
          verbose: {
            ok: () => {}
          }
        };

        const options = [ "a", "b" ];

        utils.forEachOption( grunt, options, "letters", ( value, index ) => {
          received.push([ value, index ]);
        });

        expect( received.length ).to.be( 2 );
        expect( received[0] ).to.eql([ "a", 0 ]);
        expect( received[1] ).to.eql([ "b", 1 ]);
    });
  });
});
