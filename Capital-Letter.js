/*
https://www.codewars.com/kata/find-the-capitals-1/javascript
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/


function uppercase(someString){

  let stringArray = [...someString];
  let newArray = [];
  for(let index = 0; index < stringArray.length; index++){
    if(stringArray[index] === stringArray[index].toUpperCase()){
        newArray.push(index);
    }
  }
  return newArray;
}

console.log(uppercase("CaPitaL"));
console.log(uppercase("CAPitaL"));
