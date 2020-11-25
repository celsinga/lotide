const middle = function(array) {
  let output = [];
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      output.push(array[Math.floor(array.length / 2)]);
    } else if (array.length % 2 === 0) {
      output.push(array[Math.floor((array.length / 2)) - 1]);
      output.push(array[Math.floor(array.length / 2)]);
    }
  }
  return output;
};

// Test Code
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]