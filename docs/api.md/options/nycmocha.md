## Functions

<dl>
<dt><a href="#getOptions">getOptions()</a> ⇒ <code>Object</code></dt>
<dd><p>Defines and returns the set of options that is passed to task &#39;nyc_mocha&#39;.</p>
</dd>
<dt><a href="#getTaskOptions">getTaskOptions(task)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns grunt task specific options for &#39;nyc_mocha&#39;.
 Note: &#39;nyc_mocha&#39; default options and configuration options
       have already been merged!</p>
</dd>
<dt><a href="#toArgsImpl">toArgsImpl(grunt, task)</a> ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code></dt>
<dd><p>Convert grunt task specific options for &#39;nyc_mocha&#39; to an array of
 arguments, which will be used for calling nyc and mocha.</p>
</dd>
<dt><a href="#toArgs">toArgs(grunt, task)</a> ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code></dt>
<dd><p>Convert grunt task specific options for &#39;nyc_mocha&#39; to an array of
 arguments, which will be used for calling nyc and mocha.</p>
</dd>
</dl>

<a name="getOptions"></a>

## getOptions() ⇒ <code>Object</code>
Defines and returns the set of options that is passed to task 'nyc_mocha'.

**Kind**: global function  
**Returns**: <code>Object</code> - nyc_mocha default options  
<a name="getTaskOptions"></a>

## getTaskOptions(task) ⇒ <code>Object</code>
Returns grunt task specific options for 'nyc_mocha'. Note: 'nyc_mocha' default options and configuration options       have already been merged!

**Kind**: global function  
**Returns**: <code>Object</code> - 'nyc_mocha' options for grunt task  

| Param | Type |
| --- | --- |
| task | <code>grunt.task</code> | 

<a name="toArgsImpl"></a>

## toArgsImpl(grunt, task) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
Convert grunt task specific options for 'nyc_mocha' to an array of arguments, which will be used for calling nyc and mocha.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - { args, opts }  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 
| task | <code>grunt.task</code> | 

<a name="toArgs"></a>

## toArgs(grunt, task) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
Convert grunt task specific options for 'nyc_mocha' to an array of arguments, which will be used for calling nyc and mocha.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - { args, opts }  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 
| task | <code>grunt.task</code> | 

