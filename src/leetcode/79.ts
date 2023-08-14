/** 矩阵中的路径
 * @see https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/description/
 */
export function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (find(board, i, j, word, 0)) return true
    }
  }
  return false

  function find(board: string[][], i: number, j: number, word: string, k: number): boolean {
    if (i < 0 || i >= board.length) return false
    if (j < 0 || j >= board[i].length) return false
    if (board[i][j] !== word.charAt(k)) return false
    if (k === word.length - 1) return true
    board[i][j] = ''
    const nextK = k + 1
    const res =
      find(board, i + 1, j, word, nextK) ||
      find(board, i - 1, j, word, nextK) ||
      find(board, i, j + 1, word, nextK) ||
      find(board, i, j - 1, word, nextK)
    board[i][j] = word.charAt(k)
    return res
  }
}
