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

/** 对称的二叉树
 * @see https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true

  return recur(root.left, root.right)
}

/** 判断 A、B 互为镜像 */
function recur(A: TreeNode | null, B: TreeNode | null): boolean {
  // 如果 A、B 都是空树，返回 true
  if (A === null && B === null) return true
  // 如果 A、B 有一棵是空树，返回 false
  if (A === null || B === null) return false
  // 如果 A、B 根节点值不相等，返回 false
  if (A.val !== B.val) return false
  // 判断 A、B 的左右子树是否互为镜像
  return recur(A.left, B.right) && recur(A.right, B.left)
}
