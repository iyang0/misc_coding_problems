/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    //sort the array
    nums.sort((a, b) => a - b);
	let output = [];
    //make a hashmap to make sure that there are no duplicates
    let triplets = {};
    
	for(let curr = 0; curr < nums.length; curr++){
		//for each number, make left and right pointer at the right of current index and last index
        //then move left and right pointers to check if they sum to 0
        let left = curr + 1;
		let right = nums.length - 1;
		while(left<right){
            //since it is sorted, moving left pointer right will make current sum bigger
            //moving right pointer left will make current sum smaller
			let currSum = nums[curr] + nums[left] + nums[right];
			if (currSum === 0){
                //stringify the three numbers and check if that is in the hashmap
                let triplet = `${nums[curr]}, ${nums[left]}, ${nums[right]}`;
				if(!(triplet in triplets)){
                    //if not in hashmap add to output array
                    output.push([nums[curr], nums[left], nums[right]]);
                    triplets[triplet] = true;
                }

				left++;
				right--;
			} else if(currSum < 0){
				left++;
			} else{
				right--;
			}
		}
	}
	
	return output;
};