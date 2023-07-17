/** 判断二维数组中是否存在某个数
 * @description 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
function isNumberIn2DMatrix(matrix: number[][], target: number): boolean {
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
    else if (target > currentValue) return isNumberInSub2DMatrix(x + 1, y)
    // 如果 target 比 currentValue 小，说明在左边
    else return isNumberInSub2DMatrix(x, y - 1)
  }
}

const matrix1 = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
]
// 空数组
const matrix2: number[][] = []
// 二维空数组
const matrix3: number[][] = [[]]
// 只有一行的二维数组
const matrix4: number[][] = [[1, 2, 3]]
// 只有一列的二维数组
const matrix5: number[][] = [[1], [2], [3]]

console.log(isNumberIn2DMatrix(matrix1, 7))  // true
console.log(isNumberIn2DMatrix(matrix1, 0))  // false
console.log(isNumberIn2DMatrix(matrix3, 0))  // false
console.log(isNumberIn2DMatrix(matrix4, 1))  // true
console.log(isNumberIn2DMatrix(matrix4, 10)) // false
console.log(isNumberIn2DMatrix(matrix5, 2))  // true
console.log(isNumberIn2DMatrix(matrix5, 20)) // false

