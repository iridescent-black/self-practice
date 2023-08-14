/** x 的 算术平方根
 * @see https://leetcode.cn/problems/sqrtx/description/
 */
export function mySqrt(x: number): number {
  let res = 0
  let left = 0
  let right = x

  while (left <= right) {
    const mid = left + Math.ceil((right - left) / 2)
    if (mid * mid <= x) {
      res = mid
      left = mid + 1
      continue
    }
    right = mid - 1
  }

  return res
}

console.log(mySqrt(8))
