/**
 * 剑指 Offer 05. 替换空格
 * @see https://leetcode.cn/problems/ti-huan-kong-ge-lcof/
 */
export function replaceSpace(s: string): string {
  return s.replaceAll(' ', '%20')
}
