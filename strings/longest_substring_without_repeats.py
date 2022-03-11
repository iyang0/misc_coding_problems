def lengthOfLongestSubstring(s: str) -> int:
    """Given a string s, 
    find the length of the longest substring without repeating characters.
    constraint: s consists of English letters, digits, symbols and spaces.

    >>> lengthOfLongestSubstring("abcabcbb")
    3
    >>> lengthOfLongestSubstring("bbbbb")
    1
    """
    windowChars = set()
    left = 0
    longest = 0
    
    #use sliding window that removes previous occurence 
    #and slides when there is a repeated character
    for right in range(len(s)):
        #if right pointer is in the set of chars, remove it and update left pointer
        while s[right] in windowChars:
            windowChars.remove(s[left])
            left+=1

        #add right most character to set
        windowChars.add(s[right])
        #if if window is longer than previous longest, update
        longest = max(longest, (right - left + 1))
        
    return longest