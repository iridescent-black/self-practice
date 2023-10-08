import { swap } from '../utils'

/** 堆排序
 * - 时间复杂度 O(nlogn)：建堆 O(n) + 排序 O(nlogn)
 * - 空间复杂度 O(1)
 */
export function heapSort(arr: number[]) {
  const length = arr.length
  if (length <= 1) return arr

  // 根据数组建立大顶堆
  buildHeap()
  // 根据大顶堆进行排序
  sort()

  return arr

  // 大顶堆 root item 是最大值，每次把 rootIndex 和未排序的区间最后一位交换位置，然后重新堆化
  function sort() {
    let lastIndex = length - 1
    while (lastIndex > 0) {
      swap(arr, 0, lastIndex)
      lastIndex -= 1
      heapify(0, lastIndex + 1)
    }
  }

  function buildHeap() {
    // 完全二叉树，(length - 1) / 2 后面的节点都是叶子节点，不需要堆化
    for (let i = Math.floor((length - 1) / 2); i >= 0; i--) {
      heapify(i, length)
    }
  }

  function heapify(rootIndex: number, length: number) {
    let currRootIndex = rootIndex
    while (true) {
      let maxIndex = currRootIndex
      const leftIndex = currRootIndex * 2 + 1
      const rightIndex = currRootIndex * 2 + 2
      if (leftIndex < length && arr[leftIndex] > arr[maxIndex]) maxIndex = leftIndex
      if (rightIndex < length && arr[rightIndex] > arr[maxIndex]) maxIndex = rightIndex
      if (maxIndex === currRootIndex) break
      swap(arr, currRootIndex, maxIndex)
      currRootIndex = maxIndex
    }
  }
}
