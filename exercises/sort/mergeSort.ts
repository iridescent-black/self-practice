import { concat2SortedArray } from '../concat2SortedArray'

export function mergeSort(arr: number[]): number[] {
  const arrLength = arr.length
  if (arrLength < 2) return arr

  const middle = Math.floor(arrLength / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  return concat2SortedArray(mergeSort(leftArr), mergeSort(rightArr))
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(mergeSort(arr))
