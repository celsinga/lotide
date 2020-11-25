const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne !== arrayTwo) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
};


eqArrays([1, 2, 3], [1, 2, 3]), true; // => should PASS
eqArrays([1, 2, 3], [3, 2, 1]), false; // => should PASS

eqArrays(["1", "2", "3"], ["1", "2", "3"]), true;
eqArrays(["1", "2", "3"], ["1", "2", 3]), false;