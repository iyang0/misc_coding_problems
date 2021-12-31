/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
var sortedSquares = function(nums) {
    //naive approach
    let output = nums.map( ele => ele**2 );
    output.sort((a, b) => a - b);
    return output;
};
*/

var sortedSquares = function(nums) {
    //time O(n), space O(n)
    let output = new Array(nums.length).fill(0)
    let left = 0;
    let right = nums.length-1;

    for (let i = nums.length - 1; i>=0; i--){
        let lSquared = nums[left]**2;
        let rSquared = nums[right]**2;
        
        if(lSquared > rSquared){
            output[i] = lSquared;
            left++;
        } else {
            output[i] = rSquared;
            right--;
        }
    }
  return output;
};