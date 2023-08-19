class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/** 对称的二叉树 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true

  return recur(root.left, root.right)
}

function recur(A: TreeNode | null, B: TreeNode | null): boolean {
  if (A === null && B === null) return true
  if (A === null || B === null) return false
  if (A.val !== B.val) return false
  return recur(A.left, B.right) && recur(A.right, B.left)
}
