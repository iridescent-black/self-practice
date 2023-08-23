/** 后序遍历
 * @see https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 */
export function verifyPostorder(postorder: number[]): boolean {
  return recur(postorder, 0, postorder.length - 1)
}

/** 判断 [i, j] 范围内的树是否满足二叉搜索树 */
function recur(postorder: number[], i: number, j: number): boolean {
  if (i >= j) return true
  let tempIndex = i
  while (postorder[tempIndex] < postorder[j]) tempIndex++
  const firstRight = tempIndex
  while (postorder[tempIndex] > postorder[j]) tempIndex++
  // 如果 tempIndex !== j, 说明右子树有小于等于根节点的值，不满足
  return (
    tempIndex === j && recur(postorder, i, firstRight - 1) && recur(postorder, firstRight, j - 1)
  )
}
