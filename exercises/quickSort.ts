import { swap } from './utils'

/** 快速排序 */
function quickSort(arr: number[]): number[] {
  const result = arr.slice()
  if (result.length <= 1) return result

  quickSortWithRange(0, result.length - 1)

  function quickSortWithRange(start: number, end: number) {
    if (start >= end) return
    const targetIndex = Math.floor((start + end) / 2)
    const resultIndex = partition(start, end, targetIndex)
    if (resultIndex > start) quickSortWithRange(start, resultIndex - 1)
    if (resultIndex < end) quickSortWithRange(resultIndex + 1, end)
  }

  /** 在 [start, end] 区间内，选择一个索引，改索引对应的值为基准值。
   * 更改数组，使得基准值左边的值都小于基准值，右边的值都大于基准值。
   * @param start 起始位置
   * @param end 结束位置
   * @param targetIndex 目标位置
   * @return 返回基准值的新索引。
   */
  function partition(start: number, end: number, targetIndex: number): number {
    if (start === end) return start
    if (start > end) throw new Error('start > end')
    if (targetIndex > end) throw new Error('targetIndex > end')
    if (targetIndex < start) throw new Error('targetIndex < start')

    const baseValue = result[targetIndex]
    if (baseValue === undefined) throw new Error('baseValue is undefined')
    // 将基准值放到最后
    swap(result, targetIndex, end)
    let lastSmallIndex = start - 1

    for (let i = start; i < end; i++) {
      if (result[i] === undefined) throw new Error(`result[${i}] is undefined`)
      if (result[i]! > baseValue) continue
      lastSmallIndex += 1
      if (lastSmallIndex !== i) swap(result, lastSmallIndex, i)
    }

    lastSmallIndex += 1
    swap(result, lastSmallIndex, end)

    return lastSmallIndex
  }

  return result
}

const arr1 = [1, 3, 5, 7, 9]
const arr2 = [2, 6, 8, 4, 0]
const arr3 = [5, 4, 3, 2, 1]
const arr4 = [5, 5, 3, 2, 1]
const arr5: number[] = []

console.log(quickSort(arr1))
console.log(quickSort(arr2))
console.log(quickSort(arr3))
console.log(quickSort(arr4))
console.log(quickSort(arr5))
