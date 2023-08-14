/** 多数元素
 * @see https://leetcode.cn/problems/majority-element/
 */
export function majorityElement(nums: number[]): number | undefined {
  const catchMap = new Map<number, number>()
  const length = nums.length
  if (length <= 2) return nums[0]

  for (let i = 0; i < length; i++) {
    const value = nums[i]
    const count = catchMap.get(value)
    if (count === void 0) {
      catchMap.set(value, 1)
      continue
    }
    if (count + 1 > length / 2) return value
    catchMap.set(value, count + 1)
  }

  return void 0
}
