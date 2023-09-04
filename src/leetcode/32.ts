/** 最长有效括号
 * @see https://leetcode.cn/problems/longest-valid-parentheses/description/
 */
export function longestValidParentheses(s: string): number {
  // 最长有效括号的长度
  let longestValue = 0
  // 有效括号的长度就是未匹配的右括号和最后一个匹配的右括号间的索引差值
  // 用于存储未匹配的括号的索引，可能是左括号，也可能是右括号
  const bracketIndexList: number[] = [-1]
  const length = s.length
  for (let i = 0; i < length; i++) {
    // 如果是左括号，放到 bracketIndexList 中
    if (s.charAt(i) === '(') {
      bracketIndexList.push(i)
      continue
    }
    // 如果是右括号，弹出上一个括号，考虑两种情况：
    // 1. 上一个括号是右括号，那么上一个括号就是最后一个未匹配的右括号，此时数组为空，需要把当前右括号的索引放到数组中
    // 2. 上一个括号是左括号，那么数组最后一个值就是上一个未匹配的右括号，计算当前右括号和上一个未匹配的右括号的距离
    bracketIndexList.pop()
    if (bracketIndexList.length === 0) {
      bracketIndexList.push(i)
      continue
    }
    const lastUnMatchedRightBracketIndex = bracketIndexList.at(-1) ?? -1
    longestValue = Math.max(longestValue, i - lastUnMatchedRightBracketIndex)
  }
  return longestValue
}

console.log(longestValidParentheses('()())))'))
