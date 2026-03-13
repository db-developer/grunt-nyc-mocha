/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/options/builder.js'`, () => {
  const builder   = require( "../../lib/options/builder" );
  const options   = require( "../../lib/options/options" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/options/builder'", () => {
    it( "Function 'toArgsImpl' should exist", () => {
        expect( builder.toArgsImpl ).not.to.be( undefined  );
        expect( builder.toArgsImpl ).not.to.be( null       );
        expect( builder.toArgsImpl ).to.be.a(   "function" );
    });
  });

  describe( "Testing function 'toArgsImpl' of module 'lib/options/builder'", () => {
    describe( "Testing parameters of function 'toArgsImpl'", () => {
      it( "should be callable without parameter 'grunt' {grunt} but fail", () => {
          const errmsg  = "Function 'toArgsImpl': missing parameter 'grunt'.";
          expect(() => { builder.toArgsImpl()}).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect( error.message === errmsg ).to.be.ok();
          });
      });

      it( "should be callable without parameter 'task' {task} but get rejected", () => {
          const errmsg  = "Function 'toArgsImpl': missing parameter 'task'.";
          expect(() => { builder.toArgsImpl( env.grunt )}).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect( error.message === errmsg ).to.be.ok();
          });
      });

      it( "should be callable without parameter 'options' {Object} but get rejected", () => {
          const errmsg  = "Function 'toArgsImpl': missing parameter 'options'.";
          expect(() => { builder.toArgsImpl( env.grunt, env.task )}).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect( error.message === errmsg ).to.be.ok();
          });
      });
    });

    describe( "Testing option handling of function 'toArgsImpl'", () => {
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve", () => {
          const opts = options.getTaskOptions( env.task );
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value );
            expect( value ).to.be.an( "object" );
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.node.options = [ 'fun' ])", () => {
          const opts = options.getTaskOptions( env.task );
                opts.node.options = [ "fun" ];
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts )
            // console.log( value );
            expect( value ).to.be.an( "object" );
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.node.exec = process.execPath)", () => {
          const opts = options.getTaskOptions( env.task );
                opts.node.exec = process.execPath;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts )
            // console.log( value );
            expect( value ).to.be.an( "object" );
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.cwd = undefined)", () => {
          const  opts = options.getTaskOptions( env.task );
          delete opts.cwd;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value );
            expect( value ).to.be.an( "object" );
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.dryrun = true)", () => {
          const opts        = options.getTaskOptions( env.task );
                opts.dryrun = true;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--dryrun" )).not.to.be.ok(); // gibt's net! :)
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.exec set)", () => {
          const opts          = options.getTaskOptions( env.task );
                opts.nyc.exec = ".../somewhere/nyc";
          expect(() => {
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value );
            expect( value ).to.be.an( "object" );
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.requires = [ ])", () => {
          const opts              = options.getTaskOptions( env.task );
                opts.nyc.requires = [ "require-test" ];
          expect(() => {
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--require"    )).to.be.ok();
            expect( value.args.includes( "require-test" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.excludes = [ ])", () => {
          const opts              = options.getTaskOptions( env.task );
                opts.nyc.excludes = [ "exclude-test" ];
          expect(() => {
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--exclude"    )).to.be.ok();
            expect( value.args.includes( "exclude-test" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.includes = [ ])", () => {
          const opts              = options.getTaskOptions( env.task );
                opts.nyc.includes = [ "include-test" ];
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--include"    )).to.be.ok();
            expect( value.args.includes( "include-test" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.extensions = [ ])", () => {
          const opts                = options.getTaskOptions( env.task );
                opts.nyc.extensions = [ "extension-test" ];
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--extension"    )).to.be.ok();
            expect( value.args.includes( "extension-test" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.dir = false)", () => {
          const opts                  = options.getTaskOptions( env.task );
                opts.nyc.coverage.dir = false;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--report-dir" )).not.to.be.ok();
            expect( value.args.includes( path.join( process.cwd(), "coverage" ))).not.to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.dir = 'relative/path' )", () => {
          const spath                 = "relative/path";
          const opts                  = options.getTaskOptions( env.task );
                opts.nyc.coverage.dir = spath;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--report-dir"    )).to.be.ok();
            expect( value.args.includes( path.join( process.cwd(), spath ))).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.dir = 'C:/absolute/path' )", () => {
          const spath                 = "/absolute/path";
          const opts                  = options.getTaskOptions( env.task );
                opts.nyc.coverage.dir = spath;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts )
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--report-dir"    )).to.be.ok();
            // TODO: make test work on windws and *ix
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.reporter = false)", () => {
          const opts                       = options.getTaskOptions( env.task );
                opts.nyc.coverage.reporter = false;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--reporter" )).not.to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.reporter = [ 'text' ])", () => {
          const reporter                   = "text";
          const opts                       = options.getTaskOptions( env.task );
                opts.nyc.coverage.reporter = [ reporter ];
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--reporter" )).to.be.ok();
            expect( value.args.includes( "text"       )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.check = true)", () => {
          const opts                    = options.getTaskOptions( env.task );
                opts.nyc.coverage.check = true;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--check-coverage" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.perfile = true)", () => {
          const opts                      = options.getTaskOptions( env.task );
                opts.nyc.coverage.check   = true;
                opts.nyc.coverage.perfile = true;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--check-coverage" )).to.be.ok();
            expect( value.args.includes( "--per-file" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.branches = 90)", () => {
          const opts                       = options.getTaskOptions( env.task );
                opts.nyc.coverage.check    = true;
                opts.nyc.coverage.branches = 90;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--check-coverage" )).to.be.ok();
            expect( value.args.includes( "--branches" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.functions = 90)", () => {
          const opts                        = options.getTaskOptions( env.task );
                opts.nyc.coverage.check     = true;
                opts.nyc.coverage.functions = 90;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--check-coverage" )).to.be.ok();
            expect( value.args.includes( "--functions" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.lines = 90)", () => {
          const opts                    = options.getTaskOptions( env.task );
                opts.nyc.coverage.check = true;
                opts.nyc.coverage.lines = 90;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--check-coverage" )).to.be.ok();
            expect( value.args.includes( "--lines" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.coverage.statements = 90)", () => {
          const opts                         = options.getTaskOptions( env.task );
                opts.nyc.coverage.check      = true;
                opts.nyc.coverage.statements = 90;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--check-coverage" )).to.be.ok();
            expect( value.args.includes( "--statements" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.clean = undefined)", () => {
          const clean          = undefined;
          const opts           = options.getTaskOptions( env.task );
                opts.nyc.clean = clean;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--clean" )).not.to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.clean = true)", () => {
          const clean          = true;
          const opts           = options.getTaskOptions( env.task );
                opts.nyc.clean = clean;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--clean" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.clean = false)", () => {
          const clean          = false;
          const opts           = options.getTaskOptions( env.task );
                opts.nyc.clean = clean;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--clean" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.create = undefined)", () => {
          const  opts = options.getTaskOptions( env.task );
          delete opts.nyc.sourcemap.create;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--produce-source-map" )).not.to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.create = true)", () => {
          const opts                      = options.getTaskOptions( env.task );
                opts.nyc.sourcemap.create = true;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--produce-source-map" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.create = false)", () => {
          const opts                      = options.getTaskOptions( env.task );
                opts.nyc.sourcemap.create = false;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--produce-source-map" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.use = undefined)", () => {
          const  opts = options.getTaskOptions( env.task );
          delete opts.nyc.sourcemap.use;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--source-map" )).not.to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.use = true)", () => {
          const opts                   = options.getTaskOptions( env.task );
                opts.nyc.sourcemap.use = true;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--source-map" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.sourcemap.use = false)", () => {
          const opts                   = options.getTaskOptions( env.task );
                opts.nyc.sourcemap.use = false;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--source-map" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.opts = [ ... ])", () => {
          const opt           = "--just-another-nyc-opt";
          const opts          = options.getTaskOptions( env.task );
                opts.nyc.opts = [ opt ];
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( opt )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.tmp = 'some/dir')", () => {
          const spath         = "some/dir"
          const opts          = options.getTaskOptions( env.task );
                opts.nyc.temp = spath;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--temp-dir" )).to.be.ok();
            expect( value.args.includes( path.join( process.cwd(), spath ))).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.nyc.tmp = 'C:/absolute/dir')", () => {
          const spath         = "/absolute/dir";
          const opts          = options.getTaskOptions( env.task );
                opts.nyc.temp = spath;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--temp-dir" )).to.be.ok();
            // TODO: make test work on windws and *ix
            // expect( value.args.includes( path.join( spath ))).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      /** / ########################################
       *
       *  mocha properties
       *
       */// ########################################
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.exec set)", () => {
          const opts            = options.getTaskOptions( env.task );
                opts.mocha.exec = ".../somewhere/mocha";
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value );
            expect( value ).to.be.an( "object" );
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.bail = false)", () => {
          const bail            = false;
          const opts            = options.getTaskOptions( env.task );
                opts.mocha.bail = bail;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--bail" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.bail = true)", () => {
          const bail            = true;
          const opts            = options.getTaskOptions( env.task );
                opts.mocha.bail = bail;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--bail" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.exit = false)", () => {
          const exit            = false;
          const opts            = options.getTaskOptions( env.task );
                opts.mocha.exit = exit;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--exit" )).not.to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.exit = true)", () => {
          const exit            = true;
          const opts            = options.getTaskOptions( env.task );
                opts.mocha.exit = exit;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--exit" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.timeout = 30000)", () => {
          const timeout            = 30000;
          const opts               = options.getTaskOptions( env.task );
                opts.mocha.timeout = timeout;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--timeout" )).to.be.ok();
            expect( value.args.includes( timeout )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.ui = 'blubb')", () => {
          const ui            = "blubb";
          const opts          = options.getTaskOptions( env.task );
                opts.mocha.ui = ui;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--ui" )).to.be.ok();
            expect( value.args.includes( ui )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.color = true)", () => {
          const opts             = options.getTaskOptions( env.task );
                opts.mocha.color = true;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--color" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.recursive = true)", () => {
          const opts                 = options.getTaskOptions( env.task );
                opts.mocha.recursive = true;
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( "--recursive" )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.mocha.opts = [ ])", () => {
          const option          = "--some-mocha-option";
          const opts            = options.getTaskOptions( env.task );
                opts.mocha.opts = [ option ];
          expect(() => { 
            const value = builder.toArgsImpl( env.grunt, env.task, opts );
            // console.log( value.args );
            expect( value ).to.be.an( "object" );
            expect( value.args.includes( option )).to.be.ok();
          }).not.to.throwException(( error ) => { console.log( error )});
      });
    });
  });
});
