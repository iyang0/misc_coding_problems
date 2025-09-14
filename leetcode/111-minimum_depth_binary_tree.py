# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        # a tree, want to find the minimum depth
        # should use a breadth first search, BFS uses a queue
        # create a simple queue that holds the tree node and the current depth
        queue = [(root, 1)]
        deepest_depth = 1

        if not root:
            return 0

        # while queue is not empty, loop over it
        while len(queue)>0:
            # remove the first element from queue and unzip it
            node, depth = queue.pop(0)
            deepest_depth = max(depth, deepest_depth)

            if node.left is None and node.right is None:
                return deepest_depth

            if node.left is not None:
                queue.append((node.left, depth+1))
            if node.right is not None:
                queue.append((node.right, depth+1)) 
        
        return deepest_depth

