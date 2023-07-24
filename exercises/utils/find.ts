export interface BinaryFindIndexOption {
  /** 开始的索引 */
  left?: number
  /** 结束的索引 */
  right?: number
  /** 发现符合条件的值时，希望向右侧查找还是向左侧查找，默认是向右 */
  orderReverted?: boolean
}

/** 传入一个有序数珠，通过二分查找符合条件的索引。
 * 默认情况下，会返回最大的符合条件的索引。
 * 当 `option.orderReverted` 为 `true` 时，返回最小的符合条件的索引。
 * @param arr 有序数组。
 * @param predicate 断言函数，判断传入的值是否符合条件。
 */
export function binaryFindIndex<T>(arr: T[], predicate: (value: T) => boolean, option?: BinaryFindIndexOption): number {
  interface InnerOption extends BinaryFindIndexOption {
    prevMatchIndex: number
  }

  function _binaryFindIndex(option: InnerOption): number {
    const left = option.left ?? 0
    const right = option.right ?? arr.length - 1
    const prevMatchIndex = option.prevMatchIndex ?? -1
    if (left > right) return prevMatchIndex
    const middle = Math.ceil((left + right) / 2)
    const middleValue = arr[middle]
    const compareRes = predicate(middleValue!)
    return compareRes && !option.orderReverted
      ? _binaryFindIndex({ left: middle + 1, right, prevMatchIndex: middle })
      : _binaryFindIndex({ left, right: middle - 1, prevMatchIndex })
  }

  return _binaryFindIndex({ ...option, prevMatchIndex: -1 })
}

// const arr = [0, 2, 2, 2, 4]
// console.log(binaryFindIndex(arr, (value) => value <= 2, { orderReverted: true }))
