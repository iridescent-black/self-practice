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

/** 从上到下打印二叉树 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const res: number[][] = []
  const queue = [root]
  let index = 0
  while (queue.length) {
    const temp: number[] = []
    const isOdd = (index + 1) % 2 === 1
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift()!
      // 奇数行从左到右
      if (isOdd) {
        temp.push(node.val)
      } else {
        // 偶数行从右到左
        temp.unshift(node.val)
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    index++
    res.push(temp)
  }
  return res
}
