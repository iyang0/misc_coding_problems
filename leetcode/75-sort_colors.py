class Solution:
    def sortColors(self, nums) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        count = {}
        for num in nums:
            count[num] = count.get(num, 0) + 1
        
        i = 0
        while i < len(nums):    
            if count.get(0,0) > 0:
                nums[i] = 0
                count[0] -=  1
            elif count.get(1,0) > 0:
                nums[i] = 1
                count[1] -= 1
            elif count.get(2,0) > 0:
                nums[i] = 2
                count[2] -= 1
            i += 1