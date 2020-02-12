/*  a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221 */


// my solution 
function descendingOrder(n){
  let result="";
  let digits = n.toString().split('');
  let realDigits = digits.map(Number);
  realDigits.sort(function(a, b){return b-a});
  realDigits.forEach(element => {result = result + element})
  return parseInt(result);
}

// optimized solution 
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
