/**
 * returns whether the input array is monotonic.
 * Monotonic means the array are entirely non-increasing or entirely non-decreasing
 * 
 * @param {Number[]}
 * 
 * @returns {Boolean}
*/
function isMonotonic(arr) {
    if(arr.length <= 2) return true;
    
    let isIncreasing = null;
    //for cases where the first few elements are the same number
    let i=0;
    while(i<arr.length){
        i++;
        if(arr[i-1] !== arr[i]) {
            isIncreasing = arr[i-1] < arr[i];
            break;
        }
    }
    
    for(i; i<arr.length; i++){
        if(isIncreasing){
            if(arr[i] < arr[i-1]) return false;
        }else{
            if(arr[i] > arr[i-1]) return false;
        }
    }
    
    return true;
}