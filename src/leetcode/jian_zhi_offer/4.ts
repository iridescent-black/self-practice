/** 剑指 Offer 04. 二维数组中的查找
 * @see https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */
export function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!Array.isArray(matrix[0])) return false
  const minX = 0
  const maxY = matrix[0].length - 1

  return isNumberInSub2DMatrix(minX, maxY)

  /** 判断二维数组子集中是否存在某个数
   * @param x 最大横坐标
   * @param y 最小纵坐标
   */
  function isNumberInSub2DMatrix(x: number, y: number): boolean {
    // 判断 matrix[x][y] 是否越界
    const row = matrix[x]
    if (!Array.isArray(row)) return false
    const currentValue = row[y]
    if (typeof currentValue !== 'number') return false

    if (currentValue === target) return true
    // 如果 target 比 currentValue 大，说明在下面
    if (target > currentValue) return isNumberInSub2DMatrix(x + 1, y)
    // 如果 target 比 currentValue 小，说明在左边
    return isNumberInSub2DMatrix(x, y - 1)
  }
}
