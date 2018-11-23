/* eslint-disable import/no-extraneous-dependencies */
import {
  expect,
} from 'chai';

import Mower from '../models/mower';

describe('Orientation - Mower', () => {
  it('should change mower orientation from N to E with the command D', () => {
    const mower = new Mower({
      x: 1,
      y: 1,
    }, 'N');
    mower.move('D');
    expect(mower.currentOrientation.toString()).to.equal('E');
  });

  it('should change mower orientation from E to S with the command D', () => {
    const mower = new Mower({
      x: 1,
      y: 1
    }, 'E');
    mower.move('D');
    expect(mower.currentOrientation.toString()).to.equal('S');
  });

  it('should change mower orientation from S to W with the command D', () => {
    const mower = new Mower({
      x: 1,
      y: 1
    }, 'S');
    mower.move('D');
    expect(mower.currentOrientation.toString()).to.equal('W');
  });

  it('should change mower orientation from W to N with the command D', () => {
    const mower = new Mower({
      x: 1,
      y: 1
    }, 'W');
    mower.move('D');
    expect(mower.currentOrientation.toString()).to.equal('N');
  });

  it('should change mower orientation from N to W with the command G', () => {
    const mower = new Mower({
      x: 1,
      y: 1
    }, 'N');
    mower.move('G');
    expect(mower.currentOrientation.toString()).to.equal('W');
  });

  it('should change mower orientation from W to S with the command G', () => {
    const mower = new Mower({
      x: 1,
      y: 1
    }, 'W');
    mower.move('G');
    expect(mower.currentOrientation.toString()).to.equal('S');
  });

  it('should change mower orientation from S to E with the command G', () => {
    const mower = new Mower({
      x: 1,
      y: 1
    }, 'S');
    mower.move('G');
    expect(mower.currentOrientation.toString()).to.equal('E');
  });


  it('should change mower orientation from E to N with the command G', () => {
    const mower = new Mower({
      x: 1,
      y: 1
    }, 'E');
    mower.move('G');
    expect(mower.currentOrientation.toString()).to.equal('N');
  });
});
