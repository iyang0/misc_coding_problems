class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

/**
 * Given a singly linked list whose nodes are in sorted order
 * return the same linked list modified in place without duplicates and still in order
 *  
 * @param {LinkedList} linkedList
 * 
 * @returns {LinkedList}
*/
function removeDuplicatesFromLinkedList(linkedList) {
    
    let currentNode = linkedList;
    
    while(currentNode !== null){
        let tempNode = currentNode;
        
        while(tempNode?.value === currentNode?.value){
            tempNode = tempNode.next;
        }
        
        currentNode.next = tempNode;
        currentNode = currentNode.next;
    }
    
    return linkedList;
}