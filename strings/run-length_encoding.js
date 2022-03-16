/**
 * @param {String} str
 * @returns {String} a string that represents the run length encoding of the input
 * 
 * a run length encoding is lossless data compression where runs of data are
 * represented as a count of the repeating data
 * e.g. "AAABBBBBB" -> "3A6B"
*/
function runLengthEncoding(str) {
    let output = [];
    let count = 0;
    
    for(let idx=0; idx<str.length; idx++){
        if(idx!==0 &&(str[idx] !== str[idx-1] || count >= 9)){
            output.push(count.toString());
            output.push(str[idx-1]);
            count = 0;
        }
        count++;
    }
    
    output.push(count.toString());
    output.push(str[str.length-1]);
    
    return output.join('');
}