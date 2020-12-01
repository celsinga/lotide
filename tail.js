const assertEqual = require('./assertEqual');

const tail = function(array) {
  let output = array.slice(-1)[0];
  return output;
};

module.exports = tail;