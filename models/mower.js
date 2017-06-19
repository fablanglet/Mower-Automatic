const Position = require('./position');
const Orientation = require('./orientation');


class Mower {
  /**
  * Mower Constructor
  * @param {Object} initPosition Initial position {x, y}
  * @param {String} initOrientation Initial Orientation
  * @param {Object} area Size of the area {x, y}
  */
  constructor(initPosition, initOrientation, area) {
    // Required field to instantiate a mower
    if (typeof initPosition === 'undefined' || typeof initOrientation === 'undefined') {
      throw new Error('initPosition and initOrientation are required');
    }

    this.currentPosition = new Position(initPosition.x, initPosition.y, area);
    this.currentOrientation = new Orientation(initOrientation);
  }

  /**
  * Move a mower 1 time in terme of orientation or position
  * @param {String} command Command to apply on the mower
  */
  move(command) {
    if (command.toUpperCase() === 'G' || command.toUpperCase() === 'D') {
      this.currentOrientation.move(command);
    } else if (command.toUpperCase() === 'A') {
      this.currentPosition.move(this.currentOrientation.toString());
    }
  }

  /**
  * Move a mower multiple time applying all command in serie
  * @param {String} listCommand A list of command sended as a string
  */
  trip(listCommands) {
    for (const command of listCommands) {
      this.move(command);
    }
  }

  /**
  * String representing the current position and the current orientation of mower.
  * @returns {String} Return current position and current orientation as String
  */
  toString() {
    return `${this.currentPosition.x} - ${this.currentPosition.y} - ${this.currentOrientation.toString()}`;
  }
}

module.exports = Mower;
