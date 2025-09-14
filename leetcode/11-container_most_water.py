class Solution:
    def maxArea(self, height: List[int]) -> int:
        # area of a box = l*w
        # find the most area between two lines
        # probably want to start with pointers between the ends since given two containers of similar height
        # if we use a wider one it will have more area
        left, right = 0, len(height) - 1
        # track what has been recorded as most area
        curr_most_area = 0
        #loop until the pointers pass each other
        while left < right:
            width = right - left
            curr_height = min(height[left], height[right])
            area = width*curr_height
            curr_most_area = max(curr_most_area, area)

            # want to move left pointer right if the right pointer is bigger and vice versa
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return curr_most_area
