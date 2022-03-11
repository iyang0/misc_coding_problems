def plusOne(digits):
    if len(digits) == 0:
        return [1]
    if digits[-1] == 9:
        digits = plusOne(digits[:-1]) + [0]
    else:
        digits[-1] = (digits[-1] + 1) % 10

    return digits
