SuperCommand
============

SuperCommand is a framework to build command-line interfaces in node.js.

## Usage

```js
import cmd from 'supercmd'

cmd
  .usage('myapp [options]')
  .description('Runs MyApp in current working dir')

```


## API

### .cwd(*str* workingDir)
Set a working dir

### .description(*str* description)
Describe what a program is for and what is does, show in the help page

### .option(*str* arg, *str* description, *any* defaultValue, *func* func)

Register an option parameter. The `param` argument describes the parameter name, alias, value und value type. The syntax is `[alias] [name] [value]`.

Alias is an one char long shortcut of the parameter and it is prefixed by on minus. Example: `-f`.  
Name is a parameter name. It is prefixed by two minus and its the only required part. A parameter can contain chars, numbers and a minus. Example: `--foo, --foo-bar`.
The third part describes the parameter value and if it is a mandatory parameter or not. The default type is `bool`.
The type must be enclosed by either angel bracets or square bracets.
The angel bracets indicate the parameter as required, the square bracets indeicat it as optional.

Example for a required parameter of type boolean:
`-f --foo <bool>`

Example for a optional parameter of type string:
`-b --bar [str]`

Allowed types: `str`, `num`, `arr`, `bool`, `json`

### .usage(*str* description)

Describes program usage, shown in the help page.
