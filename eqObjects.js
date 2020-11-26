
const ab = { a: "1", b: "2" };
const ba = { b: "1", a: "2" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false


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


