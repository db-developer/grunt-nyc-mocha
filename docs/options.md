[Back to README.md](../README.md)

## all plugin options in depth ##

Be aware of the set of configurable options provided by this plugin is only an
extract of the original options. So it's just normal, that you will be missing
options you personally require. If so, take a look at the
_node.opts_, _nyc.opts_ and _mocha.opts_ array, which enables you to pass through
any options and values to node, nyc and mocha, you desire.  

The following options (options => optional!) _may_ be used with task "nyc_mocha":

* _cwd_  {string} [defaults to: <code>process.cwd()</code> ]  
Defines the working directory of each node process, which will be spawned by
targets. If not set, it defaults to the "current working directory" of grunt.

* _dryrun_ {Boolean} [defaults to: <code>false</code> ]  
Prints to stdout, what would have been sent to <code>grunt.util.spawn</code>.

* _node_ {Object} [defaults to:<code>{exec: process.execPath, opts: false}</code> ]  
Node configuration section.

  * _node.exec_ {string} [default: see _node_ {Object}]  
May be used to define a custom node executable to spawn for each/any/some targets.

  * _node.opts_ {Array&lt;string&gt;} [default: see _node_ {Object}]  
See [node command-line options](https://nodejs.org/api/cli.html) for possible values.

* _nyc_ {Object} [defaults to:<code>{ /* find default properties below*/ }</code> ]  
nyc configuration section.

  * _nyc.all_ {Boolean} [default see nyc --all, -a]
Whether or not to instrument all files of the project (not just the ones touched
by your test suite)

  * _nyc.clean_ {Boolean} [default see nyc --clean]
Clean .nyc_output folder before testing?

  * _nyc.coverage_ {Object} [defaults to:<code>{ dir: "coverage", reporter: "text" }</code> ]  
nyc coverage configuration section.  

    * _nyc.coverage.dir_ {string} [default see nyc --report-dir]  
Directory to output coverage reports

    * _nyc.coverage.reporter_ {Array&lt;string&gt;} [default see nyc --reporter, -r]  
Coverage reportes to use

    * _nyc.coverage.check_ {Boolean} [default see nyc --check-coverage]  
Check whether coverage is within thresholds.

    * _nyc.coverage.perfile_ {Boolean} [default see nyc --per-file]  
Check thresholds per file (requires nyc.coverage.check === true)

    * _nyc.coverage.branches_ {number} [default see nyc --branches]  
What % of branches must be covered? (requires nyc.coverage.check === true)

    * _nyc.coverage.functions_ {number} [default see nyc --functions]  
What % of functions must be covered? (requires nyc.coverage.check === true)

    * _nyc.coverage.lines_ {number} [default see nyc --lines]  
What % of lines must be covered? (requires nyc.coverage.check === true)

    * _nyc.coverage.statements_ {number} [default see nyc --statements]  
What % of statements must be covered? (requires nyc.coverage.check === true)

  * _nyc.exec_ {string} [defaults to:<code>require.resolve( "nyc/bin/nyc" )</code> ]  
At the time of this writing, this option is not required, because the nyc main
script can be resolved by <code>require.resolve( "nyc/bin/nyc" )</code>.
In case of any future changes, the nyc main script may be set at this point.

  * _nyc.excludes_ {Array&lt;string&gt;} [default see nyc --exclude, -x]  
A list of specific files and directories that should be excluded from coverage.

  * _nyc.extensions_ {Array&lt;string&gt;} [default see nyc --extension, -e]  
A list of extensions that nyc should handle in addition to .js

  * _nyc.includes_ {Array&lt;string&gt;} [default see nyc --include, -n]  
A list of specific files and directories that should be covered.

  * _nyc.opts_ {Array&lt;string&gt;} [default: false]  
See [nyc command-line interface](https://github.com/istanbuljs/nyc). Beyond that,
calling "nyc --help" on your shell will reveal a far better reference...

  * _nyc.requires_ {Array&lt;string&gt;} [default: false, see nyc --require, -i]  
A list of additional modules that nyc should attempt to require in its subprocess.  
Note: In case you prefer stacktraces with valid source references you might want
      to check [sourcemap support](./docs/sourcemapsupport.md).

  * _nyc.sourcemap_ {Object} [defaults to:<code>{ create: undefined, use: undefined }</code> ]  
nyc sourcemap configuration

    * _nyc.sourcemap.create_ {Boolean} [default see nyc --produce-source-map]  
Should nyc produce source maps?  
Note: In case you prefer stacktraces with valid source references you might want
      to check [sourcemap support](./docs/sourcemapsupport.md).

    * _nyc.sourcemap.use_ {Boolean} [default see nyc --source-map]  
Should nyc detect and handle source maps?  
Note: In case you prefer stacktraces with valid source references you might want
      to check [sourcemap support](./docs/sourcemapsupport.md).

  * _nyc.temp_ {Boolean} [default see nyc --temp-dir]  
Directory to output raw coverage information to.

* _mocha_ {Object} [defaults to:<code>{ /* find default properties below*/ }</code> ]  
mocha configuration section.  
If you are missing any option, you may pass it via _mocha.opts_ array.

  * _mocha.color_ {Boolean} [default see mocha --color, -c, -colors]  
Color TTY output from reporter?

  * _mocha.exec_ {string} [defaults to:<code>require.resolve( "mocha/bin/_mocha" )</code> ]  
At the time of this writing, this option is not required, because the mocha main
script can be resolved by <code>require.resolve( "mocha/bin/_mocha" )</code>.
In case of any future changes, the mocha main script may be set at this point.

  * _mocha.opts_ {Array&lt;string&gt;} [default: false]  
See [mocha command-line interface](https://mochajs.org/api/mocha). Beyond that,
calling "mocha --help" on your shell will reveal a far better reference...

  * _mocha.recursive_ {Boolean} [default see mocha --recursive]  
Look for tests in subdirectories?

  * _mocha.timeout_ {number} [default see mocha --timeout, -t, --timeouts]  
Specify test timeout threshold (in milliseconds)

  * _mocha.ui_ {string} [default see mocha --ui, -u]  
Specify user interface

## nyc_mocha options example ##

Example configuration to be used with package <code>load-grunt-config</code>,
which makes it possible to focus on options of task "nyc_mocha".

```javascript
// nyc_mocha default options. false or undefined results in options not being set.
// Options not set means: nyc or mocha will use their default settings.

module.exports = function ( grunt, options ) {
  return {
    options: {
      cwd:              process.cwd(),      // working directory for nyc + mocha run
      dryrun:           false,              // dry run - do nothing just print cmd line
      node: {
        exec:           false,              // defaults to: process.execPath
        opts:           false               // array of node options
      },
      nyc: {
        all:            false,              // instrument all files?
        clean:          undefined,          // clean .nyc_output folder before testing
        coverage: {
          branches:     false,              // what % of branches must be covered?
          check:        false,              // check wether coverage is within thresholds
          dir:          false,              // report nyc coverage results to folder
          functions:    false,              // what % of functions must be covered?
          lines:        false,              // what % of lines must be covered?
          perfile:      false,              // check thresholds per file
          reporter:     false,              // report coverage using reporter 'text'|'html'
          statements:   false               // what % of statements must be covered?
        },
        exec:           false,              // path to node_modules/.../nyc script
        excludes:       false,              // array of files and directories to exclude
        extensions:     false,              // additional extensions that nyc should handle
        includes:       false,              // array of files and directories to inclode
        opts:           false,              // additional options not covered by plugin
        requires:       false,              // array of scripts to additionally require
        sourcemap: {
          create:       undefined,          // should nyc produce sourcemaps
          use:          undefined           // should nyc detect and handle sourcemaps
        },
        temp:           false,              // directory to output raw coverage information
      },                                    //           ... which defaults to .nyc_output
      mocha: {
        color:          false,              // force colored output
        exec:           false,              // path to node_modules/.../mocha script
        opts:           false,              // additional options not covered by plugin
        recursive:      false,              // look for tests in subdirectories
        timeout:        false,              // test timeout threshold (millis)
        ui:             false               // user interfaces
      }
    },
    mytarget: {
        // ... whatever ...
    },
    myothertarget: {
      options: {
        nyc: {
          all:          true,               // overwrite tasklevel options.nyc.all
        }
      }
    }
  }
};
```
