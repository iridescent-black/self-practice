/**
 * 剑指 Offer 03. 数组中重复的数字
 * @see https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 *
 * @description
 * 采用原地哈希的思想，将数组中的值放到它应该在的索引上。如果发现这个索引上的值已经是正确的了，那么就说明这个值是重复的。
 */
export function findRepeatNumber(nums: number[]): number {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === i) {
      i++
    } else if (nums[nums[i]] === nums[i]) {
      return nums[i]
    } else {
      const temp = nums[i]
      nums[i] = nums[temp]
      nums[temp] = temp
    }
  }

  throw new Error('当前数组中不存在重复的数字')
}

console.log(findRepeatNumber([3, 4, 2, 1, 1, 0]))
