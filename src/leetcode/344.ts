/** 反转数组
 * @see https://leetcode.cn/problems/reverse-string/
 */
export function reverseString(s: string[]): void {
  if (s.length <= 1) return
  const length = s.length
  const mid = Math.floor(length / 2) - 1

  for (let i = 0; i <= mid; i++) {
    const endIndex = length - 1 - i
    const temp = s[endIndex]
    s[endIndex] = s[i]
    s[i] = temp
  }
}
