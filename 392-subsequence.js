/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //make index counter for subsequence 
    let sIdx = 0;

    for(let ele of t){
        //for each character of the larger string
        //check if the current character is the next element in the substring 
        if(ele === s[sIdx]){
            //then move to next character in the substring if it is
            sIdx++;
        }
    }

    //return whether the substring is valid in the larger string.
    return sIdx === s.length;
};