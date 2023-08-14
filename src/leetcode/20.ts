/** 判断字符串是否有效 */
export function isValid(s: string): boolean {
  const leftBracketList = ['(', '[', '{']
  const rightBracketList = [')', ']', '}']
  function isValidBracket(left: string, right: string) {
    if (left === '(') return right === ')'
    if (left === '[') return right === ']'
    if (left === '{') return right === '}'
    return false
  }
  const length = s.length
  const bracketList: string[] = []
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

console.log(isValid('()'))
