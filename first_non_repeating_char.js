/**
 * given a string, make a function that returns index of first character
 * that doesn't repeat in the string.
 * else, return -1
*/
function firstNonRepeatingCharacter(string) {
    const idxOfFirstChars = {};
    const repeats = new Set();
    
    for(let i=0; i<string.length; i++){
        if(!(string[i] in idxOfFirstChars)){
            idxOfFirstChars[string[i]] = i;
        }else{
            repeats.add(string[i])
        }
    }
    
    for( const key in idxOfFirstChars){
        if(!repeats.has(key)) return idxOfFirstChars[key];
    }

    return -1;
}