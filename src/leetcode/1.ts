/** 两数之和
 * @see https://leetcode.cn/problems/two-sum/
 */
export function twoSum(nums: number[], target: number): number[] {
  // 维护一个 { num 值: 数组索引 } 的映射表
  const cachedMap = new Map<number, number>()
  const length = nums.length

  for (let i = 0; i < length; i++) {
    const currentValue = nums[i]
    const anotherIndex = cachedMap.get(target - currentValue)
    if (anotherIndex !== void 0) return [anotherIndex, i]
    cachedMap.set(currentValue, i)
  }

  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
