function isPalindrome(string) {
	const len = string.length;
	for(let i=0; i < len; i++){
		if(string[i] !== string[len - i - 1]) return false
	}

	return true
}