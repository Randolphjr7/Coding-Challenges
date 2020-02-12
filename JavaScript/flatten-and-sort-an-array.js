/* 

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well 

*/



flattenArray = (array) => {

  let result = [];
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i].length === 0){
      continue;
    } else {
      newArray.push(array[i]);
    }
  }

  for(let i = 0; i < newArray.length; i++){
    let element = newArray[i];
    /* The concat() method is used to merge two or more arrays. This method 
    does not change the existing arrays, but instead returns a new array. */
    console.log('element is: ', element, 'type is: ', typeof element);
    
    result = result.concat(element);
  }
  
  return result.sort((a,b) => a - b)
}


const testArray = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
console.log(flattenArray(testArray));
