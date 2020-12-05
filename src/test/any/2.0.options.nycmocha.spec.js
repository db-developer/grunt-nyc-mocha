/**
 *  © 2020, slashlib.org.
 */
const expect    = require( "expect.js"   );
const path      = require( "path" );

( async function() {
  const constants = require( "./0.0.constants" );
  const env       = await constants.env;

  describe( "2.0.options.nycmocha.spec.ts - Testing module 'lib/options/nycmocha.js'", () => {
    const nycmo = require( "../../lib/options/nycmocha" );

    describe( "Testing exports of module 'options/nycmocha'", () => {
      it( "Function 'getOptions' should exist", () => {
          expect( nycmo.getOptions     ).not.to.be( undefined  );
          expect( nycmo.getOptions     ).not.to.be( null       );
          expect( nycmo.getOptions     ).to.be.a(   "function" );
      });
      it( "Function 'getTaskOptions' should exist", () => {
          expect( nycmo.getTaskOptions ).not.to.be( undefined  );
          expect( nycmo.getTaskOptions ).not.to.be( null       );
          expect( nycmo.getTaskOptions ).to.be.a(   "function" );
      });
      it( "Function 'toArgs' should exist", () => {
          expect( nycmo.toArgs         ).not.to.be( undefined  );
          expect( nycmo.toArgs         ).not.to.be( null       );
          expect( nycmo.toArgs         ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'getOptions' of module 'options/nycmocha'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { nycmo.getOptions(); }).not.to.throwException();
      });
      describe( "should return a value which", () => {
        const value = nycmo.getOptions();
        it( "should be of type object", () => {
            expect( value ).to.be.an( "object" );
        });
        it( "should provide property 'cwd'", () => {
            expect( value.cwd ).not.to.be( undefined );
            expect( value.cwd ).not.to.be( null );
            expect( value.cwd === process.cwd()).to.be.ok();
        });
      });
    });
    describe( "Testing function 'getTaskOptions' of module 'options/nycmocha'", () => {
      it( "should not be callable without parameters", () => {
          const errmsg = "Cannot read property 'options' of undefined";
          expect(() => { nycmo.getTaskOptions(); }).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.a( TypeError );
            expect( error.message === errmsg ).to.be.ok();
          });
      });
      it( "should be callable with parameter 'task' {grunt.task}", () => {
          expect(() => { nycmo.getTaskOptions( env.task ); }).not.to.throwException();
      });
      describe( "should return a value which", () => {
        const value = nycmo.getTaskOptions( env.task );
        // console.log( env.task.data )
        it( "should be of type object", () => {
            expect( value ).to.be.an( "object" );
        });
        it( "should provide property 'cwd'", () => {
            expect( value.cwd ).not.to.be( undefined );
            expect( value.cwd ).not.to.be( null );
            expect( value.cwd === process.cwd()).to.be.ok();
        });
      });
    });
    describe( "Testing function 'toArgsImpl' of module 'options/nycmocha'", () => {
      it( "should be callable without parameter 'grunt' {grunt} but get rejected", ( done ) => {
          const errmsg  = "nycmocha.js - Function 'toArgsImpl': missing parameter 'grunt'.";
          expect(() => { nycmo.toArgsImpl()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'task' {task} but get rejected", ( done ) => {
          const errmsg  = "nycmocha.js - Function 'toArgsImpl': missing parameter 'task'.";
          expect(() => { nycmo.toArgsImpl( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'options' {Object} but get rejected", ( done ) => {
          const errmsg  = "nycmocha.js - Function 'toArgsImpl': missing parameter 'options'.";
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      /** *******************************************************************************************
       *
       *  Test options...
       *
       */// *****************************************************************************************
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve", ( done ) => {
          const options = nycmo.getTaskOptions( env.task );
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.node.options = [ 'fun' ])", ( done ) => {
          const options = nycmo.getTaskOptions( env.task );
                options.node.options = [ "fun" ];
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.node.exec = process.execPath)", ( done ) => {
          const options = nycmo.getTaskOptions( env.task );
                options.node.exec = process.execPath;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.cwd = undefined)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
          delete options.cwd;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.dryrun = true)", ( done ) => {
          const  options        = nycmo.getTaskOptions( env.task );
                 options.dryrun = true;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--dryrun" )).not.to.be.ok(); // gibt's net! :)
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.exec set)", ( done ) => {
          const options = nycmo.getTaskOptions( env.task );
                options.nyc.exec = ".../somewhere/nyc";
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.requires = [ ])", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.requires = [ "require-test" ];
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--require"    )).to.be.ok();
                                      expect( value.args.includes( "require-test" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.excludes = [ ])", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.excludes = [ "exclude-test" ];
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--exclude"    )).to.be.ok();
                                      expect( value.args.includes( "exclude-test" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.includes = [ ])", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.includes = [ "include-test" ];
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--include"    )).to.be.ok();
                                      expect( value.args.includes( "include-test" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.extensions = [ ])", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.extensions = [ "extension-test" ];
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--extension"    )).to.be.ok();
                                      expect( value.args.includes( "extension-test" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.dir = false)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.dir = false;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--report-dir" )).not.to.be.ok();
                                      expect( value.args.includes( path.join( process.cwd(), "coverage" ))).not.to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.dir = 'relative/path' )", ( done ) => {
          const  spath   = "relative/path";
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.dir = spath;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--report-dir"    )).to.be.ok();
                                      expect( value.args.includes( path.join( process.cwd(), spath ))).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.dir = 'C:/absolute/path' )", ( done ) => {
          const  spath   = "/absolute/path";
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.dir = spath;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--report-dir"    )).to.be.ok();
                                      // TODO: make test work on windws and *ix
                                      // expect( value.args.includes( path.join( spath ))).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.reporter = false)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.reporter = false;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--reporter" )).not.to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.reporter = [ 'text' ])", ( done ) => {
          const  reporter = "text";
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.reporter = [ reporter ];
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--reporter" )).to.be.ok();
                                      expect( value.args.includes( "text"       )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.check = true)", ( done ) => {
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.check = true;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--check-coverage" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.perfile = true)", ( done ) => {
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.check   = true;
                 options.nyc.coverage.perfile = true;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--check-coverage" )).to.be.ok();
                                      expect( value.args.includes( "--per-file" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.branches = 90)", ( done ) => {
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.check    = true;
                 options.nyc.coverage.branches = 90;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--check-coverage" )).to.be.ok();
                                      expect( value.args.includes( "--branches" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.functions = 90)", ( done ) => {
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.check    = true;
                 options.nyc.coverage.functions = 90;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--check-coverage" )).to.be.ok();
                                      expect( value.args.includes( "--functions" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.lines = 90)", ( done ) => {
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.check = true;
                 options.nyc.coverage.lines = 90;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--check-coverage" )).to.be.ok();
                                      expect( value.args.includes( "--lines" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.statements = 90)", ( done ) => {
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.coverage.check      = true;
                 options.nyc.coverage.statements = 90;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--check-coverage" )).to.be.ok();
                                      expect( value.args.includes( "--statements" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.clean = undefined)", ( done ) => {
          const  clean    = undefined;
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.clean = clean;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--clean" )).not.to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.clean = true)", ( done ) => {
          const  clean    = true;
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.clean = clean;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--clean" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.clean = false)", ( done ) => {
          const  clean    = false;
          const  options  = nycmo.getTaskOptions( env.task );
                 options.nyc.clean = clean;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--clean" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.create = undefined)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
          delete options.nyc.sourcemap.create;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--produce-source-map" )).not.to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.create = true)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.sourcemap.create = true;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--produce-source-map" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.create = false)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.sourcemap.create = false;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--produce-source-map" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.use = undefined)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
          delete options.nyc.sourcemap.use;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--source-map" )).not.to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.use = true)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.sourcemap.use = true;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--source-map" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.use = false)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.sourcemap.use = false;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--source-map" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.opts = [ ... ])", ( done ) => {
          const  opt     = "--just-another-nyc-opt";
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.opts = [ opt ];
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( opt )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.tmp = 'some/dir')", ( done ) => {
          const  spath   = "some/dir"
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.temp = spath;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--temp-dir" )).to.be.ok();
                                      expect( value.args.includes( path.join( process.cwd(), spath ))).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.tmp = 'C:/absolute/dir')", ( done ) => {
          const  spath   = "/absolute/dir";
          const  options = nycmo.getTaskOptions( env.task );
                 options.nyc.temp = spath;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--temp-dir" )).to.be.ok();
                                      // TODO: make test work on windws and *ix
                                      // expect( value.args.includes( path.join( spath ))).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      /** / ########################################
       *
       *  mocha properties
       *
       */// ########################################
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.exec set)", ( done ) => {
          const options = nycmo.getTaskOptions( env.task );
                options.mocha.exec = ".../somewhere/mocha";
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.bail = false)", ( done ) => {
          const  bail = false;
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.bail = bail;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--bail" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.bail = true)", ( done ) => {
          const  bail = true;
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.bail = bail;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--bail" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.exit = false)", ( done ) => {
          const  exit = false;
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.exit = exit;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--exit" )).not.to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.exit = true)", ( done ) => {
          const  exit = true;
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.exit = exit;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--exit" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.timeout = 30000)", ( done ) => {
          const  timeout = 30000;
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.timeout = timeout;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--timeout" )).to.be.ok();
                                      expect( value.args.includes( timeout )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.ui = 'blubb')", ( done ) => {
          const  ui = "blubb";
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.ui = ui;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--ui" )).to.be.ok();
                                      expect( value.args.includes( ui )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.color = true)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.color = true;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--color" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.recursive = true)", ( done ) => {
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.recursive = true;
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--recursive" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.opts = [ ])", ( done ) => {
          const  option  = "--some-mocha-option";
          const  options = nycmo.getTaskOptions( env.task );
                 options.mocha.opts = [ option ];
          expect(() => { nycmo.toArgsImpl( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value.args );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( option )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
    });
    describe( "Testing function 'toArgs' of module 'options/nycmocha'", () => {
      it( "should be callable without parameters", ( done ) => {
          const errmsg = "nycmocha.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { nycmo.toArgs()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'task' {grunt.task}", ( done ) => {
          const errmsg = "nycmocha.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { nycmo.toArgs( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameter 'grunt' {grunt} and 'task' {grunt.task}", () => {
          expect(() => { nycmo.toArgs( env.grunt, env.task ); }).not.to.throwException();
      });
      describe( "should return a value which", () => {
        // console.log( nycmo.toArgs( env.grunt, env.task ))
        const value = nycmo.toArgs( env.grunt, env.task )
        it( "should be of type Promise", () => {
            expect( value ).to.be.a( Promise );
        });
        it( "the returned Promise should resolve with an object", async () => {
            const resolvedvalue = await value;
            expect( resolvedvalue ).to.be.an( "object" );
            expect( resolvedvalue.args ).to.be.an( "array" );
            expect( resolvedvalue.opts ).to.be.an( "object" );
        });
      });
      describe( "when run with node options, it should return a value which", () => {
        const nodeopt = "-nodeopt";
        env.grunt.config.set([ env.name, "options", "dryrun" ], true );
        const value = nycmo.toArgs( env.grunt, env.task )
        it( "holds option 'dryrun'", async () => {
            const resolvedvalue = await value;
            expect( resolvedvalue ).to.be.an( "object" );
            expect( resolvedvalue.opts ).to.be.an( "object" );
            expect( resolvedvalue.opts.dryrun ).to.be.ok();
            expect( resolvedvalue.args ).to.be.an( "array" );
        });
      });
    });
  });
})();
