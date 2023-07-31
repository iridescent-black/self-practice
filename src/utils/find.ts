export type BinaryFindFallbackDirection = 'left' | 'right'
export type BinaryFindFoundBehavior = 'return' | 'searchLeft' | 'searchRight'
export interface BinaryFindIndexOption {
  /** 开始的索引 */
  left?: number
  /** 结束的索引 */
  right?: number
  /** 当前值不符合判定条件时，应该向左查找还是向右查找
   * - left: 向左查找
   * - right: 向右查找
   */
  fallbackDirection: BinaryFindFallbackDirection
  /** 发现符合条件的值时，希望执行的操作
   * - return: 停止查找并返回
   * - searchLeft: 继续向左查找下一个符合条件的索引
   * - searchRight: 继续向右查找下一个符合条件的索引
   */
  foundBehavior?: BinaryFindFoundBehavior
}

/** 传入一个有序数珠，通过二分查找符合条件的索引。
 * 默认情况下，会返回最大的符合条件的索引。
 * 当 `option.orderReverted` 为 `true` 时，返回最小的符合条件的索引。
 * @param arr 有序数组。
 * @param predicate 断言函数，判断传入的值是否符合条件。
 */
export function binaryFindIndex<T>(
  arr: T[],
  predicate: (value: T) => boolean,
  option?: BinaryFindIndexOption,
): number {
  const left = option?.left ?? 0
  const right = option?.right ?? arr.length - 1
  const fallbackDirection = option?.fallbackDirection || 'right'
  const foundBehavior = option?.foundBehavior || 'return'
  return _binaryFindIndex({ left, right, fallbackDirection, foundBehavior, prevMatchIndex: -1 })

  interface InnerOption extends Required<BinaryFindIndexOption> {
    prevMatchIndex: number
  }

  function _binaryFindIndex(option: InnerOption): number {
    const left = option.left
    const right = option.right
    const prevMatchIndex = option.prevMatchIndex
    const fallbackDirection = option.fallbackDirection
    const foundBehavior = option.foundBehavior
    // 左边界大于右边界，递归结束
    if (left > right) return prevMatchIndex
    const middle = Math.ceil(left + (right - left) / 2)
    const middleValue = arr[middle]
    // 根据传入的判断函数，判断 middleValue 是否符合条件
    const compareRes = predicate(middleValue!)
    if (!compareRes) {
      const nextOptions =
        fallbackDirection === 'left'
          ? { ...option, right: middle - 1 }
          : { ...option, left: middle + 1 }
      return _binaryFindIndex(nextOptions)
    }
    // 符合判断条件，且 foundBehavior 为立即返回，直接返回当前的查询结果。
    if (foundBehavior === 'return') return middle
    const nextOptions =
      foundBehavior === 'searchLeft'
        ? { ...option, prevMatchIndex: middle, right: middle - 1 }
        : { ...option, prevMatchIndex: middle, left: middle + 1 }
    return _binaryFindIndex(nextOptions)
  }
}
