import { swap } from './swap'

export class Heap {
  private heapArray: number[]

  public constructor() {
    this.heapArray = new Array(1)
  }

  public get count() {
    return this.heapArray.length - 1
  }

  public insert(value: number) {
    const length = this.heapArray.length
    this.heapArray[length] = value

    let index = length
    let parentIndex = Math.floor(index / 2)
    while (parentIndex > 0 && this.heapArray[index]! < this.heapArray[parentIndex]!) {
      swap(this.heapArray, index, parentIndex)
      index = parentIndex
      parentIndex = Math.floor(index / 2)
    }
  }

  public removeRoot() {
    if (this.count === 0) return

    this.heapArray[1] = this.heapArray[this.count]!
    this.heapArray.pop()
    Heap.heapify(this.heapArray, this.count, 1)
  }

  /** 自上向下堆化 */
  public static heapify(arr: number[], count: number, rootIndex: number) {
    let i = rootIndex
    while (true) {
      let maxIndex = i
      if (i * 2 <= count && arr[i * 2]! < arr[i]!) maxIndex = i * 2
      if (i * 2 + 1 <= count && arr[i * 2 + 1]! < arr[maxIndex]!) maxIndex = i * 2 + 1
      if (maxIndex === i) break
      swap(arr, i, maxIndex)
      i = maxIndex
    }
  }
}

export function heapSort(arr: number[]) {
  const length = arr.length
  if (length <= 1) return arr

  // 根据数组建立大顶堆
  buildHeap()
  // 根据大顶堆进行排序
  sort()

  return arr

  function sort() {
    let maxIndex = length - 1
    while (maxIndex > 0) {
      swap(arr, 0, maxIndex)
      maxIndex -= 1
      heapify(arr, maxIndex + 1, 0)
    }
  }

  function buildHeap() {
    for (let i = Math.floor((length - 1) / 2); i >= 0; i--) {
      heapify(arr, length, i)
    }
  }

  function heapify(arr: number[], length: number, rootIndex: number) {
    let i = rootIndex
    while (true) {
      let maxIndex = i
      const leftIndex = i * 2 + 1
      const rightIndex = i * 2 + 2
      if (leftIndex < length && arr[leftIndex]! > arr[maxIndex]!) maxIndex = leftIndex
      if (rightIndex < length && arr[rightIndex]! > arr[maxIndex]!) maxIndex = rightIndex
      if (maxIndex === i) break
      swap(arr, i, maxIndex)
      i = maxIndex
    }
  }
}
