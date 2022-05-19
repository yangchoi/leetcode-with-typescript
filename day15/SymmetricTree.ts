/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function isSymmetric(root: TreeNode | null): boolean {
  

  return loopNode(root.left, root.right);
  
};

function loopNode(left: TreeNode, right: TreeNode): boolean {
  if(left === null && right === null) {
    return true;
    
  }else if(left === null || right === null) {
    return false;
  }

  if(left.val === right.val) {
    return loopNode(left.right, right.left) && loopNode(left.left, right.right);
  }else {
    return false;
  }
  
}