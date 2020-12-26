
<br><a name="module_grunt-nyc-mocha/tasks/nycmocha"></a>

## grunt-nyc-mocha/tasks/nycmocha
> tasks/nycmocha.js: grunt-nyc-mocha


* [grunt-nyc-mocha/tasks/nycmocha](#module_grunt-nyc-mocha/tasks/nycmocha)
    * [~executeNYCMocha(grunt, task, obj)](#module_grunt-nyc-mocha/tasks/nycmocha..executeNYCMocha)
    * [~runTaskNYCMocha()](#module_grunt-nyc-mocha/tasks/nycmocha..runTaskNYCMocha) ⇒ <code>Promise</code>
    * [~registerMultiTaskNYCMocha(grunt)](#module_grunt-nyc-mocha/tasks/nycmocha..registerMultiTaskNYCMocha)


<br><a name="module_grunt-nyc-mocha/tasks/nycmocha..executeNYCMocha"></a>

### grunt-nyc-mocha/tasks/nycmocha~executeNYCMocha(grunt, task, obj)
> Return a promise for executing>    'node --[node opts] nyc --[nyc opts] mocha --[mocha opts]'


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | the runtime 'instance' of grunt. |
| task | <code>grunt.task</code> | the current task |
| obj | <code>Object</code> | wrapper for options and arguments. |


<br><a name="module_grunt-nyc-mocha/tasks/nycmocha..runTaskNYCMocha"></a>

### grunt-nyc-mocha/tasks/nycmocha~runTaskNYCMocha() ⇒ <code>Promise</code>
> Run the nyc mocha task.

**Returns**: <code>Promise</code> - ... required by callee to terminate async call (on "then")  

<br><a name="module_grunt-nyc-mocha/tasks/nycmocha..registerMultiTaskNYCMocha"></a>

### grunt-nyc-mocha/tasks/nycmocha~registerMultiTaskNYCMocha(grunt)
> Registers the 'nyc_mocha' multitask.


| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 

