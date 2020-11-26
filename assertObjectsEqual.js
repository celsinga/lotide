let eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i = 0; i < object1.length; i++) {
      if (!eqArrays(object1[i],object[i])) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
