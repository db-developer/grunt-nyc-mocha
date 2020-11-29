[Back to README.md](../README.md)

## make targets of gruntfile.js and package.json ##

This guide assumes, that you are familiar with the use of [git](https://git-scm.com/ "Homepage of GIT"), [npm](https://npmjs.com "Homepage of npm") and [grunt](https://gruntjs.com "Homepage of grunt").  

1. git fork [grunt-nyc-mocha plugin for grunt](https://github.com/db-developer/grunt-nyc-mocha) (https://github.com/db-developer/grunt-nyc-mocha.git)
2. cd into forked grunt-nyc-mocha directory
3. open a shell
4. make sure your environment knows about the paths to nodejs
5. run <code>npm install</code>

### testing & coverage ###

The code of grunt-nyc-mocha can be tested. A [mocha](https://mochajs.org/ "Homepage of mocha")/[istanbul](https://istanbul.js.org/ "Homepage of istanbul") testsuite is provided. See directory <code>test</code>.  
Open a shell to run the tests, make sure the environment is set, cd into the forked grunt-nyc-mocha directory and run: <code>grunt test</code>

With testing (see above) code coverage is available. The results can be found in the dist/coverage folder.

### building ###

Building can be run by <code>grunt all</code> and requires the build directory.
After a successful build, all resulting files are located in the directory <code>dist</code>.

### feedback ###
Do you feel this guide is missing essential information? Found any typos or amused by the translation? Please do not hesitate to file an issue on github!
