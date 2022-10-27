/* eslint-disable no-console */
const chalk = require('chalk');
const _ = require('lodash');

const log = (...args) => {
  const mappedArgs = _.toArray(args).map((arg) => {
    if (typeof arg === 'object') {
      const string = JSON.stringify(arg, null, 2);

      return chalk.green(string);
    } else {
      return chalk.green(arg.toString());
    }
  });

  console.log(chalk.green(mappedArgs));
};

const error = (...args) => {
  const mappedArgs = _.toArray(args).map((arg) => {
    // eslint-disable-next-line no-param-reassign
    arg = arg.stack || arg;
    const name = arg.name || '[ ❌ ERROR ❌ ]';

    let msg;

    if (typeof arg === 'object') {
      const string = JSON.stringify(arg, null, 2);

      msg = chalk.red(string);
    } else {
      msg = chalk.red(arg.toString());
    }

    // eslint-disable-next-line prefer-template
    return chalk.yellow.bold(name) + ' ' + chalk.red(msg);
  });

  console.log(chalk.red(...mappedArgs));
};

module.exports = {
  error,
  log
};
