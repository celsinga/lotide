const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = array;
  newArray.shift(0, 1);
  return newArray;
};

module.exports = tail;