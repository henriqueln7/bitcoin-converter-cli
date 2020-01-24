const axios = require('axios');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora({
  text: 'Retrieving bitcoin data',
  color: 'yellow'
});

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  spinner.start();

  return axios.get(url).then(body => {
    spinner.stop();
    return body.data;
  }).then(data => console.info(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(data.price)}`)).catch(err => {
    spinner.stop();
    console.info(chalk.red('Something went wrong in the API. Try in a few minutes.'));
  });
}

module.exports = convertBTC;