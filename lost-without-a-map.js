/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know. */

// map method
function double(array) {
  return array.map(num => num * 2);
}

console.log(double([1, 2, 3]));

// with for loop
function double2(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  return newArray;
}

console.log(double2([1, 2, 3]));
