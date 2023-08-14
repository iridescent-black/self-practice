/** 两数之和
 * @see https://leetcode.cn/problems/two-sum/
 */
export function twoSum(nums: number[], target: number): number[] {
  const cachedMap = new Map<number, number>()
  const length = nums.length

  for (let i = 0; i < length; i++) {
    const currentValue = nums[i]!
    const leftIndex = cachedMap.get(target - currentValue)
    if (leftIndex !== void 0) return [leftIndex, i]
    cachedMap.set(currentValue, i)
  }

  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
