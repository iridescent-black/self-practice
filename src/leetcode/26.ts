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

/** 树的子结构
 * @see https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/
 */
export function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (A === null || B === null) return false
  return compare(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function compare(A: TreeNode | null, B: TreeNode | null): boolean {
  if (B === null) return true
  if (A === null || A.val !== B.val) return false
  return compare(A.left, B.left) && compare(A.right, B.right)
}
