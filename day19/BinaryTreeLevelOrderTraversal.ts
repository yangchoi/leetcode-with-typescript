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

function levelOrder(root: TreeNode | null): number[][] {
  // level order Traversal 
  // root 부터 한 레벨씩 아래로 이동함
  // queue를 이용해 구현가능

  const output: number[][] = [];
  if(root === null) {
    return output;
  }

  let queue = [root];
  while(queue.length) {
    const queLengh = queue.length;


    for(let i = 0; i < queLengh; i++) {
      const node = queue[i];

      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }

      queue = queue[i+1];
    }
    return levels;
  }



};