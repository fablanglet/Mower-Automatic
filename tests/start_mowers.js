/* eslint-disable import/no-extraneous-dependencies */
const mowersLauncher = require('../mowersLauncher');
const expect = require('chai').expect;

describe('Start mowers', () => {
  it('should read files and instanciate mowers', () => {
    const results = mowersLauncher.launchMower();
    console.log(results);
    expect(results.length).to.equal(2);
  });
});
