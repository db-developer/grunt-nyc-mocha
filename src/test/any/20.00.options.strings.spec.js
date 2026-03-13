/**
 *  © 2026, slashlib.org.
 */
const expect = require( "expect.js" );
const path   = require( "node:path" );

describe( `${ path.relative( process.cwd(), __filename )} - Testing module 'lib/options/strings.js'`, () => {
  const strings   = require( "../../lib/options/strings" );
  const constants = require( "./00.00.constants" );

  let env;
  before( async function () {
    env = await constants.env;
  });

  describe( "Testing module 'lib/options/strings'", () => {
    it( "Module 'strings' should exist", () => {
        expect( strings ).not.to.be( undefined );
        expect( strings ).not.to.be( null      );
        expect( strings ).to.be.an(  "object"  );
    });
  });

  describe( "Testing exports of module 'lib/options/strings'", () => {
    describe( "Testing number of exports and exported types", () => {
      const EXPECTED_STRING_CONSTANTS = 41;
      const entries = Object.entries( strings );

      it( "All exports should be of type {sting}", () => {
          let errmsg;
          entries.forEach(([name, value]) => {
            errmsg = `Export '${name}' of module 'lib/options/strings.js' must be a string`;
            expect( typeof value, errmsg ).to.be( "string" );
          });
      });

      it( `The number of exported string constants should be ${ EXPECTED_STRING_CONSTANTS }`, () => {
          const errmsg = "Unexpected number of exported constants for module 'lib/options/strings.js'";
          expect( entries.length, errmsg ).to.be( EXPECTED_STRING_CONSTANTS );
      });
    });

    describe( "Testing error messages", () => {
      it( "Constant 'ERROR_MSG_MISSING_GRUNT' should exist", () => {
          expect( strings.ERROR_MSG_MISSING_GRUNT ).not.to.be( undefined );
          expect( strings.ERROR_MSG_MISSING_GRUNT ).not.to.be( null      );
          expect( strings.ERROR_MSG_MISSING_GRUNT ).to.be.a(   "string"  );
          const expected = "Function 'toArgsImpl': missing parameter 'grunt'.";
          expect( strings.ERROR_MSG_MISSING_GRUNT === expected ).to.be.ok();
      });
      it( "Constant 'ERROR_MSG_MISSING_OPTIONS' should exist", () => {
          expect( strings.ERROR_MSG_MISSING_OPTIONS ).not.to.be( undefined );
          expect( strings.ERROR_MSG_MISSING_OPTIONS ).not.to.be( null      );
          expect( strings.ERROR_MSG_MISSING_OPTIONS ).to.be.a(   "string"  );
          const expected = "Function 'toArgsImpl': missing parameter 'options'.";
          expect( strings.ERROR_MSG_MISSING_OPTIONS === expected ).to.be.ok();
      });
      it( "Constant 'ERROR_MSG_MISSING_TASK_I' should exist", () => {
          expect( strings.ERROR_MSG_MISSING_TASK_I ).not.to.be( undefined );
          expect( strings.ERROR_MSG_MISSING_TASK_I ).not.to.be( null      );
          expect( strings.ERROR_MSG_MISSING_TASK_I ).to.be.a(   "string"  );
          const expected = "Function 'toArgs': missing parameter 'task'.";
          expect( strings.ERROR_MSG_MISSING_TASK_I === expected ).to.be.ok();
      });
      it( "Constant 'ERROR_MSG_MISSING_TASK_II' should exist", () => {
          expect( strings.ERROR_MSG_MISSING_TASK_II ).not.to.be( undefined );
          expect( strings.ERROR_MSG_MISSING_TASK_II ).not.to.be( null      );
          expect( strings.ERROR_MSG_MISSING_TASK_II ).to.be.a(   "string"  );
          const expected = "Function 'toArgsImpl': missing parameter 'task'.";
          expect( strings.ERROR_MSG_MISSING_TASK_II === expected ).to.be.ok();
      });
    });
    
    describe( "Testing options", () => {
      it( "Constant 'OPTIONS_BAILOUT' should exist", () => {
          expect( strings.OPTIONS_BAILOUT ).not.to.be( undefined );
          expect( strings.OPTIONS_BAILOUT ).not.to.be( null      );
          expect( strings.OPTIONS_BAILOUT ).to.be.a(   "string"  );
          const expected = "--bail";
          expect( strings.OPTIONS_BAILOUT === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_BRANCHES' should exist", () => {
          expect( strings.OPTIONS_BRANCHES ).not.to.be( undefined );
          expect( strings.OPTIONS_BRANCHES ).not.to.be( null      );
          expect( strings.OPTIONS_BRANCHES ).to.be.a(   "string"  );
          const expected = "--branches";
          expect( strings.OPTIONS_BRANCHES === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_CHECK_COVERAGE' should exist", () => {
          expect( strings.OPTIONS_CHECK_COVERAGE ).not.to.be( undefined );
          expect( strings.OPTIONS_CHECK_COVERAGE ).not.to.be( null      );
          expect( strings.OPTIONS_CHECK_COVERAGE ).to.be.a(   "string"  );
          const expected = "--check-coverage";
          expect( strings.OPTIONS_CHECK_COVERAGE === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_CLEAN' should exist", () => {
          expect( strings.OPTIONS_CLEAN ).not.to.be( undefined );
          expect( strings.OPTIONS_CLEAN ).not.to.be( null      );
          expect( strings.OPTIONS_CLEAN ).to.be.a(   "string"  );
          const expected = "--clean";
          expect( strings.OPTIONS_CLEAN === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_COLOR' should exist", () => {
          expect( strings.OPTIONS_COLOR ).not.to.be( undefined );
          expect( strings.OPTIONS_COLOR ).not.to.be( null      );
          expect( strings.OPTIONS_COLOR ).to.be.a(   "string"  );
          const expected = "--color";
          expect( strings.OPTIONS_COLOR === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_CWD' should exist", () => {
          expect( strings.OPTIONS_CWD ).not.to.be( undefined );
          expect( strings.OPTIONS_CWD ).not.to.be( null      );
          expect( strings.OPTIONS_CWD ).to.be.a(   "string"  );
          const expected = "--cwd";
          expect( strings.OPTIONS_CWD === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_EXCLUDE' should exist", () => {
          expect( strings.OPTIONS_EXCLUDE ).not.to.be( undefined );
          expect( strings.OPTIONS_EXCLUDE ).not.to.be( null      );
          expect( strings.OPTIONS_EXCLUDE ).to.be.a(   "string"  );
          const expected = "--exclude";
          expect( strings.OPTIONS_EXCLUDE === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_EXIT' should exist", () => {
          expect( strings.OPTIONS_EXIT ).not.to.be( undefined );
          expect( strings.OPTIONS_EXIT ).not.to.be( null      );
          expect( strings.OPTIONS_EXIT ).to.be.a(   "string"  );
          const expected = "--exit";
          expect( strings.OPTIONS_EXIT === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_EXTENSION' should exist", () => {
          expect( strings.OPTIONS_EXTENSION ).not.to.be( undefined );
          expect( strings.OPTIONS_EXTENSION ).not.to.be( null      );
          expect( strings.OPTIONS_EXTENSION ).to.be.a(   "string"  );
          const expected = "--extension";
          expect( strings.OPTIONS_EXTENSION === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_FUNCTIONS' should exist", () => {
          expect( strings.OPTIONS_FUNCTIONS ).not.to.be( undefined );
          expect( strings.OPTIONS_FUNCTIONS ).not.to.be( null      );
          expect( strings.OPTIONS_FUNCTIONS ).to.be.a(   "string"  );
          const expected = "--functions";
          expect( strings.OPTIONS_FUNCTIONS === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_INCLUDE' should exist", () => {
          expect( strings.OPTIONS_INCLUDE ).not.to.be( undefined );
          expect( strings.OPTIONS_INCLUDE ).not.to.be( null      );
          expect( strings.OPTIONS_INCLUDE ).to.be.a(   "string"  );
          const expected = "--include";
          expect( strings.OPTIONS_INCLUDE === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_LINES' should exist", () => {
          expect( strings.OPTIONS_LINES ).not.to.be( undefined );
          expect( strings.OPTIONS_LINES ).not.to.be( null      );
          expect( strings.OPTIONS_LINES ).to.be.a(   "string"  );
          const expected = "--lines";
          expect( strings.OPTIONS_LINES === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_MOCHA_OPTS' should exist", () => {
          expect( strings.OPTIONS_MOCHA_OPTS ).not.to.be( undefined );
          expect( strings.OPTIONS_MOCHA_OPTS ).not.to.be( null      );
          expect( strings.OPTIONS_MOCHA_OPTS ).to.be.a(   "string"  );
          const expected = "options.mocha.opts";
          expect( strings.OPTIONS_MOCHA_OPTS === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_NODE_OPTIONS' should exist", () => {
          expect( strings.OPTIONS_NODE_OPTIONS ).not.to.be( undefined );
          expect( strings.OPTIONS_NODE_OPTIONS ).not.to.be( null      );
          expect( strings.OPTIONS_NODE_OPTIONS ).to.be.a(   "string"  );
          const expected = "options.node.options";
          expect( strings.OPTIONS_NODE_OPTIONS === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_NYC_COVERAGE_REPORTER' should exist", () => {
          expect( strings.OPTIONS_NYC_COVERAGE_REPORTER ).not.to.be( undefined );
          expect( strings.OPTIONS_NYC_COVERAGE_REPORTER ).not.to.be( null      );
          expect( strings.OPTIONS_NYC_COVERAGE_REPORTER ).to.be.a(   "string"  );
          const expected = "options.nyc.coverage.reporter";
          expect( strings.OPTIONS_NYC_COVERAGE_REPORTER === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_NYC_EXCLUDES' should exist", () => {
          expect( strings.OPTIONS_NYC_EXCLUDES ).not.to.be( undefined );
          expect( strings.OPTIONS_NYC_EXCLUDES ).not.to.be( null      );
          expect( strings.OPTIONS_NYC_EXCLUDES ).to.be.a(   "string"  );
          const expected = "options.nyc.excludes";
          expect( strings.OPTIONS_NYC_EXCLUDES === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_NYC_EXTENSIONS' should exist", () => {
          expect( strings.OPTIONS_NYC_EXTENSIONS ).not.to.be( undefined );
          expect( strings.OPTIONS_NYC_EXTENSIONS ).not.to.be( null      );
          expect( strings.OPTIONS_NYC_EXTENSIONS ).to.be.a(   "string"  );
          const expected = "options.nyc.extensions";
          expect( strings.OPTIONS_NYC_EXTENSIONS === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_NYC_INCLUDES' should exist", () => {
          expect( strings.OPTIONS_NYC_INCLUDES ).not.to.be( undefined );
          expect( strings.OPTIONS_NYC_INCLUDES ).not.to.be( null      );
          expect( strings.OPTIONS_NYC_INCLUDES ).to.be.a(   "string"  );
          const expected = "options.nyc.includes";
          expect( strings.OPTIONS_NYC_INCLUDES === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_NYC_OPTS' should exist", () => {
          expect( strings.OPTIONS_NYC_OPTS ).not.to.be( undefined );
          expect( strings.OPTIONS_NYC_OPTS ).not.to.be( null      );
          expect( strings.OPTIONS_NYC_OPTS ).to.be.a(   "string"  );
          const expected = "options.nyc.opts";
          expect( strings.OPTIONS_NYC_OPTS === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_NYC_REQUIRES' should exist", () => {
          expect( strings.OPTIONS_NYC_REQUIRES ).not.to.be( undefined );
          expect( strings.OPTIONS_NYC_REQUIRES ).not.to.be( null      );
          expect( strings.OPTIONS_NYC_REQUIRES ).to.be.a(   "string"  );
          const expected = "options.nyc.requires";
          expect( strings.OPTIONS_NYC_REQUIRES === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_PER_FILE' should exist", () => {
          expect( strings.OPTIONS_PER_FILE ).not.to.be( undefined );
          expect( strings.OPTIONS_PER_FILE ).not.to.be( null      );
          expect( strings.OPTIONS_PER_FILE ).to.be.a(   "string"  );
          const expected = "--per-file";
          expect( strings.OPTIONS_PER_FILE === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_PRODUCE_SOURCEMAP' should exist", () => {
          expect( strings.OPTIONS_PRODUCE_SOURCEMAP ).not.to.be( undefined );
          expect( strings.OPTIONS_PRODUCE_SOURCEMAP ).not.to.be( null      );
          expect( strings.OPTIONS_PRODUCE_SOURCEMAP ).to.be.a(   "string"  );
          const expected = "--produce-source-map";
          expect( strings.OPTIONS_PRODUCE_SOURCEMAP === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_SOURCEMAP' should exist", () => {
          expect( strings.OPTIONS_SOURCEMAP ).not.to.be( undefined );
          expect( strings.OPTIONS_SOURCEMAP ).not.to.be( null      );
          expect( strings.OPTIONS_SOURCEMAP ).to.be.a(   "string"  );
          const expected = "--source-map";
          expect( strings.OPTIONS_SOURCEMAP === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_STATEMENTS' should exist", () => {
          expect( strings.OPTIONS_STATEMENTS ).not.to.be( undefined );
          expect( strings.OPTIONS_STATEMENTS ).not.to.be( null      );
          expect( strings.OPTIONS_STATEMENTS ).to.be.a(   "string"  );
          const expected = "--statements";
          expect( strings.OPTIONS_STATEMENTS === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_RECURSIVE' should exist", () => {
          expect( strings.OPTIONS_RECURSIVE ).not.to.be( undefined );
          expect( strings.OPTIONS_RECURSIVE ).not.to.be( null      );
          expect( strings.OPTIONS_RECURSIVE ).to.be.a(   "string"  );
          const expected = "--recursive";
          expect( strings.OPTIONS_RECURSIVE === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_REPORT_DIR' should exist", () => {
          expect( strings.OPTIONS_REPORT_DIR ).not.to.be( undefined );
          expect( strings.OPTIONS_REPORT_DIR ).not.to.be( null      );
          expect( strings.OPTIONS_REPORT_DIR ).to.be.a(   "string"  );
          const expected = "--report-dir";
          expect( strings.OPTIONS_REPORT_DIR === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_REPORTER' should exist", () => {
          expect( strings.OPTIONS_REPORTER ).not.to.be( undefined );
          expect( strings.OPTIONS_REPORTER ).not.to.be( null      );
          expect( strings.OPTIONS_REPORTER ).to.be.a(   "string"  );
          const expected = "--reporter";
          expect( strings.OPTIONS_REPORTER === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_REQUIRE' should exist", () => {
          expect( strings.OPTIONS_REQUIRE ).not.to.be( undefined );
          expect( strings.OPTIONS_REQUIRE ).not.to.be( null      );
          expect( strings.OPTIONS_REQUIRE ).to.be.a(   "string"  );
          const expected = "--require";
          expect( strings.OPTIONS_REQUIRE === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_TEMP_DIR' should exist", () => {
          expect( strings.OPTIONS_TEMP_DIR ).not.to.be( undefined );
          expect( strings.OPTIONS_TEMP_DIR ).not.to.be( null      );
          expect( strings.OPTIONS_TEMP_DIR ).to.be.a(   "string"  );
          const expected = "--temp-dir";
          expect( strings.OPTIONS_TEMP_DIR === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_TIMEOUT' should exist", () => {
          expect( strings.OPTIONS_TIMEOUT ).not.to.be( undefined );
          expect( strings.OPTIONS_TIMEOUT ).not.to.be( null      );
          expect( strings.OPTIONS_TIMEOUT ).to.be.a(   "string"  );
          const expected = "--timeout";
          expect( strings.OPTIONS_TIMEOUT === expected ).to.be.ok();
      });
      it( "Constant 'OPTIONS_UI' should exist", () => {
          expect( strings.OPTIONS_UI ).not.to.be( undefined );
          expect( strings.OPTIONS_UI ).not.to.be( null      );
          expect( strings.OPTIONS_UI ).to.be.a(   "string"  );
          const expected = "--ui";
          expect( strings.OPTIONS_UI === expected ).to.be.ok();
      });
      it( "Constant 'PROPERTY_COVERAGE' should exist", () => {
          expect( strings.PROPERTY_COVERAGE ).not.to.be( undefined );
          expect( strings.PROPERTY_COVERAGE ).not.to.be( null      );
          expect( strings.PROPERTY_COVERAGE ).to.be.a(   "string"  );
          const expected = "coverage";
          expect( strings.PROPERTY_COVERAGE === expected ).to.be.ok();
      });
      it( "Constant 'REPORT_FORMAT_HTML' should exist", () => {
          expect( strings.REPORT_FORMAT_HTML ).not.to.be( undefined );
          expect( strings.REPORT_FORMAT_HTML ).not.to.be( null      );
          expect( strings.REPORT_FORMAT_HTML ).to.be.a(   "string"  );
          const expected = "html";
          expect( strings.REPORT_FORMAT_HTML === expected ).to.be.ok();
      });
      it( "Constant 'REPORT_FORMAT_LCOV' should exist", () => {
          expect( strings.REPORT_FORMAT_LCOV ).not.to.be( undefined );
          expect( strings.REPORT_FORMAT_LCOV ).not.to.be( null      );
          expect( strings.REPORT_FORMAT_LCOV ).to.be.a(   "string"  );
          const expected = "lcov";
          expect( strings.REPORT_FORMAT_LCOV === expected ).to.be.ok();
      });
      it( "Constant 'REPORT_FORMAT_TEXT' should exist", () => {
          expect( strings.REPORT_FORMAT_TEXT ).not.to.be( undefined );
          expect( strings.REPORT_FORMAT_TEXT ).not.to.be( null      );
          expect( strings.REPORT_FORMAT_TEXT ).to.be.a(   "string"  );
          const expected = "text";
          expect( strings.REPORT_FORMAT_TEXT === expected ).to.be.ok();
      });
    });

    describe( "Testing string constants", () => {
      it( "Constant 'TRUE' should exist", () => {
          expect( strings.TRUE ).not.to.be( undefined );
          expect( strings.TRUE ).not.to.be( null      );
          expect( strings.TRUE ).to.be.a(   "string"  );
          const expected = "true";
          expect( strings.TRUE === expected ).to.be.ok();
      });
      it( "Constant 'FALSE' should exist", () => {
          expect( strings.FALSE ).not.to.be( undefined );
          expect( strings.FALSE ).not.to.be( null      );
          expect( strings.FALSE ).to.be.a(   "string"  );
          const expected = "false";
          expect( strings.FALSE === expected ).to.be.ok();
      });
    });      
  });
});
