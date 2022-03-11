/**
 * @param {string} chars - a string of any number of any characters in an unorganized state.
 * @param {string} str2 - a target string to be made of the characters in str 1
 * @returns {boolean} true if str2 can be made from characters in str. 
*/
function generateDocument(chars, str2) {
	if(str2 === "") return true;
	
  const freq = {};
	for(let char of chars){
		freq[char] = (freq[char] || 0) + 1;
	}
	
	for(let char of str2){
		if(freq[char] <= 0 || !(char in freq)){
			return false;
		} else {
			freq[char]--;
		}
	}
	
  return true;
}