/** 合并两个排序的数组，返回排序后的数组 */
export function concat2SortedArray<T>(
  arr1: T[],
  arr2: T[],
  compareFn: (a: T, b: T) => number,
): T[] {
  // 提前开辟好空间，避免递归时频繁开辟空间
  const result = new Array(arr1.length + arr2.length)

  const length1 = arr1.length
  const length2 = arr2.length
  let p1 = 0
  let p2 = 0
  while (p1 < length1 || p2 < length2) {
    const index = p1 + p2
    if (arr1[p1] === void 0) {
      result[index] = arr2[p2]
      p2 += 1
      continue
    }
    if (arr2[p2] === void 0) {
      result[index] = arr1[p1]
      p1 += 1
      continue
    }
    if (compareFn(arr1[p1], arr2[p1]) <= 0) {
      result[index] = arr1[p1]
      p1 += 1
      continue
    }
    result[index] = arr2[p2]
    p2 += 1
  }

  return result
}
