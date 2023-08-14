/** 最长有效括号
 * @see https://leetcode.cn/problems/longest-valid-parentheses/description/
 */
export function longestValidParentheses(s: string): number {
  let longestValue = 0
  const bracketIndexList: number[] = [-1]
  const length = s.length
  for (let i = 0; i < length; i++) {
    if (s.charAt(i) === '(') {
      bracketIndexList.push(i)
      continue
    }
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

console.log(longestValidParentheses(')()())'))
