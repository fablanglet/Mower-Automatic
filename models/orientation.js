class Orientation {
  /**
   * Orientation Constructor
   * @param {initOrientation} Initial Orientation
   */
  constructor(initOrientation) {
    // Required field to instantiate a mower
    if (typeof initOrientation === 'undefined') {
      throw new Error('initOrientation is required');
    }
    this.currOrientation = initOrientation;
  }

  /**
   * Convert cardinal points to degres depending of the orientation
   * @param {String} command Cardinal points (N, E, S, W).
   * @param {String} orientation Left or Right.
   * @returns {Number} Return degres
   */
  static getDegres(command, orientation) {
    switch (orientation) {
      case 'N':
        return command === 'D' ? 0 : 360;
      case 'E':
        return 90;
      case 'S':
        return 180;
      case 'W':
        return 270;
      default:
        return 0;
    }
  }

  /**
   * Convert degres to cardinal points
   * @param {Number} degres Degres value to convert
   * @returns {String} Return Cardinal points
   */
  static getOrientation(degres) {
    switch (degres) {
      case 0:
      case 360:
        return 'N';
      case 90:
        return 'E';
      case 180:
        return 'S';
      case 270:
        return 'W';
      default:
        return 'N';
    }
  }

  /**
   * Change the orientation
   * @param {String} command Command to apply (D) for Right and (G) for Left
   */
  move(command) {
    let degOrientation = 0;
    if (command === 'D') {
      degOrientation = 90;
    } else {
      degOrientation = -90;
    }

    let currentDeg = Orientation.getDegres(command, this.currOrientation);
    currentDeg += degOrientation;
    this.currOrientation = Orientation.getOrientation(currentDeg);
    return;
  }

  /**
   * Return current orientation as String
   * @returns {String} Current orientation as String
   */
  toString() {
    return this.currOrientation;
  }
}

export default Orientation;