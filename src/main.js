#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const convertBTC = require('./ConvertBTC');

program.version(pkg.version);
program.description('Convert BTC to any currency defined.');

program
  .option('-c, --currency <currency>', 'Currency to be converted (Default: USD)', 'USD')
  .option('-a, --amount <amount>', 'Amount to be converted (Default: 1)', 1);

program.parse(process.argv);

convertBTC(program.currency, program.amount);
