/*
https://www.codewars.com/kata/find-the-first-non-consecutive-number/javascript

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first 
non-consecutive number.

If the whole array is consecutive then return null or Nothing.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in 
ascending order. The numbers could be positive or negative and the first non-consecutive could be either too! 
*/

function firstNonConsecutive (arr) {
  let firstNonConsecutive = "Nothing";
  let currentNum = null;
  for(let i = 0; i < arr.length; i++){
    currentNum = arr[i];
    if(i === (arr.length - 1)){
        return firstNonConsecutive;
    } else if ((currentNum + 1) !== arr[i+1]){
        return firstNonConsecutive = arr[i+1];
    }
  }
  return firstNonConsecutive
}



let array  = [1,2,3,4,6,7,8];
let array2 = [1,2,3,4,5,6,7]
console.log(firstNonConsecutive(array))
console.log(firstNonConsecutive(array2))


// Best Solution
function betterfirstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}

