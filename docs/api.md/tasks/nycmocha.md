## Functions

<dl>
<dt><a href="#executeNYCMocha">executeNYCMocha(grunt, task, obj)</a></dt>
<dd><p>Return a promise for executing
   &#39;node --[node opts] nyc --[nyc opts] mocha --[mocha opts]&#39;</p>
</dd>
<dt><a href="#runTaskNYCMocha">runTaskNYCMocha()</a> ⇒ <code>Promise</code></dt>
<dd></dd>
</dl>

<a name="executeNYCMocha"></a>

## executeNYCMocha(grunt, task, obj)
Return a promise for executing   'node --[node opts] nyc --[nyc opts] mocha --[mocha opts]'

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | the runtime 'instance' of grunt. |
| task | <code>grunt.task</code> | the current task |
| obj | <code>Object</code> | wrapper for options and arguments. |

<a name="runTaskNYCMocha"></a>

## runTaskNYCMocha() ⇒ <code>Promise</code>
**Kind**: global function  
**Returns**: <code>Promise</code> - ... required by callee to terminate async call (on "then")  
