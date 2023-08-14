import { PriorityQueue } from '../src/utils'

/** 滑动窗口最大值 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const length = nums.length
  if (k >= length) return [Math.max(...nums)]
  const queue = new PriorityQueue<{ value: number; index: number }>((a, b) => b.value - a.value)
  for (let i = 0; i < k; i++) {
    queue.push({ value: nums[i], index: i })
  }
  const res = [queue.getRootItem().value]
  for (let i = k; i < length; i++) {
    queue.push({ value: nums[i], index: i })
    while (queue.getRootItem().index > i || queue.getRootItem().index <= i - k) {
      queue.shift()
    }
    res.push(queue.getRootItem().value)
  }
  return res
}

export function maxSlidingWindow2(nums: number[], k: number): number[] {
  const length = nums.length
  const indexList = [0]

  for (let i = 1; i < k; i++) {
    while (indexList.length > 0 && nums[i] >= nums[indexList.at(-1)!]) {
      indexList.pop()
    }
    indexList.push(i)
  }

  const res = [nums[indexList[0]]]
  for (let i = k; i < length; i++) {
    while (indexList.length > 0 && nums[i] >= nums[indexList.at(-1)!]) {
      indexList.pop()
    }
    indexList.push(i)
    while (indexList[0] <= i - k) {
      indexList.shift()
    }
    res.push(nums[indexList[0]])
  }

  return res
}

console.log(maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3))
