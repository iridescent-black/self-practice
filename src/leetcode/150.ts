/** 根据「逆波兰表达式」求值 */
export function evalRPN(tokens: string[]): number {
  if (tokens.length === 0) return 0

  const operatorSet = new Set(['+', '-', '*', '/'])
  const values: number[] = []

  function doOperation(value1: number, value2: number, operator: string) {
    if (operator === '+') {
      return value1 + value2
    }
    if (operator === '-') {
      return value1 - value2
    }
    if (operator === '*') {
      return value1 * value2
    }
    if (operator === '/') {
      return value1 / value2 > 0 ? Math.floor(value1 / value2) : Math.ceil(value1 / value2)
    }
    throw new Error('unknown operator: ' + operator)
  }

  for (const token of tokens) {
    if (!operatorSet.has(token)) {
      values.push(Number(token))
      continue
    }
    if (values.length >= 2) {
      const value2 = values.pop()!
      const value1 = values.pop()!
      const operator = token
      values.push(doOperation(value1, value2, operator)!)
    }
  }

  return values[0]
}

const data = ['2', '1', '+', '3', '*']
console.log(evalRPN(data))
