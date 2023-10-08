import { concat2SortedArray } from '../utils/concat2SortedArray'

/** 归并排序
 * - 时间复杂度：O(nlogn)：每次都把数组分成两半，需要 log n 次，每次都需要把两个数组合并成一个数组，需要 n 次
 * - 空间复杂度：O(n)：把两个数组合并成一个数组，需要额外的空间
 * - 稳定排序
 * @description
 * 为什么一般使用快速排序，而不使用归并排序？
 * - 归并排序需要额外的空间，快速排序不需要
 */
export function mergeSort(arr: number[]): number[] {
  const arrLength = arr.length
  if (arrLength < 2) return arr

  const middle = Math.floor(arrLength / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  return concat2SortedArray(mergeSort(leftArr), mergeSort(rightArr), (a, b) => a - b)
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(mergeSort(arr))
