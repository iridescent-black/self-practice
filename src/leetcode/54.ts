/** 螺旋打印矩阵 */
export function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) return []
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  const result: number[] = []

  while (true) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i])
    if (++top > bottom) break

    for (let i = top; i <= bottom; i++) result.push(matrix[i][right])
    if (left > --right) break

    for (let i = right; i >= left; i--) result.push(matrix[bottom][i])
    if (top > --bottom) break

    for (let i = bottom; i >= top; i--) result.push(matrix[i][left])
    if (++left > right) break
  }

  return result
}
