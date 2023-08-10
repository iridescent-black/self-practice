/** 三数之和
 * @see https://leetcode.cn/problems/3sum/description/
 */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  const result: number[][] = []
  const length = nums.length
  for (let i = 0; i < length - 2; i++) {
    const currentValue = nums[i]
    if (i > 0 && currentValue === nums[i - 1]) continue
    if (currentValue + nums[i + 1] + nums[i + 2] > 0) break
    if (currentValue + nums[length - 2] + nums[length - 1] < 0) continue

    let left = i + 1
    let right = length - 1
    while (left < right) {
      const sum = currentValue + nums[left] + nums[right]
      if (sum < 0) left += 1
      else if (sum > 0) right -= 1
      else {
        result.push([currentValue, nums[left], nums[right]])
        left += 1
        right -= 1

        while (nums[right] === nums[right + 1]) right -= 1
        while (nums[left] === nums[left - 1]) left += 1
      }
    }
  }

  return result
}

console.log(threeSum([1, 2, -2, -1]))
