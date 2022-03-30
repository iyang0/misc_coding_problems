/**
 * @param {Number[]} arr - an array of unsorted integers
 * @returns {Number} the first element in the input array that has a duplicate.
 * O(n) time, O(n) space
*/
function firstDuplicate(arr) {
    let counter = {};
    for(let i=0; i<arr.length; i++){
        counter[arr[i]] = ( counter[arr[i]] || 0 ) + 1;
        if(counter[arr[i]] > 1) return arr[i];
    }
    return -1;
}