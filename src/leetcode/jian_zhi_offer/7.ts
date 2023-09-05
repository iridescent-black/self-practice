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

/**
 * 剑指 Offer 07. 重建二叉树
 * @see https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/
 */
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  /**
   * 构建子树
   * @param root 根节点在前序遍历的索引 root
   * @param left 子树在中序遍历的左边界 left
   * @param right 子树在中序遍历的右边界 right
   * @returns rootNode
   */
  function recur(root: number, left: number, right: number): TreeNode | null {
    if (left > right) return null
    const rootValue = preorder[root]
    const rootNode = new TreeNode(rootValue)
    // 根据根节点的值，找到它在中序遍历中的索引
    const inOrderRootIndex = inorder.indexOf(rootValue, left)
    // 前序遍历 [根节点 | 左子树 | 右子树]
    // 前序遍历 [root | [root + 1, ...] | [root + leftTreeLength + 1, ...]]
    // 中序遍历 [左子树 | 根节点 | 右子树]
    // 中序遍历 [[left, inOrderRootIndex - 1] | inOrderRootIndex | [inOrderRootIndex + 1, right]]
    rootNode.left = recur(root + 1, left, inOrderRootIndex - 1)
    const leftTreeLength = inOrderRootIndex - left
    const rightTreeRootIndex = root + leftTreeLength + 1
    rootNode.right = recur(rightTreeRootIndex, inOrderRootIndex + 1, right)
    return rootNode
  }

  return recur(0, 0, preorder.length - 1)
}
