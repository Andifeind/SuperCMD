const cmd = require('../')

cmd
  .usage('cmdtest [options]')
  .description('Shows a SuperCommand description')
  .parse(process.argv)
