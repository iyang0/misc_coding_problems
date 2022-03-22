class Solution:
    def romanToInt(self, s: str) -> int:
        """
        takes in a string representing a roman numeral
        returns the decimal representation of the number.
        """
        idx = 0
        output = 0
        roman_dict = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
            "IV": 4,
            "IX": 9,
            "XL": 40,
            "XC": 90,
            "CD": 400,
            "CM": 900,
        }
        
        while idx < len(s):
            if idx+1 < len(s) and s[idx : idx+2] in roman_dict:
                roman_num = s[idx : idx+2]
                output += roman_dict[roman_num]
                idx += 1
            else:
                roman_num = s[idx]
                output += roman_dict[roman_num]
            idx += 1
        
        return output