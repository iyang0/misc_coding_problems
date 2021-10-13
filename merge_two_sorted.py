# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    """Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists."""
    head = ListNode()
    tail = head
    while l1 or l2:
        if (l1 != None) and (l2 != None):
            if l1.val < l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
        else:
            if (l1 == None):
                tail.next = l2
                l2 = l2.next
            else:
                tail.next = l1
                l1 = l1.next
        tail = tail.next


    return head.next

