/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */
"use strict";

const path          = require( "path"            );
const strings       = require( "./.conf/strings" );

const env = {
  BUILDDIR:     `${ strings.BUILD }`,
  CONFDIR:      `${ strings.DOT   }${ strings.CONF }`,
  COVERAGEDIR:  path.join( `${ strings.DIST  }`, `${ strings.COVERAGE }` ),
  DOCSDIR:      `${ strings.DOCS  }`,
  DISTDIR:      `${ strings.DIST  }`,
  LIBDIR:       path.join( `${ strings.SRC   }`, `${ strings.LIB }`     ),
  SCRITPSDIR:   path.join( `${ strings.SRC   }`, `${ strings.SCRIPTS }` ),
  SRCDIR:       `${ strings.SRC   }`,
  STRINGS:      strings,
  TASKSDIR:     path.join( `${ strings.SRC   }`, `${ strings.TASKS }` ),
  TESTDIR:      path.join( `${ strings.SRC   }`, `${ strings.TEST  }`, `${ strings.ANY }` )
};

const GRUNTCONFDIR = path.join( process.cwd(), env.CONFDIR, strings.GRUNT );

module.exports = function( grunt ) {

  require( "load-grunt-config" )( grunt, { configPath: GRUNTCONFDIR, data: env });
  require( "load-grunt-tasks"  )( grunt );

  // run lint and all tests by default before packaging
  grunt.registerTask( strings.ALL,     [ strings.TEST, strings.BUILD, `${ strings.COPY }:deploy`,
                                         "move:distribute" ]);

  // run lint and all tests by default before packaging
  grunt.registerTask( strings.BUILD,   [ strings.BUILDRO ]);

  grunt.registerTask( strings.BUILDWP, [ strings.ESLINT, `${ strings.CLEAN }:build`, strings.MKDIR,
                                         `${ strings.COPY }:build`, strings.JSONFILE,
                                         "webpack:build", "shell:npm_pack" ]);

  grunt.registerTask( strings.BUILDRO, [ strings.ESLINT, `${ strings.CLEAN }:build`, strings.MKDIR,
                                         `${ strings.COPY }:build`, strings.JSONFILE,
                                         "rollup:build", "shell:npm_pack" ]);

  // run coverage
  grunt.registerTask( strings.COVERAGE, [ strings.ESLINT, strings.CLEAN, strings.MKDIR,
                                          `${ strings.COPY }:test`, "mocha_istanbul" ]);

  // run default
  grunt.registerTask( strings.DEFAULT, [ strings.ALL ]);

  // run deploy
  grunt.registerTask( strings.DEPLOY,  [ strings.TEST, strings.BUILD, `${ strings.COPY }:deploy` ]);

  // run dist
  grunt.registerTask( strings.DIST,    [ strings.TEST, strings.BUILD, "move:distribute" ]);

  // run test
  grunt.registerTask( strings.TEST,    [ strings.ESLINT, strings.CLEAN, strings.MKDIR,
                                         `${ strings.COPY }:test`, "mocha_istanbul" ]);
};
