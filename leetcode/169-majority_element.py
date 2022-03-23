from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        """
        given an array of nums, return the majority element
        the majority element is an element that appears more than 'n/2' times
        """
        counter = {}
        for num in nums:
            counter[num] = counter.get(num, 0) + 1
            if counter[num] > len(nums)/2:
                return num
        
        return None