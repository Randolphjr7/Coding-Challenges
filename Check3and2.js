/* 
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a 
*/



function checkThreeAndTwo(array) {
  
  let letterA = "a";
  let letterB = "b";
  let letterC = "c";

  let aCount = 0;
  let bCount = 0;
  let cCount = 0;

  for(letter of array){
      if(letter === letterA){
        aCount++;
      }
      if(letter === letterB){
        bCount++;
      }
      if(letter === letterC){
        cCount++;
      }
  }

  if(aCount === 3 && ((bCount === 2) || (cCount === 2))){
    return true;
  }
  if(aCount === 2 && ((bCount === 3) || (cCount === 3))){

    return true;
  }

  return false;
}
