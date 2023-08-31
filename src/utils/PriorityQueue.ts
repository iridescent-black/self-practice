import { swap } from './swap'

export type CompareFn<T> = (prevItem: T, nextItem: T) => number

export class PriorityQueue<T> {
  private compareFn: CompareFn<T>
  // 因为优先级队列是一个完全二叉树，所以使用数组存储堆元素
  private heapArray: T[] = []

  /**
   * 优先级队列，按照优先级从小到大排列
   * @param compareFn 优先级队列比较函数
   * - 如果返回值小于 0，则 prevItem 优先级低于 nextItem
   * - 如果返回值等于 0，则 prevItem 优先级等于 nextItem
   * - 如果返回值大于 0，则 prevItem 优先级高于 nextItem
   */
  public constructor(compareFn: CompareFn<T>) {
    this.compareFn = compareFn
  }

  /** 添加元素 */
  public push(value: T) {
    // 先把元素添加到树的末尾
    this.heapArray.push(value)
    // 保证堆顶元素优先级最小
    // 自下向上堆化，如果子节点优先级小于父节点，则交换父子节点
    let index = this.heapArray.length - 1
    let parentIndex = Math.floor((index - 1) / 2)
    while (
      parentIndex >= 0 &&
      this.compareFn(this.heapArray[index], this.heapArray[parentIndex]) < 0
    ) {
      swap(this.heapArray, index, parentIndex)
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
  }

  /** 删除堆顶元素 */
  public shift() {
    if (this.heapArray.length === 0) return

    // 把最后一个元素放到堆顶
    this.heapArray[0] = this.heapArray.at(-1)!
    // 删除最后一个元素
    this.heapArray.pop()
    // 自上向下堆化
    PriorityQueue.heapify(this.heapArray, 0, this.compareFn)
  }

  public getRootItem() {
    return this.heapArray[0]
  }

  /** 自上向下堆化
   * @param arr 堆数组
   * @param rootIndex 堆化的根节点索引
   * @param compareFn 比较函数
   */
  private static heapify<T>(arr: T[], rootIndex: number, compareFn: CompareFn<T>) {
    const length = arr.length
    let currentIndex = rootIndex
    while (true) {
      // 求优先级最小的节点索引
      // 先假设当前节点优先级最小
      let priorityIndex = currentIndex
      const nextLeftIndex = currentIndex * 2 + 1
      const nextRightIndex = currentIndex * 2 + 2
      // 如果左子节点优先级小于根节点，设置左子节点为优先级最小的节点
      if (nextLeftIndex < length && compareFn(arr[nextLeftIndex], arr[priorityIndex]) <= 0)
        priorityIndex = nextLeftIndex
      // 如果右子节点优先级小于根节点，设置右子节点为优先级最小的节点
      if (nextRightIndex < length && compareFn(arr[nextRightIndex], arr[priorityIndex]) <= 0)
        priorityIndex = nextRightIndex

      // 如果优先级最小的节点是当前节点，则堆化完成
      if (priorityIndex === currentIndex) break
      // 如果优先级最小的节点不是当前节点，则交换当前节点和优先级最小的节点
      swap(arr, currentIndex, priorityIndex)
      // 另当前节点为优先级最小的节点，继续堆化
      currentIndex = priorityIndex
    }
  }
}

// const data = [
//   [-10, -9, -9, -9, -7, -2, -1, 2, 4, -9, -7, -6, -6, -3, 0, 1, 3],
//   [-10, -9, -2, -1, 1, 3],
// ]
// const queue = new PriorityQueue<number>((a, b) => a - b)
// data.forEach((arr) => {
//   arr.forEach((item) => queue.push(item))
// })
// const res = []
// console.log(queue.heapArray)
// while (queue.getRootItem() !== undefined) {
//   res.push(queue.getRootItem())
//   queue.shift()
//   console.log(queue.heapArray)
// }
// console.log(res)
