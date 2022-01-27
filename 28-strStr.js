/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle === "") return 0;
    let left = 0, right = 0;
    
    for(let i = 0; i < haystack.length; i++){
        right++;
        const haySubStr = haystack.slice(left,right);
        const needleSubStr = needle.slice(0, haySubStr.length);
        if(needleSubStr === haySubStr && haySubStr === needle){
            return left;
        }
        
        if(haySubStr !== needleSubStr){
            left++;
        }
        
    }
    return -1;
};