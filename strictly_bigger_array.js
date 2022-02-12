/**
 * given two arrays of equal length, return whether all numbers in one
 * could be strictly greater than at least one number in the other array.
 * @param {Number[]} arr1 - an array of numbers
 * @param {Number[]} arr2 - an array of numbers
 * @returns {Boolean} whether all nums in one array is bigger than other
*/
function isStrictlyBigger(arr1, arr2) {
    arr1.sort( (a,b) => b-a);
    arr2.sort( (a,b) => b-a);
    const redHigher = arr1[0] > arr2[0];
    
    for(let i=0; i<arr1.length; i++){
        if(redHigher){
            if(arr1[i] <= arr2[i]) return false;
        } else if(!redHigher){
            if(arr1[i] >= arr2[i]) return false;
        }
    }
    
    return true;
}