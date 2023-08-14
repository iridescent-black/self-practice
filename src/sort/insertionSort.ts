import { binaryFindIndex } from '../utils'

/** 插入排序
 * - 事件复杂度：O(n²)
 * - 空间复杂度：In-Place
 */
export function insertionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    const baseValue = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      const currentValue = arr[j]
      if (currentValue <= baseValue) {
        arr[j + 1] = baseValue
        break
      }
      arr[j + 1] = currentValue
      if (j === 0) arr[j] = baseValue
    }
  }
  return arr
}

/** 使用二分查找优化插入排序 */
export function binaryInsertionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    const baseValue = arr[i]
    const left = 0
    const right = i - 1
    // 在 [left, right] 的范围内，找到最后一个 <= base 的值
    const insertIndex = binaryFindIndex(arr, (value) => value <= baseValue, {
      left,
      right,
      foundBehavior: 'searchRight',
      fallbackDirection: 'left',
    })
    for (let j = right; j > insertIndex; j--) {
      arr[j + 1] = arr[j]!
    }
    arr[insertIndex + 1] = baseValue
  }
  return arr
}
