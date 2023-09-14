/** 1222. 可以攻击国王的皇后
 * @see https://leetcode.cn/problems/queens-that-can-attack-the-king/
 *
 * @提示
 * - 1 <= queens.length <= 63
 * - queens[i].length == 2
 * - 0 <= queens[i][j] < 8
 * - king.length == 2
 * - 0 <= king[0], king[1] < 8
 * - 一个棋盘格上最多只能放置一枚棋子。
 */
export function queensAttackTheKing(queens: number[][], king: number[]): number[][] {
  const result: number[][] = []
  // 存储皇后的位置
  const cache = new Map<string, number[]>()
  for (const queen of queens) {
    cache.set(queen.join('-'), queen)
  }
  // 8个方向
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      // 国王所在位置，跳过
      if (i === 0 && j === 0) continue

      // [i, j] 为当前查找的方向
      let x: number = king[0] + i,
        y: number = king[1] + j

      // 循环遍历这条直线上是否存在第一个皇后，找到就退出循环
      // 循环终止条件：越界
      while (x >= 0 && y >= 0 && x < 8 && y < 8) {
        if (cache.has(`${x}-${y}`)) {
          // 当前遍历位置存在皇后
          result.push([x, y])
          // 当前直线上的第一个皇后已经找到，退出循环
          break
        }
        // 继续往当前直线遍历
        x += i
        y += j
      }
    }
  }
  return result
}
