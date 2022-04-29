# interesting password limitation I came across once

QUERTY = [
    [char for char in "1234567890-= "],
    [char for char in "qwertyuiop[]\\"],
    [char for char in "asdfghjkl;'  "],
    [char for char in "zxcvbnm,./   "]
]

QUERTY_UPPER = [
    [char for char in "!@#$%^&*()_+ "],
    [char for char in "QWERTYUIOP{}|"],
    [char for char in 'ASDFGHJKL:"  '],
    [char for char in "ZXCVBNM<>?   "]
]

def is_keyboard_adjacent(str: str) -> bool:
    """
    Given a string, return true if all characters are adjacent to the position
    of the previous character on a qwerty keyboard.

    >>> is_keyboard_adjacent("5tgbnmju7")
    True
    >>> is_keyboard_adjacent("gg")
    True
    >>> is_keyboard_adjacent("blue")
    False
    """
    prev_coords = None
    for char in str:
        char_coords = get_char_coords(char)
        if prev_coords != None:
            if not is_neighbor_adjacent(prev_coords, char_coords):
                return False
        prev_coords = char_coords
    
    return True

def is_neighbor_adjacent(coordinate1: tuple, coordinate2: tuple) -> bool:
    return coordinate1[0] == coordinate2[0] or coordinate1[1] == coordinate2[1]

def get_char_coords(char: str) -> tuple:
    coordinates_lower = [ (row, col.index(char)) \
        for row, col in enumerate(QUERTY) \
        if char in col ]
    
    coordinates_upper = [ (row, col.index(char)) \
        for row, col in enumerate(QUERTY_UPPER) \
        if char in col ]
    return coordinates_lower[0] if coordinates_lower else coordinates_upper[0]