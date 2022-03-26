/**
 * A peak in the array is adjacent integers that are strictly increasing until they reach a point where they are strictly decreasing.
 * at least 3 numbers are required for a peak to be formed.
 * @param {Number[]} arr - array of integers in no particular order
 * @returns {Number} the length of the longest peak in the array
*/
function longestPeak(arr) {
    let longest = 0;
    for(let i = 0; i<arr.length; i++){
        const isPeak = arr[i-1] < arr[i] && arr[i] > arr[i+1];
        
        if(!isPeak) continue;
        
        let left = i-1;
        while(left >= 0 && arr[left] < arr[left+1]){
            left--;
        }
        let right = i+1;
        while(right < arr.length && arr[right] > arr[right+1]){
            right++;
        }
        
        if( right - left > longest) longest = right - left;
    }
    
    return longest;
}