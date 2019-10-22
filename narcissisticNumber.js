/*
https://www.codewars.com/kata/narcissistic-numbers/javascript
A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the 
original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not 
i is a Narcissistic Number.
*/


function is_narcissistic(i){
  let iLength = i.toString().length;
  let numArray = Array.from(i.toString()).map(Number);
  result = 0;
  for(num of numArray){
    result += num ** iLength;
  }

  if(result.toString() === i.toString()){
    return true;
  } 
  return false;
}

console.log(is_narcissistic(153));
console.log(is_narcissistic(407));
console.log(is_narcissistic(437));

/*
OUTPUT:
true
true
false
*/
