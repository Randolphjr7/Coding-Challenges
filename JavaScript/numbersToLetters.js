/*

Given an array of numbers (in string format), you must return a string. The numbers correspond 
to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', 
'?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid. 

Example:
Test.describe("Example tests",_=>{
Test.assertEquals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
Test.assertEquals(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
Test.assertEquals(switcher(['4', '24']), 'wc'); 
});

*/


switcher = (array) => {
  
  const alphabet = ['0','z','y','x','w', 'v','u','t','s','r','q','p','o','n','m', 'l','k','j','i','h','g','f','e','d','c','b','a', '!','?',' '];
  let index, letter;
  let word = "";
  for(element of array){
    index = parseInt(element, 10);
    letter = alphabet[index];
    word += letter;
  }

 return word;   
}

let codewars = ['24', '12', '23', '22', '4', '26', '9', '8'];
let wc       = ['4', '24'];
let btswmdsbd_kkw = ['25','7','8','4','14','23','8','25','23','29','16','16','4'];

console.log(switcher(codewars));
console.log(switcher(wc));
console.log(switcher(btswmdsbd_kkw));


// BEST PRACTICE
/* const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcherB = x => x.map(item => alpha[item]).join('') 
console.log(switcherB(codewars)); */
