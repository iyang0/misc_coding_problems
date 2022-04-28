# interesting password limitation I came across once
from tokenize import String
from xmlrpc.client import Boolean


def is_keyboard_adjacent(str: String) -> Boolean:
    """
    Given a string, return true if all characters are adjacent to the position
    of the previous character on a qwerty keyboard.

    >>> is_keyboard_adjacent("5tgbnmju7")
    True
    >>> is_keyboard_adjacent("blue")
    False
    """
    querty = [
        [char for char in "1234567890-="],
        [char for char in "qwertyuiop[]"],
        [char for char in "asdfghjkl;'"],
        [char for char in "zxcvbnm,./"]
    ]
    querty_upper = [
        [char for char in "!@#$%^&*()_+"],
        [char for char in "QWERTYUIOP{}"],
        [char for char in 'ASDFGHJKL:"'],
        [char for char in "ZXCVBNM<>?"]
    ]
    current = str[0]
    
    for char in str:
        pass