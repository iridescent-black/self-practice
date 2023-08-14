import { swap } from '../utils'

/** 快速排序
 * - 时间复杂度：O(nlogn)
 * 主要取决于做了几次 partition 操作，如果每次都取到中间值，那就是 logN 次，如果每次都取到最大或最小值，会退化到 n² 次
 * - 空间复杂度：O(logN)
 */
export function quickSort(arr: number[]): number[] {
  const result = arr.slice()
  if (result.length <= 1) return result
  quickSortWithRange(0, result.length - 1)

  return result

  function quickSortWithRange(start: number, end: number) {
    if (start >= end) return
    const targetIndex = Math.floor(start + (end - start) / 2)
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
    // 记录一下上一个比 baseValue 小的索引。
    let lastSmallIndex = start - 1

    for (let i = start; i < end; i++) {
      // 如果当前索引值大于 baseValue，不动。
      if (result[i]! > baseValue) continue
      // 如果小于 baseValue，把它和 lastSmallIndex 的下一个值交换位置。
      lastSmallIndex += 1
      if (lastSmallIndex !== i) swap(result, lastSmallIndex, i)
    }

    // 把最后一个值（也就是 baseValue）和 lastSmallIndex 下一个值交换位置
    lastSmallIndex += 1
    swap(result, lastSmallIndex, end)

    return lastSmallIndex
  }
}
