export class BinaryTreeNode<T> {
  public data: T
  public left: BinaryTreeNode<T> | null
  public right: BinaryTreeNode<T> | null

  public constructor(data: T, options?: { left?: BinaryTreeNode<T>; right?: BinaryTreeNode<T> }) {
    this.data = data
    this.left = options?.left ?? null
    this.right = options?.right ?? null
  }
}

/** 二叉树 */
export class BinaryTree<T> {
  public rootNode: BinaryTreeNode<T> | null

  public constructor(root?: BinaryTreeNode<T>) {
    this.rootNode = root ?? null
  }

  /** 前序遍历 */
  public static preOrderTraversal<T>(
    node: BinaryTreeNode<T>,
    action: (node: BinaryTreeNode<T>) => unknown,
  ) {
    action(node)
    node.left && BinaryTree.preOrderTraversal(node.left, action)
    node.right && BinaryTree.preOrderTraversal(node.right, action)
  }

  /** 中序遍历 */
  public static inOrderTraversal<T>(
    node: BinaryTreeNode<T>,
    action: (node: BinaryTreeNode<T>) => unknown,
  ) {
    node.left && BinaryTree.inOrderTraversal(node.left, action)
    action(node)
    node.right && BinaryTree.inOrderTraversal(node.right, action)
  }

  /** 后序遍历 */
  public static postOrderTraversal<T>(
    node: BinaryTreeNode<T>,
    action: (node: BinaryTreeNode<T>) => unknown,
  ) {
    node.left && BinaryTree.preOrderTraversal(node.left, action)
    node.right && BinaryTree.preOrderTraversal(node.right, action)
    action(node)
  }

  /** 按层遍历 */
  public static bfsTraversal<T>(
    node: BinaryTreeNode<T>,
    action: (node: BinaryTreeNode<T>) => unknown,
  ) {
    const queue = [node]

    while (queue.length) {
      const currentNode = queue.shift()!

      action(currentNode)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
  }
}
