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
export function levelOrder(root: TreeNode | null): number[] {
  if (root === null) return []
  const res: number[] = []
  const queue = [root]

  while (queue.length) {
    const node = queue.shift()!
    res.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return res
}
