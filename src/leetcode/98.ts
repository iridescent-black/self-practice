import { TreeNode } from './common'

/** 验证二叉搜索树
 * @description 使用中序遍历，遍历二叉树，如果当前值比上一个值小，说明不符合条件
 */
export function isValidBST(root: TreeNode | null): boolean {
  let preValue = -Infinity
  function _isValidBST(root: TreeNode | null) {
    if (root === null) return true
    if (!_isValidBST(root.left)) return false
    if (root.val <= preValue) return false
    preValue = root.val
    if (!_isValidBST(root.right)) return false
    return true
  }
  return _isValidBST(root)
}
