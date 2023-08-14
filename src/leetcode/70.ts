/** 爬楼梯
 * @see https://leetcode.cn/problems/climbing-stairs/
 */
export function climbStairs(n: number): number {
  const cache = new Map<number, number>()
  cache.set(1, 1)
  cache.set(2, 2)

  function doClimbStairs(_n: number): number {
    if (cache.get(_n)) return cache.get(_n)!
    const value = doClimbStairs(_n - 1) + doClimbStairs(_n - 2)
    cache.set(_n, value)
    return value
  }

  return doClimbStairs(n)
}

console.log(climbStairs(3))
