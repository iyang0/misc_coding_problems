class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {BinaryTree} tree - BST
 * @returns {BinaryTree}
 * Inverts a binary tree in place
*/
function invertBinaryTree(tree) {
  const swap = (node) =>{
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
  
  //pre-order recursive traversal
  swap(tree);
  if(tree.left) invertBinaryTree(tree.left);
  if(tree.right) invertBinaryTree(tree.right);

  return tree;
}