class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
   }
}

function inorderTraversal(root: TreeNode | null): number[] {
  // Inorder(중위순회) 트리순회 : 왼쪽 - 루트 - 오른쪽
  // 왼쪽 서브트리 중위순회
  // 노드 방문
  // 오른쪽 서브트리 중위순회
  // 왼쪽 끝까지 내려간 이후 노드(root) 방문하고 오른쪽 노드로 이동해 순회 계속반복
  if(root === null) {
    return [];
  }

  // 대천재...
  // root 기준 왼쪽만 탐색, 루트 값만 탐색, 루트기준 오른쪽 값만 탐색 (top-down 식으로 재귀돌림)
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  
};