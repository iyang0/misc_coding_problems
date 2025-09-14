class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # go from end of the lists to the front, since modifying nums1 would alter what it would be if going from first to last
        l1_idx = m-1
        l2_idx = n-1

        # pointer that starts at end of nums1 and will go until all elements reached
        curr = len(nums1) -1

        #loop until pointer is at 0
        while curr >= 0:

            # if n is 0, then it will just be what's in nums1
            if l2_idx < 0:
                return

            # check if value of end of list 1 pointer is greater than value at end of list 2
            # and that we haven't gone through all of list 1
            if nums1[l1_idx] > nums2[l2_idx] and l1_idx >= 0:
                # if it is, then add to end of list 1
                nums1[curr] = nums1[l1_idx]
                # decrement list 1 pointer
                l1_idx -= 1
            else:
                # if it isn't then add list 2 value to end of list 1 and decrrement list 2 pointer
                nums1[curr] = nums2[l2_idx]
                l2_idx -=1

            # decrement pointer for overall position
            curr -=1