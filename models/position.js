/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
class Position {
  /**
  * Position Constructor
  * @param {String} x Initial x position
  * @param {String} y Initial y position
  * @param {Object} area Size of the area {x, y}
  */
  constructor(x, y, area) {
    // Required fields to instantiate a Position
    if (typeof x === 'undefined' || typeof y === 'undefined') {
      throw new Error('x and y are required');
    }
    this.x = x;
    this.y = y;
    this.maxX = typeof area !== 'undefined' ? area.x : 5;
    this.maxY = typeof area !== 'undefined' ? area.y : 5;
  }

  /**
  * Change the currention position depending of the cardinal
  * @param {String} orientation Orientation to apply the move
  */
  move(orientation) {
    switch (orientation) {
      case 'N':
        this.y < this.maxY && this.y++;
        break;
      case 'E':
        this.x < this.maxX && this.x++;
        break;
      case 'S':
        this.y > 0 && this.y--;
        break;
      case 'W':
        this.x > 0 && this.x--;
        break;
      default:
        break;
    }
  }
}

module.exports = Position;
