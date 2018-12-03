/* eslint-disable import/no-extraneous-dependencies */
import {
  expect,
} from 'chai';

import Mower from '../models/mower';

describe('Trip - Mower', () => {
  it('should have a final position {1,3}N with starting point {1,2}N, command GAGAGAGAA', () => {
    const mower = new Mower({
      x: 1,
      y: 2
    }, 'N');
    mower.move('G');
    expect(mower.toString()).to.equal('1 - 2 - W');
    mower.move('A');
    expect(mower.toString()).to.equal('0 - 2 - W');
    mower.move('G');
    expect(mower.toString()).to.equal('0 - 2 - S');
    mower.move('A');
    expect(mower.toString()).to.equal('0 - 1 - S');
    mower.move('G');
    expect(mower.toString()).to.equal('0 - 1 - E');
    mower.move('A');
    expect(mower.toString()).to.equal('1 - 1 - E');
    mower.move('G');
    expect(mower.toString()).to.equal('1 - 1 - N');
    mower.move('A');
    expect(mower.toString()).to.equal('1 - 2 - N');
    mower.move('A');
    expect(mower.currentPosition.x).to.equal(1);
    expect(mower.currentPosition.y).to.equal(3);
    expect(mower.currentOrientation.toString()).to.equal('N');
  });

  it('should have a final position {5,1}E with starting point {3,3}E, command AADAADADDA', () => {
    const mower = new Mower({
      x: 3,
      y: 3
    }, 'E');
    mower.move('A');
    expect(mower.toString()).to.equal('4 - 3 - E');
    mower.move('A');
    expect(mower.toString()).to.equal('5 - 3 - E');
    mower.move('D');
    expect(mower.toString()).to.equal('5 - 3 - S');
    mower.move('A');
    expect(mower.toString()).to.equal('5 - 2 - S');
    mower.move('A');
    expect(mower.toString()).to.equal('5 - 1 - S');
    mower.move('D');
    expect(mower.toString()).to.equal('5 - 1 - W');
    mower.move('A');
    expect(mower.toString()).to.equal('4 - 1 - W');
    mower.move('D');
    expect(mower.toString()).to.equal('4 - 1 - N');
    mower.move('D');
    expect(mower.toString()).to.equal('4 - 1 - E');
    mower.move('A');

    expect(mower.currentPosition.x).to.equal(5);
    expect(mower.currentPosition.y).to.equal(1);
    expect(mower.currentOrientation.toString()).to.equal('E');
  });

  it.only('should have a final position {1,3}W with starting point {4,4}S, command GADDAAGADAA', () => {
    const mower = new Mower({
      x: 4,
      y: 4,
    }, 'S');
    mower.move('G');
    expect(mower.toString()).to.equal('4 - 4 - E');
    mower.move('A');
    expect(mower.toString()).to.equal('5 - 4 - E');
    mower.move('D');
    expect(mower.toString()).to.equal('5 - 4 - S');
    mower.move('D');
    expect(mower.toString()).to.equal('5 - 4 - W');
    mower.move('A');
    expect(mower.toString()).to.equal('4 - 4 - W');
    mower.move('A');
    expect(mower.toString()).to.equal('3 - 4 - W');
    mower.move('G');
    expect(mower.toString()).to.equal('3 - 4 - S');
    mower.move('A');
    expect(mower.toString()).to.equal('3 - 3 - S');
    mower.move('D');
    expect(mower.toString()).to.equal('3 - 3 - W');
    mower.move('A');
    expect(mower.toString()).to.equal('2 - 3 - W');
    mower.move('A');

    expect(mower.currentPosition.x).to.equal(1);
    expect(mower.currentPosition.y).to.equal(3);
    expect(mower.currentOrientation.toString()).to.equal('W');
  });

  it('should start at {1,2}N, accept a list of commands GAGAGAGAA and finish at {1,3}N', () => {
    const mower = new Mower({
      x: 1,
      y: 2
    }, 'N');
    mower.trip('GAGAGAGAA');
    expect(mower.currentPosition.x).to.equal(1);
    expect(mower.currentPosition.y).to.equal(3);
    expect(mower.currentOrientation.toString()).to.equal('N');
  });

  it('should start at {3,3}E, accept a list of commands AADAADADDA and finish at {5,1}E', () => {
    const mower = new Mower({
      x: 3,
      y: 3
    }, 'E');
    mower.trip('AADAADADDA');
    expect(mower.currentPosition.x).to.equal(5);
    expect(mower.currentPosition.y).to.equal(1);
    expect(mower.currentOrientation.toString()).to.equal('E');
  });
});
