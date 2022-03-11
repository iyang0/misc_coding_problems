class Solution:
    def hammingWeight(self, n: int) -> int:
        binary = format(n, 'b')
        # turn an integer into list of digits
        digitList = [int(digit) for digit in str(binary)]
        # make a counter for number of bits
        bitCounter = {}
        for digit in digitList:
            # loop through list of digits and add to counter
            bitCounter[digit] = bitCounter.get(digit, 0) + 1
        
        # return the number of 1s
        return bitCounter.get(1,0)