const supercmd = require('../')

supercmd
  .cmd('cmdtest [options]')
  .description('Shows a SuperCommand description')
  .option('-n, --name <str>', 'Add a name')
  .action(() => {
    console.log('Action: cmdtest')
    console.log('CTX', ctx)
  })
  .parse(process.argv)

supercmd
  .cmd('foo <str>')
  .description('Shows a SuperCommand description')
  .option('-n, --name <str>', 'Add a name')
  .action((ctx, bar) => {
    console.log('Action: foo', bar)
    console.log('CTX', ctx)
  })
  .parse(process.argv)

supercmd
  .cmd('*')
  .description('Shows a SuperCommand description')
  .option('-n, --name <str>', 'Add a name')
  .action((ctx, bar) => {
    console.log('Action: default', bar)
    console.log('CTX', ctx)
  })
  .parse(process.argv)
