/**
 * @param str - a non-empty string containing lower-case letters
 * @param key - a non-negative integer to shift the string
 * @returns a new string with all the letters from the input string shifted by the amount in the key
*/
function caesarCipherEncryptor(str, key) {
	const charCodeArr = str.split('').map(ele => ele.charCodeAt(0));
	return charCodeArr.map(ele => ((ele-97+key)%26+97))
		.map(ele => String.fromCharCode(ele))
		.join('');
}