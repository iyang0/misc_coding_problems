/**
 * You are given two non-empty linked lists 
 * representing two non-negative integers. 
 * The digits are stored in reverse order, 
 * and each of their nodes contains a single digit.
 * 
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 * 
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1,l2){
  let carry = 0;
  let head = new ListNode();
  let node = head;

  //traverse through each linked list
  while(l1 || l2){
    
    let val1 = l1?.val ?? 0;
    let val2 = l2?.val ?? 0;

    let sum = val1 + val2 + carry;
    carry = 0;

    if(sum > 9) carry = 1;

    node.next = new ListNode(sum % 10);
    node = node.next;

    //move to next node in both linked list if current node is not null
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  //if add through all of the linked lists, there is still a carry over
  //make 1 to end
  if(carry) node.next = new ListNode(1);

  return head.next
}