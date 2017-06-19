/* eslint-disable import/no-extraneous-dependencies */
const Mower = require('../models/mower');
const expect = require('chai').expect;

describe('Position - Mower', () => {
  it('should move 1 step forward if command A and orientation to N', () => {
    const mower = new Mower({ x: 1, y: 1 }, 'N');
    mower.move('A');
    expect(mower.currentPosition.x).to.equal(1);
    expect(mower.currentPosition.y).to.equal(2);
  });

  it('should not move if command A and orientation W and position {0,1}', () => {
    const mower = new Mower({ x: 0, y: 1 }, 'W');
    mower.move('A');
    expect(mower.currentPosition.x).to.equal(0);
    expect(mower.currentPosition.y).to.equal(1);
  });

  it('should not move if command A and orientation S and position {1,0}', () => {
    const mower = new Mower({ x: 1, y: 0 }, 'S');
    mower.move('A');
    expect(mower.currentPosition.x).to.equal(1);
    expect(mower.currentPosition.y).to.equal(0);
  });
});
