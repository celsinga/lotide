const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value){
  let output = "";
  for(const obj in object){
      if(object[obj] === value){
          output = [obj];
          //console.log(result[i]);
      } else{
          output = "undefined";
      }
  } return output.toString();
}

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
