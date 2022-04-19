/**
 * Reverses an input string without using .split() or .reverse() methods
 * @param {String} str
 * @returns {String} A string which will reverse the input string by word and whitespace
*/
function reverseWordsInString(str) {
  const words = str.match(/\S+|\s+/g) || "";
  let output = '';
  for(let i=words.length-1; i>=0; i--){
    output += words[i];
  }
  return output;
}