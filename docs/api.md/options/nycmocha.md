
<br><a name="module_grunt-nyc-mocha/options/nycmocha"></a>

## grunt-nyc-mocha/options/nycmocha
> options/nycmocha.js: grunt-nyc-mocha


* [grunt-nyc-mocha/options/nycmocha](#module_grunt-nyc-mocha/options/nycmocha)
    * [~getNYCCoverageOptions()](#module_grunt-nyc-mocha/options/nycmocha..getNYCCoverageOptions) ⇒ <code>object</code>
    * [~getNYCSourcemapOptions()](#module_grunt-nyc-mocha/options/nycmocha..getNYCSourcemapOptions) ⇒ <code>object</code>
    * [~getNYCOptions()](#module_grunt-nyc-mocha/options/nycmocha..getNYCOptions) ⇒ <code>object</code>
    * [~getMochaOptions()](#module_grunt-nyc-mocha/options/nycmocha..getMochaOptions) ⇒ <code>object</code>
    * [~getNodeOptions()](#module_grunt-nyc-mocha/options/nycmocha..getNodeOptions) ⇒ <code>object</code>
    * [~getOptions()](#module_grunt-nyc-mocha/options/nycmocha..getOptions) ⇒ <code>Object</code>
    * [~getTaskOptions(task)](#module_grunt-nyc-mocha/options/nycmocha..getTaskOptions) ⇒ <code>Object</code>
    * [~toArgsImpl(grunt, task)](#module_grunt-nyc-mocha/options/nycmocha..toArgsImpl) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
    * [~toArgs(grunt, task)](#module_grunt-nyc-mocha/options/nycmocha..toArgs) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>


<br><a name="module_grunt-nyc-mocha/options/nycmocha..getNYCCoverageOptions"></a>

### grunt-nyc-mocha/options/nycmocha~getNYCCoverageOptions() ⇒ <code>object</code>
> Returns default options for nyc coverage.

**Returns**: <code>object</code> - default options for nyc coverage.  

<br><a name="module_grunt-nyc-mocha/options/nycmocha..getNYCSourcemapOptions"></a>

### grunt-nyc-mocha/options/nycmocha~getNYCSourcemapOptions() ⇒ <code>object</code>
> Returns default options for nyc sourcemap.

**Returns**: <code>object</code> - default options for nyc sourcemap.  

<br><a name="module_grunt-nyc-mocha/options/nycmocha..getNYCOptions"></a>

### grunt-nyc-mocha/options/nycmocha~getNYCOptions() ⇒ <code>object</code>
> Returns default settings for basic nyc options.

**Returns**: <code>object</code> - default settings for basic nyc options.  

<br><a name="module_grunt-nyc-mocha/options/nycmocha..getMochaOptions"></a>

### grunt-nyc-mocha/options/nycmocha~getMochaOptions() ⇒ <code>object</code>
> Returns default settings for basic mocha options.

**Returns**: <code>object</code> - default settings for basic mocha options.  

<br><a name="module_grunt-nyc-mocha/options/nycmocha..getNodeOptions"></a>

### grunt-nyc-mocha/options/nycmocha~getNodeOptions() ⇒ <code>object</code>
> Returns default settings for basic node options.

**Returns**: <code>object</code> - default settings for basic node options.  

<br><a name="module_grunt-nyc-mocha/options/nycmocha..getOptions"></a>

### grunt-nyc-mocha/options/nycmocha~getOptions() ⇒ <code>Object</code>
> Defines and returns the set of options that is passed to task 'nyc_mocha'.

**Returns**: <code>Object</code> - nyc_mocha default options  

<br><a name="module_grunt-nyc-mocha/options/nycmocha..getTaskOptions"></a>

### grunt-nyc-mocha/options/nycmocha~getTaskOptions(task) ⇒ <code>Object</code>
> Returns grunt task specific options for 'nyc_mocha'.>  Note: 'nyc_mocha' default options and configuration options>        have already been merged!

**Returns**: <code>Object</code> - 'nyc_mocha' options for grunt task  

| Param | Type |
| --- | --- |
| task | <code>grunt.task</code> | 


<br><a name="module_grunt-nyc-mocha/options/nycmocha..toArgsImpl"></a>

### grunt-nyc-mocha/options/nycmocha~toArgsImpl(grunt, task) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
> Convert grunt task specific options for 'nyc_mocha' to an array of>  arguments, which will be used for calling nyc and mocha.

**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - { args, opts }  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 
| task | <code>grunt.task</code> | 


<br><a name="module_grunt-nyc-mocha/options/nycmocha..toArgs"></a>

### grunt-nyc-mocha/options/nycmocha~toArgs(grunt, task) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
> Convert grunt task specific options for 'nyc_mocha' to an array of>  arguments, which will be used for calling nyc and mocha.

**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - { args, opts }  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 
| task | <code>grunt.task</code> | 

