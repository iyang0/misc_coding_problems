# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal substring consisting of non-space characters only.

# Example 1:

# Input: s = "Hello World"
# Output: 5
# Explanation: The last word is "World" with length 5.
# Example 2:

# Input: s = "   fly me   to   the moon  "
# Output: 4
# Explanation: The last word is "moon" with length 4.
# Example 3:

# Input: s = "luffy is still joyboy"
# Output: 6
# Explanation: The last word is "joyboy" with length 6.
 

# Constraints:

# 1 <= s.length <= 104
# s consists of only English letters and spaces ' '.
# There will be at least one word in s.

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        word_len = 0
        prev_char = ""
        # for each character in string, iterate from end
        for ch in s[::-1]:
            # next iteration if prev char is space or empty char
            if ch == " " and (prev_char == "" or prev_char == " "):
                continue
            
            if ch != " ":
                # add to length if it's a non space character
                word_len += 1
                prev_char = ch
            else:
                # when hitting a space and last character is not a space give the length
                return word_len
        return word_len
    
    def lengthOfLastWord2(self, s: str) -> int:
        l=[]
        # use string split on whitespace
        l=s.split()
        #get last word
        n=l[len(l)-1]
        #return length of last word
        return len(n)