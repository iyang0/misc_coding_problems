/**
 * function to return the closest value in a BST to a target value
*/
function closestValueInBst(tree, target) {
      let closestValue = tree.value;
      
      //if the current node value is the target, return the current value
      if(tree.value === target) return tree.value;
      
      if(tree.left && (target < tree.value)){
          //if there is a left node
          //and the the target is smaller than the current node val
          //recursively check closest values in subtree
          let leftValue = closestValueInBst(tree.left, target);
          //if absolute value of difference of current closest value and target
          //is smaller than the closest value of left subtree return the current value
          //otherwise return the closest value in left subtree
          return (Math.abs(closestValue-target) <= Math.abs(leftValue-target))
              ? closestValue
              : leftValue;
      }
      
      if(tree.right && (target > tree.value)){
          //if there is a right node
          //and the the target is larger than the current node val
          //recursively check closest values in subtree
          let rightValue = closestValueInBst(tree.right, target);
          //if absolute value of difference of current closest value and target
          //is smaller than the closest value of right subtree return the current value
          //otherwise return the closest value in right subtree
          return (Math.abs(closestValue-target) <= Math.abs(rightValue-target))
              ? closestValue
              : rightValue;
      }
      
      //if no valid left and right subtrees, return current value
      return closestValue;
  }