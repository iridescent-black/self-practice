/** 合并两个排序的数组，返回排序后的数组 */
export function concat2SortedArray(arr1: number[], arr2: number[]): number[] {
  // 提前开辟好空间，避免递归时频繁开辟空间
  const result = new Array(arr1.length + arr2.length)

  /**
   * @param p1 arr1的指针
   * @param p2 arr2的指针
   */
  function getSortedArray(p1: number, p2: number) {
    const value1 = arr1[p1]
    const value2 = arr2[p2]
    if (value1 === undefined && value2 === undefined) return result
    if (value1 === undefined) {
      result[p1 + p2] = value2
      return getSortedArray(p1, p2 + 1)
    }
    if (value2 === undefined) {
      result[p1 + p2] = value1
      return getSortedArray(p1 + 1, p2)
    }
    if (value1 < value2) {
      result[p1 + p2] = value1
      return getSortedArray(p1 + 1, p2)
    }
    result[p1 + p2] = value2
    return getSortedArray(p1, p2 + 1)
  }

  return getSortedArray(0, 0)
}

// const arr1 = [1, 3, 5, 7, 9]
// const arr2 = [2, 4, 6, 8, 10]
// const arr3: number[] = []

// console.log(concat2SortedArray(arr1, arr2))
// console.log(concat2SortedArray(arr3, arr3))
