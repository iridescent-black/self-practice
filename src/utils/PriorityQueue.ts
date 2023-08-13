import { swap } from './swap'

export type CompareFunction<T> = (prevItem: T, nextItem: T) => number

export class PriorityQueue<T> {
  private compareFunction: CompareFunction<T>
  public heapArray: T[] = []

  public constructor(compareFunction: CompareFunction<T>) {
    this.compareFunction = compareFunction
  }

  public push(value: T) {
    this.heapArray.push(value)
    let index = this.heapArray.length - 1
    let parentIndex = Math.floor((index - 1) / 2)
    while (
      parentIndex >= 0 &&
      this.compareFunction(this.heapArray[index]!, this.heapArray[parentIndex]!) < 0
    ) {
      swap(this.heapArray, index, parentIndex)
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
  }

  public shift() {
    if (this.heapArray.length === 0) return

    this.heapArray[0] = this.heapArray.at(-1)!
    this.heapArray.pop()
    PriorityQueue.heapify(this.heapArray, 0, this.compareFunction)
  }

  public getRootItem() {
    return this.heapArray[0]
  }

  /** 自上向下堆化 */
  private static heapify<T>(arr: T[], rootIndex: number, compareFunction: CompareFunction<T>) {
    const length = arr.length
    let i = rootIndex
    while (true) {
      let priorityIndex = i
      const nextLeftIndex = i * 2 + 1
      const nextRightIndex = i * 2 + 2
      if (nextLeftIndex < length && compareFunction(arr[nextLeftIndex]!, arr[priorityIndex]!) <= 0)
        priorityIndex = nextLeftIndex
      if (
        nextRightIndex < length &&
        compareFunction(arr[nextRightIndex]!, arr[priorityIndex]!) <= 0
      )
        priorityIndex = nextRightIndex
      if (priorityIndex === i) break
      swap(arr, i, priorityIndex)
      i = priorityIndex
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
