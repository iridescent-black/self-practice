import { createMockNumberArray, swap } from '../utils'

/** 冒泡排序
 * - 时间复杂度：O(n²)
 * - 空间复杂度：In-Place
 */
export function bubbleSort(arr: number[]) {
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

export function bubbleSort2(arr: number[]) {
  const arrLength = arr.length
  if (arrLength <= 1) return

  let i = arrLength - 1

  while (i > 0) {
    let pos = 0

    // 每一轮冒泡都记录一下，最后一次发生交换的左指针索引值 pos。
    // 如果没有发生过交换，pos 就是 0，不用再冒泡了，直接返回。
    // 如果发送过交换，下一次冒泡时，右指针的最大值即为 pos。
    for (let j = 0; j < i; j++) {
      const leftValue = arr[j]
      const rightValue = arr[j + 1]

      if (typeof leftValue !== 'number') throw new Error(`arr Item[${j}] is not number`)
      if (typeof rightValue !== 'number') throw new Error(`arr Item[${j}] is not number`)

      if (leftValue > rightValue) {
        pos = j
        swap(arr, j, j + 1)
      }
    }

    i = pos
  }

  return arr
}

// const arr2 = [5, 2, 3, 4, 1]
// const arr3: number[] = []

// console.log(bubbleSort2(arr1))
// console.log(bubbleSort2(arr2))
// console.log(bubbleSort2(arr3))

const sortedCount = 10000
const arrayLength = 100
const mockData = createMockNumberArray(arrayLength)

console.time('clone')
for (let i = 0; i < sortedCount; i++) {
  mockData.slice()
}
console.timeEnd('clone')

console.time('bubbleSort1')
for (let i = 0; i < sortedCount; i++) {
  bubbleSort(mockData.slice())
}
console.timeEnd('bubbleSort1')

console.time('bubbleSort2')
for (let i = 0; i < sortedCount; i++) {
  bubbleSort2(mockData.slice())
}
console.timeEnd('bubbleSort2')
