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
  // 有任意一棵树是空树，则返回 false
  if (A === null || B === null) return false
  // A、B 根节点相同，且 B 是 A 的子结构
  // 或者 B 是 A 的左子树的子结构
  // 或者 B 是 A 的右子树的子结构，返回 true
  return compare(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

/** 判断 B 是否为 A 的根节点相同的子结构 */
function compare(A: TreeNode | null, B: TreeNode | null): boolean {
  // 如果 B 为空树，返回 true
  if (B === null) return true
  // 如果 A 为空树，返回 false
  if (A === null) return false
  // 如果 A、B 树根节点值不相等，返回 false
  if (A.val !== B.val) return false
  // B 的左子树是 A 的左子树的子树，B 的右子树是 A 的右子树的子树，返回 true
  return compare(A.left, B.left) && compare(A.right, B.right)
}
