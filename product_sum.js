/**
 * given a nested array of numbers and subarrays, return the sum of it's elements
 * where subarrays are summed and then multiplied by depth.
 * e.g. [x, [y, z]] === x + 2 * (y + z)
 * @param arr - a non empty array containing integers or array containing ints or other arrays
 * @returns the sum of all integers and the product of the depth of subarrays with the sum of that subarray
*/
function productSum(arr){
    return arrayDepthProduct(arr, 1);
}

function arrayDepthProduct(arr, currDepth){
    return arr.reduce((partialSum, current) => {
        if(Array.isArray(current)){
            current = currDepth * arrayDepthProduct(current, currDepth+1);
        }else{
            current = currDepth * current;
        }
        return partialSum + current;
    }, 0)
}