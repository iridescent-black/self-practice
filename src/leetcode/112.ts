import { TreeNode } from './common'

/** 路径总和
 * @see https://leetcode.cn/problems/path-sum/
 */
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false
  if (root.val === targetSum && root.left === null && root.right === null) return true
  const nextTargetSum = targetSum - root.val
  return hasPathSum(root.left, nextTargetSum) || hasPathSum(root.right, nextTargetSum)
}
