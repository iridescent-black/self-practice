import { swap } from '../utils'

function bubbleSort(arr: number[]) {
  const arrLength = arr.length
  if (arrLength <= 1) return arr
  // i 代表第几轮排序，冒泡排序固定要进行 N 轮排序。
  for (let i = 0; i < arrLength; i++) {
    // j 代表当前排序轮次中左指针的索引，第 i 轮中，j 的范围是 [0, length - 1 - i]。
    // 因为有右指针 j + 1 存在，所以 - 1。
    // 因为第 i + 1 轮（1 到 n）排序中，后 i 相是已经排好序的了。所以要 - i。
    for (let j = 0; j < arrLength - 1 - i; j++) {
      const leftValue = arr[j]
      const rightValue = arr[j + 1]
      if (typeof leftValue !== 'number') throw new Error(`arr Item[${j}] is not number`)
      if (typeof rightValue !== 'number') throw new Error(`arr Item[${j}] is not number`)
      if (leftValue > rightValue) swap(arr, j, j + 1)
    }
  }

  return arr
}

const arr1 = [5, 4, 3, 2, 1]
const arr2 = [5, 2, 3, 4, 1]
const arr3: number[] = []

console.log(bubbleSort(arr1))
console.log(bubbleSort(arr2))
console.log(bubbleSort(arr3))
