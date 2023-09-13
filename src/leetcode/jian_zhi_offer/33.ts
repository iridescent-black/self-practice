/** 后序遍历
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * @see https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 */
export function verifyPostorder(postorder: number[]): boolean {
  return recur(postorder, 0, postorder.length - 1)
}

/** 判断 [firstIndex, rootIndex] 范围内的树是否满足二叉搜索树
 * @description 二叉搜索树定义：
 * - 左子树 < 根节点 < 右子树
 * - 左右子树都是二叉搜索树
 * @description 后序遍历的结果是：[左子树 | 右子树 | 根节点]
 * @param postorder 后序遍历结果
 * @param firstIndex 左子树的第一个节点
 * @param rootIndex 根节点
 */
function recur(postorder: number[], firstIndex: number, rootIndex: number): boolean {
  // 判断是否越界
  if (firstIndex >= rootIndex) return true
  // 找到第一个大于根节点的值，即为右子树的根节点
  let tempIndex = firstIndex
  while (postorder[tempIndex] < postorder[rootIndex]) tempIndex++
  const firstRight = tempIndex
  // 判断右子树是否都大于根节点
  while (postorder[tempIndex] > postorder[rootIndex]) tempIndex++
  // 如果 tempIndex !== rootIndex, 说明右子树有小于等于根节点的值，不满足
  if (tempIndex !== rootIndex) return false
  return recur(postorder, firstIndex, firstRight - 1) && recur(postorder, firstRight, rootIndex - 1)
}
