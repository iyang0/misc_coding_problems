/**
 * @param {Number[][]} arr - a 2 dimensional array of integer ranges, each inner array has exactly two elements and is always ordered lowest to highest
 * @returns {Number[][]} the input array with all overlapping ranges merged together
*/
function mergeOverlappingRanges(arr) {
    const output = [];
    //make sure input is sorted by first element in range
    const sortedArr = arr.sort((a,b) => a[0] - b[0]);
    let current = sortedArr[0];
    output.push(current);
    
    for(let i=0; i<sortedArr.length; i++){
        const [currStart, currEnd] = current;
        const [nextStart, nextEnd] = sortedArr[i];
        if(currEnd >= nextStart){
            //an interval range could contain all of the next range of numbers, so use max.
            current[1] = Math.max(currEnd, nextEnd)
        } else {
            current = sortedArr[i];
            output.push(current);
        }
    }
    
    return output;
}