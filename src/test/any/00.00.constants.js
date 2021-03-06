/**
 *  © 2020, slashlib.org.
 */
const grunt = require( "grunt" );

const promise = new Promise(( resolve, reject ) => {
  const name     = "nyc_mocha";
  const taskname = "target1";

  // note: this requires a "nyc_mocha.js" file in .conf/grunt (see gruntfile.js)
  grunt.task.registerMultiTask( name, "Test 'nyc_mocha' stuff", function() {
    const task = this;
    resolve({ name, grunt, task });
  });

  // run registered task using current gruntfile.js
  // FUTURE: find a way to pass in some other config
  grunt.tasks([ name ], undefined, () => {});
});

module.exports.env = promise.catch(( error ) => { grunt.fail.warn( "custom error in 0.0.constants.js" )});
