const expect = require('chai').expect;
const exec = require('child_process').exec;
const btcConverter = './src/main.js';
const pkg = require('../package.json');

describe('BTC Converter CLI', () => {
  it('should return version of btc converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description when btc converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      expect(stdout.includes('Convert BTC to any currency defined.')).to.be.true;
      done();
    });
  });

  it('should return the currency option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  })
});
