// Given the credit card number replace all numbers with stars except the last four numbers

// example:
// CC: 12345667900 => ********7900

let stringCreditCard = "12345667900"
let numCreditCard = 12334597900


function credit(someInput){
  let aString = someInput.toString(10)
  let creditArray = [...aString];
  for(let i=0; i < creditArray.length - 4; i++){
    creditArray[i] = "*"
  }
  let newString = creditArray.join("");
  return newString;
}



console.log(credit(stringCreditCard))
console.log(credit(numCreditCard))

/* 
OUTPUT
*******7900
*******7900
*/
