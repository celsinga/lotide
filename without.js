

const without = function (arrayOne, arrayTwo) {
  let output = [];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] !== arrayTwo[j]) {
        output.push(arrayOne[i])
      } 
    }
  }
  console.log(output);
}

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]);