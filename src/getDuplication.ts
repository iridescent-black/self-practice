/** 获取重复数字 */

import { swap } from './utils'

/**
 * 在一个长度为n的数组里的所有数字都在 0 ~ 1 - 1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中所有重复的数字。例如，如果输入长度为 7 的数组 (2, 3, 1, 0, 2, 5, 3)，那么对应的输出是重复的数字 [2, 3]。
 */

/** 获取数字数组中重复的元素 */
function getDuplication(numbers: number[]): number[] | undefined {
  if (!Array.isArray(numbers)) return void 0

  const length = numbers.length
  const duplication = new Set<number>()

  for (let i = 0; i < length; i += 1) {
    const value = numbers[i]!
    // 如果存在越界情况，认为是无效输入，直接返回 undefined
    if (value < 0 || value > length - 1) return void 0
    if (value === i) continue
    if (value === numbers[value]) {
      duplication.add(value)
    }
    swap(numbers, i, value)
  }

  return Array.from(duplication)
}

// 正常数据
const numbers1 = [2, 3, 1, 0, 2, 5, 3]
// 不包含重复数据
const numbers2 = [2, 3, 1, 0, 4, 5, 6]
// 越界数据
const numbers3 = [2, 3, 1, 0, 2, 5, 8]

console.log(getDuplication(numbers1))
console.log(getDuplication(numbers2))
console.log(getDuplication(numbers3))
