[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/db-developer/grunt-nyc-mocha/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/grunt-nyc-mocha)
[![Build Status](https://travis-ci.com/db-developer/grunt-nyc-mocha.svg?branch=master)](https://travis-ci.com/db-developer/grunt-nyc-mocha)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)

# grunt-nyc-mocha #


## content ##

* Usage
  * [Getting started guide (see 'getting started' below)](#getting-started)
  * [Reference of all available options](docs/options.md)
  * [Sourcemap support](docs/sourcemapsupport.md)

* Developers
  * [Testing grunt-nyc-mocha](docs/grunt.md#testing)
  * [Code coverage of tests for grunt-nyc-mocha](docs/grunt.md#code-coverage)
  * [Build grunt-nyc-mocha from scratch](docs/grunt.md#building)
  * [Frameworks used for building and running grunt-nyc-mocha](docs/frameworks.md)

## getting started ##

This guide assumes, that you are familiar with the use of [npm](https://npmjs.com "Homepage of npm") and [grunt](https://gruntjs.com "Homepage of grunt").  
The plugin can be installed by the following command:

<code>npm install grunt-nyc-mocha --save-dev</code>

Once installed, the plugin may be loaded from within your gruntfile.

### task nyc_mocha ###

"nyc_mocha" is a grunt multitask provided by <code>grunt-nyc-mocha</code> and
can hold multiple targets. Each of the targets you may define will spawn
their very own node process.

Multitask configuration generally splits into the following parts:

* [options (tasklevel, inherited by any target)](docs/options.md)
* target (0 to n)
  * any other grunt configuration properties
  * [options (targetlevel, will be merged into tasklevel options)](docs/options.md)

Any target can extend, repeat or overwrite options previously defined by a task.
For doing so, each target can specify its own "options" property. Targetlevel
options will be merged into tasklevel options, overwriting them.

### raw usage of <code>grunt-nyc-mocha</code> ###

```javascript
// extract from gruntfile.js

module.exports = function( grunt ) {
  grunt.initConfig({
    // among many others ...
    nyc_mocha:{
      options: { /*tasklevel options go here*/ }
      target:  {
        src: "./src/test/**/*.spec.js", // test suites to run...
        options: { /* targetlevel options go here */ }
      }
    }
  });

  grunt.loadNpmTasks( "nyc_mocha" );

  grunt.registerTask( "default", [ "nyc_mocha:target" ]);
}
```

### using <code>grunt-nyc-mocha</code> with <code>load-grunt-config</code> and <code>load-grunt-tasks</code> ###

Install the following packages:  
<code>npm install load-grunt-config --save-dev</code>  
<code>npm install load-grunt-tasks  --save-dev</code>  

Now you can split gruntfile.js in multiple configuration files:

```javascript
// extract from (a much cleaner) gruntfile.js
const configPath = ...? // this is where your config files reside
const data       = { /* some properties, that can be passed on */ };

module.exports = function( grunt ) {
  require( "load-grunt-config" )( grunt, { configPath, data });
  require( "load-grunt-tasks"  )( grunt );

  grunt.registerTask( "default", [ "nyc_mocha:target" ]);
}
```

```javascript
// extract from nyc_mocha.js (has to be named tasklike!)
module.exports = function ( grunt, options ) {
  return {
    target: {
      src: "./src/test/**/*.spec.js", // run those test files
      options: {
        nyc: {
          coverage: {                                 // report nyc coverage results
            dir:          "dist/coverage",            // ... to folder
            reporter:     [ "html", "text-summary" ]  // ... using reporters
          },
          excludes:       [ "**/*.spec.js" ],         // exclude test files from instrumentation!
          requires:       [ "grunt-nyc-mocha/scripts/sourcemapsupport" ]
        },
        mocha: {
          color:          true                        // force colored output
        }
      }
    }
  }
};
```
