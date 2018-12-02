SuperCommand
============

SuperCommand is a framework to build command-line interfaces in node.js.

## Usage

```js
import supercmd from 'supercmd'

supercmd
  .cmd('myapp [options]')
  .description('Runs MyApp in current working dir')
  .action((ctx) => {
    // place command's code here
  })

```

## API

### .cmd(*str* command)

Register a subcommand. A subcommand can take 0 - n arguments.

Wrap optional arguments in `[` and `]` and required arguments in `<` and `>`.

Example: `mycommand <infile> [outfile]`  
This would register a command `mycommand` with a required argument `infile` and one optinal argument called `outfile`. The action method will be called with the arguments as second and third params.

```js
.action((ctx, infile, outfile) => {

})
```

### .cwd(*str* workingDir)
Set a working dir

### .description(*str* description)
Describe what a program is for and what is does, show in the help page

### .option(*str* arg, *str* description, *any* defaultValue, *func* func)

Register an option parameter. The `param` argument describes the parameter name, alias, value und value type. The syntax is `[alias] [name] [value]`.

Alias is an one char long shortcut of the parameter and it is prefixed by one minus char. Example: `-f`.  
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
