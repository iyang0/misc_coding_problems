/**
 * Mutates input arrayfrom parameter 1 so all integers that are toMove are at the end. Does not need to maintain order of other integers.
 * 
 * @param {Number[]} arr - An array of integers
 * @param {Number} toMove - An integer that should be in the array
 * 
 * @returns {Number[]} the same array of integers as parameter 1
*/
function moveElementToEnd(arr, toMove) {
    let left = 0, right = arr.length-1;
      
    while(left < right){
        if(arr[right] === toMove){
            right--;
        } else if(arr[left] === toMove && arr[right] !== toMove){
            //swap in place using destructuring assignment.
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        } else{
            left++;
        }	
    }
    
    return arr;
}