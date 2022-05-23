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
// 해당 분기의 모든 노드를 방문 dfs(Depth First Serach 깊이 우선 탐색)
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if(root === null) {
    return false;
  }

  if(root.left === null && root.right === null && targetSum - root.val === 0) {
    return true;
  }else {
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
  }

}