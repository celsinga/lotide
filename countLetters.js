
const countLetters = function(string) {
  const output = {};
  
  for (const str of string) {
    if (output[str]) {
    output[str] += 1;
    } else {
    output[str] = 1;
    }
  }
  return output;
};

console.log(countLetters('LHL'));
console.log(countLetters('Lighthouse Labs'));