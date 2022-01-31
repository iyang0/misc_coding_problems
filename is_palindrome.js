function isPalindrome(string) {
    const len = string.length;
    for(let i=0; i < len/2; i++){
        if(string[i] !== string[len - i - 1]) return false
    }

    return true
}

function scrambledPalindromeCheck(string) {
    let frequency = {};
    let isEvenLength = (string.length % 2 === 0);

    for (let letter of string) {
        frequency[letter] = (frequency[letter] || 0) + 1;
        // delete from object if there are two of the same letter
        if (frequency[letter] === 2) {
            delete frequency[letter]
        }
    }

    //if there is nothing in the frequency counter and word is even length
    //or if it's odd length and there is one thing, return true.
    if (isEvenLength && Object.keys(frequency).length === 0) {
        return true;
    } else if (!isEvenLength && Object.keys(frequency).length === 1) {
        return true;
    }

    return false;
}