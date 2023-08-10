/** 缺失的第一个正数
 * @see https://leetcode.cn/problems/first-missing-positive/
 */
export function firstMissingPositive(nums: number[]): number {
  function getRightIndex(index: number): number {
    return nums[index] - 1
  }

  const length = nums.length

  // i 的取值是 [0, L - 1]
  // value 的取值是 [1, L]
  for (let i = 0; i < length; i++) {
    while (nums[i] > 0 && nums[i] <= length && nums[getRightIndex(i)] !== nums[i]) {
      const rightIndex = getRightIndex(i)
      const temp = nums[rightIndex]
      nums[rightIndex] = nums[i]
      nums[i] = temp
    }
  }

  for (let i = 0; i < length; i++) {
    if (nums[i] != i + 1) {
      return i + 1
    }
  }

  return length + 1
}

console.log(firstMissingPositive([1]))
