/** 剪绳子
 * @see https://leetcode.cn/problems/jian-sheng-zi-lcof/
 */
// 动态规划
export function cuttingRope(n: number): number {
  if (n <= 2) return 1
  if (n === 3) return 2

  // 4 以后的计算值都比值本身要大或相等，所以缓存 4 之前的计算结果
  const values = [0, 1, 2, 3]

  for (let i = 4; i <= n; i++) {
    // i 代表绳子长为 i 时的最大结果
    // 有 maxJ 种组合方式：(1, i - 1) (2, i - 2) ... (i / 2, i / 2)
    const maxJ = Math.ceil(i / 2)
    values[i] = -Infinity
    for (let j = 1; j <= maxJ; j++) {
      values[i] = Math.max(values[i], values[j] * values[i - j])
    }
  }

  const res = values[n]
  values.length = 0

  return res
}

// 贪婪
export function cuttingRope2(n: number): number {
  if (n <= 3) return n - 1

  const remainder = n % 3
  const quotient = Math.trunc(n / 3)
  if (remainder === 0) return Math.pow(3, quotient)
  if (remainder === 1) return Math.pow(3, quotient - 1) * 4
  return Math.pow(3, quotient) * 2
}

console.log(cuttingRope2(5))
