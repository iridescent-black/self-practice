/** 2596. 检查骑士巡视方案
 * @see https://leetcode.cn/problems/check-knight-tour-configuration/
 */
export function checkValidGrid(grid: number[][]): boolean {
  const rowLength = grid.length
  // 最少是 4 * 4 的棋盘，才能保证每个格子都能可达
  if (rowLength < 4) return false
  // 题目提示 n == grid.length == grid[i].length，所以不需要判断 rowLength 与 colLength 是否相等
  const colLength = rowLength
  // 总格子数
  const gridLength = rowLength * colLength

  // 判断第一步是否从 [0, 0] 开始
  if (grid[0][0] !== 0) return false

  // 存储每一步到达的 [row, col]
  const cacheMap = new Map<number, [number, number]>()
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      // 题目提示 grid 中的所有整数 互不相同，所以不需要判断是否重复
      // 题目提示 0 <= grid[row][col] < n * n，所以不需要判断是否越界
      const step = grid[row][col]
      cacheMap.set(step, [row, col])
    }
  }

  for (let step = 1; step < gridLength; step++) {
    // 判断 step - 1 步是否能走到 step 步
    const [row, col] = cacheMap.get(step)!
    const [prevRow, prevCol] = cacheMap.get(step - 1)!
    const dx = Math.abs(row - prevRow)
    const dy = Math.abs(col - prevCol)
    if (dx * dy !== 2) return false
  }

  return true
}

const grid = [
  [0, 11, 16, 5, 20],
  [17, 4, 19, 10, 15],
  [12, 1, 8, 21, 6],
  [3, 18, 23, 14, 9],
  [24, 13, 2, 7, 22],
]
console.log(checkValidGrid(grid))
