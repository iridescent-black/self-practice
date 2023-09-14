/** LCP 50. 宝石补给
 * @see https://leetcode.cn/problems/WHnhjV/
 */
export function giveGem(gem: number[], operations: number[][]): number {
  for (const step of operations) {
    const [x, y] = step
    const half = Math.floor(gem[x] / 2)
    gem[x] -= half
    gem[y] += half
  }
  let min = Infinity
  let max = -Infinity
  for (const item of gem) {
    min = Math.min(min, item)
    max = Math.max(max, item)
  }
  return max - min
}
