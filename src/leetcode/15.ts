/** 三数之和
 * @see https://leetcode.cn/problems/3sum/description/
 */
function threeSum(nums: number[]): number[][] {
  // 先将数组排序
  nums.sort((a, b) => a - b)

  const result: number[][] = []
  const length = nums.length

  // 从 i 到 i + 2，所以遍历到 length - 2
  for (let i = 0; i < length - 2; i++) {
    const currentValue = nums[i]
    // 相同的 i 求得的结果中只取最右侧的结果
    if (i > 0 && currentValue === nums[i - 1]) continue
    // 因为数组从下到大排过序了
    // 如果 [i, i + 1, i + 2] 的值和大于 0，那么后面任意三数之和一定大于 0
    // 结束查找
    if (currentValue + nums[i + 1] + nums[i + 2] > 0) break
    // nums[length - 2]、nums[length - 1] 是最大的两个数
    // 如果 nums[i] 加上最大的两个数还小于 0，那加上别的数也一定小于 0
    // 掉过 i，向后查找
    if (currentValue + nums[length - 2] + nums[length - 1] < 0) continue

    // 查找：对于 nums[i]，是否存在两个索引：left、right，使得三数之和等于 0
    let left = i + 1
    let right = length - 1
    while (left < right) {
      const sum = currentValue + nums[left] + nums[right]
      // 三数之和小于 0，说明左侧的值取小了，左侧的索引后移
      if (sum < 0) left += 1
      // 三数之和大于 0，说明右侧的值取大了，右侧的索引前移
      else if (sum > 0) right -= 1
      else {
        // 三数之和等于 0 时，添加结果
        // 左侧的索引后移，右侧的索引前移，查找是否还有别的结果
        result.push([currentValue, nums[left], nums[right]])
        left += 1
        right -= 1

        // 过滤满足结果的相同的 left 和 right
        while (nums[right] === nums[right + 1]) right -= 1
        while (nums[left] === nums[left - 1]) left += 1
      }
    }
  }

  return result
}

console.log(threeSum([1, 2, -2, -1]))
