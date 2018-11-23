/* eslint-disable import/no-extraneous-dependencies */
import {
  expect,
} from 'chai';

import mowersLauncher from '../mowersLauncher';

describe('Start mowers', () => {
  it('should read files and instanciate mowers', () => {
    console.log(mowersLauncher);
    const results = mowersLauncher.launchMower();
    console.info(results);
    expect(results.length).to.equal(2);
  });
});
