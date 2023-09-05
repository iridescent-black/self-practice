/** 剑指 Offer 10- I. 斐波那契数列
 * @see https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/
 */
export function fib(n: number): number {
  if (n < 2) return n
  let a = 0
  let b = 1
  const mod = Math.pow(10, 9) + 7
  for (let i = 2; i <= n; i++) {
    const sum = (a + b) % mod
    a = b
    b = sum
  }
  return b
}
