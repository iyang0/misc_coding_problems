/**
 * given a binary tree defined below,
 * return an array of the sums of all it's branches
 * from left to right
 * 
 * e.g.
 * tree ->      1
 *             / \
 *            2   3
 *           / \ 
 *          4   5
 * 
 * output: [7, 8, 4]
 */
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//the function
function branchSums(root) {
    let output = [];
    
    branchHelper(root, 0, output);
    
    return output;
}

function branchHelper(root, currSum, output){
    if(!root) return;
    //inorder traversal, check if left and right is null

    if(root.left) branchHelper(root.left, currSum + root.value, output);
    
    //if it is, then add to array
    if(root.left === null && root.right === null){
        output.push(currSum + root.value);
        return;
    }
    
    if(root.right) branchHelper(root.right, currSum + root.value, output);
}