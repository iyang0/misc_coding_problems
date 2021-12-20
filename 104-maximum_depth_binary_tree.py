# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def maxDepth(root) -> int:
    #if there is no node there, do not count toward depth
    if root is None:
        return 0
    else:
        #get the depth of subtrees
        left = self.maxDepth(root.left) + 1
        right = self.maxDepth(root.right) + 1

        #return the largest depth
        return left if left > right else right