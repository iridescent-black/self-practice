/** 缺失的第一个正数
 * @see https://leetcode.cn/problems/first-missing-positive/
 * @description
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * @description
 * 假设数组长度为 L，那么缺失的第一个正数一定在 [1, L + 1] 之间，
 * 因为如果 [1, L] 都出现了，那么答案是 L + 1，否则答案是 [1, L] 中没有出现的最小正整数。
 * 由于有时间和空间上的限制，我们需要把原数组当成一个 Hash 表。数组下标 i 对应的正整数数应该是 i + 1。
 * 那么我们只需要先遍历数组，把当前数组内所有的值都放到它应该在的索引上。
 * 再遍历一遍数组，找到第一个不符合 nums[i] = i + 1 的 i，那么 i + 1 就是缺失的第一个正数。
 */
export function firstMissingPositive(nums: number[]): number {
  const length = nums.length

  // 将 nums[i] 放到它应该在的索引上
  for (let i = 0; i < length; i++) {
    while (nums[i] > 0 && nums[i] <= length && nums[getMatchedIndex(i)] !== nums[i]) {
      const rightIndex = getMatchedIndex(i)
      const temp = nums[rightIndex]
      nums[rightIndex] = nums[i]
      nums[i] = temp
    }
  }

  // 找到第一个不符合 nums[i] = i + 1 的 i
  for (let i = 0; i < length; i++) {
    if (nums[i] != i + 1) {
      return i + 1
    }
  }

  /**
   * 获取 nums[index] 应该在的索引
   */
  function getMatchedIndex(index: number): number {
    return nums[index] - 1
  }

  return length + 1
}

console.log(firstMissingPositive([1]))
