/**
 *  © 2020, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.00.tasks.nycmocha.spec.ts - Testing module 'lib/task/nycmocha.js'", () => {
    const tasks   = require( "../../lib/tasks/nycmocha"   );
    const nycmoc  = require( "../../lib/options/nycmocha" );

    describe( "Testing exports of module 'nycmocha'", () => {
      it( "Function 'executeNYCMocha' should exist", () => {
          expect( tasks.executeNYCMocha ).not.to.be( undefined  );
          expect( tasks.executeNYCMocha ).not.to.be( null       );
          expect( tasks.executeNYCMocha ).to.be.a(   "function" );
      });
      it( "Function 'runTaskNYCMocha' should exist", () => {
          expect( tasks.runTaskNYCMocha ).not.to.be( undefined  );
          expect( tasks.runTaskNYCMocha ).not.to.be( null       );
          expect( tasks.runTaskNYCMocha ).to.be.a(   "function" );
      });
      it( "Function 'registerMultiTaskNYCMocha' should exist", () => {
          expect( tasks.registerMultiTaskNYCMocha ).not.to.be( undefined  );
          expect( tasks.registerMultiTaskNYCMocha ).not.to.be( null       );
          expect( tasks.registerMultiTaskNYCMocha ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'executeNYCMocha' of module 'nycmocha'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "executeNYCMocha: Missing property 'obj.args'.";
          expect(() => { tasks.executeNYCMocha()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'obj' {object} but get rejected", ( done ) => {
          const args    = [ ];
          const errmsg  = "executeNYCMocha: Missing property 'obj.opts'.";
          expect(() => { tasks.executeNYCMocha( undefined, undefined, { args })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing options.cwd)", ( done ) => {
          const promise = nycmoc.toArgs( env.grunt, env.task );
          const errmsg  = "executeNYCMocha: Missing property 'options.cwd'.";
          expect(() => { promise.then(( obj ) => {
                           delete obj.opts.cwd;
                           return tasks.executeNYCMocha( env.grunt, env.task, obj )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing options.node.exec)", ( done ) => {
          const promise = nycmoc.toArgs( env.grunt, env.task );
          const errmsg  = "executeNYCMocha: Missing property 'options.node.exec'.";
          expect(() => { promise.then(( obj ) => {
                           delete obj.opts.node.exec;
                           return tasks.executeNYCMocha( env.grunt, env.task, obj )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (options.quiet === true, dryrun)", ( done ) => {
          const promise = nycmoc.toArgs( env.grunt, env.task );
          const errmsg  = "executeNYCMocha: Missing property 'options.node.exec'.";
          expect(() => { promise.then(( obj ) => {
                           obj.opts.quiet = true;
                           return tasks.executeNYCMocha( env.grunt, env.task, obj )
                              .then(( value ) => {
                                      // console.log( value );
                                      done();
                               });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
    });
    describe( "Testing function 'runTaskNYCMocha' of module 'nycmocha'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "nycmocha.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { tasks.runTaskNYCMocha()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt} and 'task' {task} but get rejected", ( done ) => {
          const errmsg = "nycmocha.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { tasks.runTaskNYCMocha( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
    });
    describe( "Testing function 'registerMultiTaskNYCMocha' of module 'nycmocha'", () => {
      const errmsg      = "Cannot read property 'registerMultiTask' of undefined";
      const errmsg_v_16 = "Cannot read properties of undefined (reading 'registerMultiTask')"
      it( "should not be callable without parameters", () => {
          expect(() => { tasks.registerMultiTaskNYCMocha(); }).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
          });
      });
      it( "should be callable with parameter 'grunt' {grunt}", () => {
          expect(() => { tasks.registerMultiTaskNYCMocha( env.grunt ); }).not.to.throwException();
      });
    });
  });
})();
