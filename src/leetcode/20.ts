/** 判断字符串是否有效
 * @see https://leetcode.cn/problems/valid-parentheses/
 */
export function isValid(s: string): boolean {
  const leftBracketList = ['(', '[', '{']
  const rightBracketList = [')', ']', '}']
  const length = s.length
  const bracketList: string[] = []

  // 遍历字符串：
  // 如果是左括号，就放到左括号栈中。
  // 如果是右括号，判断是否和栈顶的左括号匹配，不能匹配就结束，能匹配就弹出栈顶元素。
  for (let i = 0; i < length; i++) {
    const char = s.charAt(i)

    if (leftBracketList.includes(char)) {
      bracketList.push(char)
      continue
    }

    if (rightBracketList.includes(char)) {
      const lastLeftBracket = bracketList.pop() || ''
      if (!isValidBracket(lastLeftBracket, char)) return false
    }
  }

  return bracketList.length === 0
}

/** 判断左右括号是否匹配 */
function isValidBracket(left: string, right: string) {
  if (left === '(') return right === ')'
  if (left === '[') return right === ']'
  if (left === '{') return right === '}'
  return false
}

console.log(isValid('()'))
