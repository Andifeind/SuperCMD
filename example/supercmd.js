const cmd = require('../')

cmd
  .usage('cmdtest [options]')
  .description('Shows a SuperCommand description')
  .option('-n, --name <str>', 'Add a name')
  .parse(process.argv)
