/**
 * Given an array of integers nums and an integer target
 * return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution
 * and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
*/
function twoSum(nums, target){
  // value:index in nums
  let vals = {};

  for(let i in nums){
    // if something in value counter exists that add with current number 
    // adds to target, return an array of the indexes of two values
    if(vals[target-nums[i]]){
      return [ vals[target-nums[i]], i ]
    }
    vals[nums[i]] = i;

  }

  //if there is no solution, return empty array
  return [];
};
