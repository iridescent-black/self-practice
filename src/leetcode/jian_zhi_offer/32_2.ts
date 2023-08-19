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
  if (root === null) return []
  const res: number[][] = []
  const queue: { node: TreeNode; index: number }[] = [{ node: root, index: 0 }]

  while (queue.length) {
    const { node, index } = queue.shift()!
    if (res[index] === undefined) res[index] = []
    res[index].push(node.val)
    if (node.left) queue.push({ node: node.left, index: index + 1 })
    if (node.right) queue.push({ node: node.right, index: index + 1 })
  }

  return res
}
