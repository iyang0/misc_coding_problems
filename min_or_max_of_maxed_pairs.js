/**
 * given 2 arrays of equal length, if max(element_from_arr1, element_from_arr2) is applied to all pairs
 * return the maximum or mimum of all maxed pairs.
 * @param {number[]} arr1 - array of ints
 * @param {number[]} arr2 - array of ints
 * @param {boolean} max - boolean of whether function should return min or max
 * @returns {number} the minimum or maximum of the max of pairs between array 1 and array 2.
*/
function tandem(arr1, arr2, max) {
    arr1.sort((a,b) => a-b);
    max ? arr2.sort((a,b) => b-a) : arr2.sort((a,b) => a-b); 
    const output = [];
      
      for(let i=0; i<arr1.length; i++){
          output.push( Math.max(arr1[i], arr2[i]))
      }
      
      return output.reduce((prev, curr) => prev + curr, 0);
  }