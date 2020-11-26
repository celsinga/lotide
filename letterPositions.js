const letterPositions = function(word) {
  const letterOccuranceByIndex = {};
  for (let characterIndex = 0; characterIndex < word.length; characterIndex++) {
    const letter = word[characterIndex];
    const keyExistsForLetter = letterOccuranceByIndex[letter];
    if (keyExistsForLetter) {
      letterOccuranceByIndex[word[characterIndex]].push(characterIndex);
    } else {
      letterOccuranceByIndex[word[characterIndex]] = [characterIndex];
    }
  }
  return letterOccuranceByIndex;
};

console.log(letterPositions('LHL'));
console.log(letterPositions('Lighthouse Labs'));