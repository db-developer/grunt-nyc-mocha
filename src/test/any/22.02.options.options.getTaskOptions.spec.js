/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/options/options.js'`, () => {
  const options   = require( "../../lib/options/options" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing exports of module 'lib/options/options'", () => {
    it( "Function 'getTaskOptions' should exist", () => {
        expect( options.getTaskOptions ).not.to.be( undefined  );
        expect( options.getTaskOptions ).not.to.be( null       );
        expect( options.getTaskOptions ).to.be.a(   "function" );
    });
  });
  
  describe( "Testing function 'getTaskOptions' of module 'lib/options/options'", () => {
    it( "should not be callable without parameters", () => {
        const errmsg      = "Cannot read property 'options' of undefined";
        const errmsg_v_16 = "Cannot read properties of undefined (reading 'options')"
        expect(() => { options.getTaskOptions(); }).to.throwException(( error ) => {
          // console.log( error );
          expect( error ).to.be.a( TypeError );
          expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
        });
    });

    it( "should be callable with parameter 'task' {grunt.task}", () => {
        expect(() => { options.getTaskOptions( env.task ); }).not.to.throwException();
    });

    it( "should return an object", () => {
        const result = options.getTaskOptions( env.task );
        expect( result ).not.to.be( undefined );
        expect( result ).not.to.be( null      );
        expect( result ).to.be.an(  "object"  );
    });

    it( "should return a new options object for every call", () => {
        const result1 = options.getTaskOptions( env.task );
        const result2 = options.getTaskOptions( env.task );
        expect( result1 ).not.to.be( result2 );
    });

    it( "should contain root option groups", () => {
        const result = options.getTaskOptions( env.task );
        expect( result ).to.have.key( "cwd"    );
        expect( result ).to.have.key( "dryrun" );
        expect( result ).to.have.key( "mocha"  );
        expect( result ).to.have.key( "node"   );
        expect( result ).to.have.key( "nyc"    );
    });

    it( "should contain nyc sub structures", () => {
        const result = options.getTaskOptions( env.task );
        expect( result.nyc ).to.be.an(    "object"    );
        expect( result.nyc ).to.have.key( "coverage"  );
        expect( result.nyc ).to.have.key( "sourcemap" );
    });

    it( "should include default nyc.coverage options when none are provided", () => {
        const fakeTask = {
          options() { return {}; }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.nyc.coverage ).to.be.an(    "object"     );
        expect( result.nyc.coverage ).to.have.key( "branches"   );
        expect( result.nyc.coverage ).to.have.key( "lines"      );
        expect( result.nyc.coverage ).to.have.key( "functions"  );
        expect( result.nyc.coverage ).to.have.key( "statements" );
    });

    it( "should include default nyc.sourcemap options when none are provided", () => {
        const fakeTask = {
          options() { return {}; }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.nyc.sourcemap ).to.be.an(    "object" );
        expect( result.nyc.sourcemap ).to.have.key( "create" );
        expect( result.nyc.sourcemap ).to.have.key( "use"    );
    });

    it( "should override default options with task options", () => {
        const fakeTask = {
          options() {
            return {
              dryrun: true
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.dryrun ).to.be(true);
    });

    it( "should override mocha options with task mocha options", () => {
        const fakeTask = {
          options() {
            return {
              mocha: {
                timeout: 5000
              }
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.mocha.timeout ).to.be( 5000 );
    });

    it( "should override nyc.coverage options with task coverage options", () => {
        const fakeTask = {
          options() {
            return {
              nyc: {
                coverage: {
                  lines: 90
                }
              }
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.nyc.coverage.lines ).to.be( 90 );
    });

    it( "should override nyc.sourcemap options with task sourcemap options", () => {
        const fakeTask = {
          options() {
            return {
              nyc: {
                sourcemap: {
                  create: true
                }
              }
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.nyc.sourcemap.create ).to.be( true );
    });

    it( "should not mutate task options object", () => {
        // ensure usage of structuredClone
        const taskOptions = {
          mocha: { timeout: 1000 }
        };

        const fakeTask = {
          options() { return taskOptions; }
        };

        options.getTaskOptions( fakeTask );
        expect( taskOptions.mocha.timeout ).to.be( 1000 );
    });      

    it( "should not throw if mocha options are null", () => {
        const fakeTask = {
          options() {
            return {
              mocha: null
            };
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).not.to.throwException();
    });

    it( "should not throw if nyc options are null", () => {
        const fakeTask = {
          options() {
            return {
              nyc: null
            };
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).not.to.throwException();
    });

    it( "should not throw if nyc.coverage is null", () => {
        const fakeTask = {
          options() {
            return {
              nyc: {
                coverage: null
              }
            };
          }
        };

        expect(() => { options.getTaskOptions(fakeTask)}).not.to.throwException();
    });

    it( "should not throw if nyc.sourcemap is null", () => {
        const fakeTask = {
          options() {
            return {
              nyc: {
                sourcemap: null
              }
            };
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).not.to.throwException();
    });

    it( "should merge partial nyc.coverage options correctly", () => {
        const fakeTask = {
          options() {
            return {
              nyc: {
                coverage: {
                  lines: 80
                }
              }
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.nyc.coverage.lines ).to.be( 80 );
        expect( result.nyc.coverage.statements ).to.be( false );
        expect( result.nyc.coverage.functions  ).to.be( false );
        expect( result.nyc.coverage.branches   ).to.be( false );
    });

    it( "should merge partial nyc.sourcemap options correctly", () => {
        const fakeTask = {
          options() {
            return {
              nyc: {
                sourcemap: {
                  create: true
                }
              }
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.nyc.sourcemap.create ).to.be( true );
        expect( result.nyc.sourcemap.use    ).to.be( undefined );
    });

    it( "should throw if task does not provide an options() function", () => {
        const fakeTask = {};
        expect(() => { options.getTaskOptions( fakeTask )}).to.throwException();
    });

    it( "should deeply clone task options", () => {
        const taskOptions = {
          mocha: {
            timeout: 1000
          }
        };

        const fakeTask = {
          options() {
            return taskOptions;
          }
        };

      const result = options.getTaskOptions( fakeTask );
            result.mocha.timeout = 5000;
      expect( taskOptions.mocha.timeout ).to.be( 1000 );
    });

    it( "should not throw if mocha options are false", () => {
        const fakeTask = {
          options() {
            return {
              mocha: false
            };
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).not.to.throwException();
    });

    it( "should ignore invalid mocha option types", () => {
        const fakeTask = {
          options() {
            return {
              mocha: true
            };
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).not.to.throwException();
    });

    it( "should not throw if nyc options are false", () => {
        const fakeTask = {
          options() {
            return {
              nyc: false
            };
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).not.to.throwException();
    });

    it( "should ignore invalid nyc option types", () => {
        const fakeTask = {
          options() {
            return {
              nyc: true
            };
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).not.to.throwException();
    });

    it( "should ignore invalid nyc.coverage option types", () => {
        const fakeTask = {
          options() {
            return {
              nyc: { coverage: false }
            };
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).not.to.throwException();
    });

    it( "should throw if task.options() does not return an object", () => {
        const fakeTask = {
          options() {
            return "invalid";
          }
        };

        expect(() => { options.getTaskOptions( fakeTask )}).to.throwException();
    });

    it( "should handle missing nyc configuration", () => {
        const fakeTask = {
          options() {
            return {};
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.nyc ).to.be.an( "object" );
        expect( result.nyc.coverage  ).to.be.an( "object" );
        expect( result.nyc.sourcemap ).to.be.an( "object" );
    });

    it( "should preserve default mocha options when partially overridden", () => {
        const fakeTask = {
          options() {
            return {
              mocha: {
                timeout: 2000
              }
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.mocha.timeout).to.be( 2000   );
        expect( result.mocha ).to.have.key(  "bail" );
        expect( result.mocha ).to.have.key(  "ui"   );
    });

    it( "should not share nested option objects between calls", () => {
        const result1 = options.getTaskOptions( env.task );
        const result2 = options.getTaskOptions( env.task );

        result1.mocha.timeout = 9999;
        expect( result2.mocha.timeout ).not.to.be( 9999 );
    });

    it( "should preserve unknown custom options", () => {
        const fakeTask = {
          options() {
            return {
              customOption: "test"
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.customOption ).to.be( "test" );
    });

    it( "should keep nyc configuration when adding coverage options", () => {
        const fakeTask = {
          options() {
            return {
              nyc: {
                includes: ["src/**/*.js"],
                coverage: {
                  lines: 95
                }
              }
            };
          }
        };

        const result = options.getTaskOptions( fakeTask );
        expect( result.nyc.includes ).to.eql([ "src/**/*.js" ]);
        expect( result.nyc.coverage.lines ).to.be( 95 );
    });

    it( "should not mutate the object returned by task.options()", () => {
        const original = {
          mocha: { timeout: 1000 }
        };

        const fakeTask = {
          options() {
            return original;
          }
        };

        options.getTaskOptions( fakeTask );
        expect( original.mocha.timeout ).to.be( 1000 );
    });
  });
});
