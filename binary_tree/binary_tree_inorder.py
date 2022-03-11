# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    output = []
    traverse(root, output)
    return output
        
def traverse(root: Optional[TreeNode], output: List[int]) -> void:
    if root:
        traverse(root.left, output)
        output.append(root.val)
        traverse(root.right, output)