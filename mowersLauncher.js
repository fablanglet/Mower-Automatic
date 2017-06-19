const Mower = require('./models/mower');
const fs = require('fs');

/**
* Split a coordinate XY string to an object
* @param {String} coordinate String value compose of coordinate and orientation
* @returns {Object} Return an object with x, y properties and if available the orientation
*/
const sliptCoordinate = (coordinate) => {
  const obj = {
    x: coordinate[0],
    y: coordinate[1],
  };
  if (typeof coordinate[2] !== 'undefined') {
    obj.orientation = coordinate[2];
  }

  return obj;
};

/**
* Read a file line by line, create mower and move it.
* @param {String} filePath String representing the path of the file to read
* @returns {Array} Return the last position of each mowers
*/
const launchMower = (filePath) => {
  let path = filePath;
  if (typeof path === 'undefined') {
    path = 'testfile';
  }

  const data = fs.readFileSync(path);
  const arrayLine = data.toString().split('\n');

  let area;
  let mower = {};
  const result = [];

  arrayLine.forEach((line, index) => {
    if (index === 0) {
      area = sliptCoordinate(line);
    } else if (index % 2 === 1) { // Initial position
      const initialPosition = sliptCoordinate(line);
      mower = new Mower({ x: initialPosition.x, y: initialPosition.y },
        initialPosition.orientation, area);
    } else if (index % 2 === 0) { // Command line
      mower.trip(line);
      result.push(mower.toString());
    }
  });
  return result;
};

module.exports = {
  launchMower,
};
