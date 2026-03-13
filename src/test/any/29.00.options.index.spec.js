/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/options/index.js'`, () => {
  const options   = require( "../../lib/options" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/options'", () => {
    it( "Function 'toArgs' should exist", () => {
        expect( options.toArgs ).not.to.be( undefined  );
        expect( options.toArgs ).not.to.be( null       );
        expect( options.toArgs ).to.be.a(   "function" );
    });
  });
  describe( "Testing function 'toArgs' of module 'lib/options'", () => {
    describe( "Testing parameters of function 'toArgs'", () => {
      it( "should not be callable without parameters", () => {
          const errmsg = "Function 'toArgs': missing parameter 'task'.";
          expect(() => { options.toArgs()}).to.throwException(( error ) => { 
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect( error.message === errmsg ).to.be.ok();
          });
      });

      it( "should not be callable without parameter 'task' {grunt.task}", () => {
          const errmsg = "Function 'toArgs': missing parameter 'task'.";
          expect(() => { options.toArgs( env.grunt )}).to.throwException(( error ) => { 
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect( error.message === errmsg ).to.be.ok();
          });
      });

      it( "should not be callable without parameter 'grunt' {grunt}", () => {
          const errmsg = "Function 'toArgsImpl': missing parameter 'grunt'.";
          expect(() => { options.toArgs( undefined, env.task )}).to.throwException(( error ) => { 
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect( error.message === errmsg ).to.be.ok();
          });
      });
      
      it( "should be callable with parameter 'grunt' {grunt} and 'task' {grunt.task}", () => {
          expect(() => { options.toArgs( env.grunt, env.task ); }).not.to.throwException();
      });
    });
    describe( "Testing returned value of function 'toArgs'", () => {
      it( "should NOT be of type Promise", () => {
          expect(() => {
            const value = options.toArgs( env.grunt, env.task );
            expect( value ).not.to.be.a( Promise );
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "the returned Promise should resolve with an object", async () => {
          expect(() => {
            const value = options.toArgs( env.grunt, env.task );
            expect( value      ).to.be.an( "object" );
            expect( value.args ).to.be.an( "array"  );
            expect( value.opts ).to.be.an( "object" );
          }).not.to.throwException(( error ) => { console.log( error )});
      });
    });
  });
});
