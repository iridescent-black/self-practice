/** @see https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/ */
export function movingCount(m: number, n: number, k: number): number {
  const digitsMap = new Map<number, number>()
  const movedCoordinate = new Map<string, number>()
  const maxIndex = Math.max(m - 1, n - 1, 0)
  // 把所有可能使用到的数位和存储在 map 中
  for (let i = 0; i <= maxIndex; i++) {
    digitsMap.set(i, sumDigits(i))
  }

  return moving(0, 0, k)

  /** 求数位之和 */
  function sumDigits(n: number): number {
    let value = n
    let sum = 0
    while (value !== 0) {
      sum += value % 10
      value = Math.floor(value / 10)
    }
    return sum
  }

  function moving(i: number, j: number, k: number): number {
    // 判断是否越位
    if (i >= m) return 0
    if (j >= n) return 0
    if (movedCoordinate.get(`${i}-${j}`)) return 0
    movedCoordinate.set(`${i}-${j}`, 1)
    const digitSum = digitsMap.get(i)! + digitsMap.get(j)!
    if (digitSum > k) return 0
    return 1 + moving(i + 1, j, k) + moving(i, j + 1, k)
  }
}

const m = 2,
  n = 3,
  k = 1
console.log(movingCount(m, n, k))
