//class of the input binary tree.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

/**
 * given a binary tree, sum the depth of all of it's nodes' depths
*/
function nodeDepths(root) {
    let sum = sumSubtreeDepths(root, 0);
    
    return sum
  }
  
function sumSubtreeDepths(node, currentDepth){
    //base case
    if(node === null) return 0;
    
    // depth of current node + the depths of left and right nodes
    return currentDepth
        + sumSubtreeDepths(node.left, currentDepth+1)
        + sumSubtreeDepths(node.right, currentDepth+1);
}