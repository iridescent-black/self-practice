import { TreeNode } from './common'

/** 翻转二叉树
 * @see https://leetcode.cn/problems/invert-binary-tree/
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)

  return root
}
