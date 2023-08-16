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

  /** 查找单词是否在矩阵中
   * @param board 字符串数组
   * @param i 行坐标
   * @param j 纵坐标
   * @param word 要匹配的单词
   * @param k 单词的字符索引
   */
  function find(board: string[][], i: number, j: number, word: string, k: number): boolean {
    // i、j 超过边界
    if (i < 0 || i >= board.length) return false
    if (j < 0 || j >= board[i].length) return false
    // 字符不匹配，终止查找
    if (board[i][j] !== word.charAt(k)) return false
    // 查找到最后一个字符时，返回结果 true
    if (k === word.length - 1) return true
    // 递归遍历，查找结果，每次都把当前值置空，防止重复查找
    board[i][j] = ''
    const nextK = k + 1
    const res =
      find(board, i + 1, j, word, nextK) ||
      find(board, i - 1, j, word, nextK) ||
      find(board, i, j + 1, word, nextK) ||
      find(board, i, j - 1, word, nextK)
    // 递归结束后，还原当前坐标的字符
    board[i][j] = word.charAt(k)
    return res
  }
}
