/* Complete the solution so that the function will break up camel casing, 
using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing */

function solution(string) {
  return string
    .split("")
    .map(function(letter) {
      return letter === letter.toUpperCase() ? " " + letter : letter;
    })
    .join("");
}

console.log(solution("camelCasing"));
