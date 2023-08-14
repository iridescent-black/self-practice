import { swap } from '../utils'

export function heapSort(arr: number[]) {
  const length = arr.length
  if (length <= 1) return arr

  // 根据数组建立大顶堆
  buildHeap()
  // 根据大顶堆进行排序
  sort()

  return arr

  // 大顶堆 root item 是最大值，每次把 rootIndex 和未排序的区间最后一位交换位置
  // 重新堆化
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
