 /* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"  */

function stringTransformer(str) {

  let strArray = [...str];
  let result;
  
  for(let i = 0; i < strArray.length; i++){
    
      let character = strArray[i];
      
      if(strArray[i] === character.toLowerCase()){
          strArray[i] = character.toUpperCase();
      }
      else if(strArray[i] === character.toUpperCase()){
          strArray[i] = character.toLowerCase();
      }
  }
  
  return result = strArray.join("").split(" ").reverse().join(" ")
  
}



console.log(stringTransformer("Example Input"));
