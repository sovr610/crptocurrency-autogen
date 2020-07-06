const arg = require('arg');
var shell = require('shelljs');

function parseArgumentsForDataConfig(rawArgs) {
    const args = arg(
      {
        '--coinNmae': String,
        '--help': Boolean,
        '-cn': '--coinName',
        '-h': '--help'
      },
      {
        argv: rawArgs.slice(2),
      }
    );
    return {
      type: args['--coinName']
    };
  }

export function init() {

}