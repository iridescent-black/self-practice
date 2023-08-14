import { concat2SortedArray } from '../utils/concat2SortedArray'

/** 归并排序 */
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
