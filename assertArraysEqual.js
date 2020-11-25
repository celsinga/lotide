const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
    return;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  }
};


assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([3,5,6],[5,9]);