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

/** 二叉树的镜像
 * @see https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/
 */
export function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  const temp = root.left
  root.left = mirrorTree(root.right)
  root.right = mirrorTree(temp)

  return root
}

export function mirrorTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  const stack: TreeNode[] = [root]

  while (stack.length) {
    const node = stack.pop()!
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
    const temp = node.left
    node.left = node.right
    node.right = temp
  }

  return root
}
