import { binaryFindIndex } from '../src/utils'
import { test, expect } from '@jest/globals'
import {
  HeadListNode,
  ListNode,
  reverseList,
  reverseList2,
  reverseList3,
} from '../src/utils/reverseList'

test('binaryFindIndex', function () {
  const testData = [0, 2, 2, 2, 4]
  const res1 = binaryFindIndex(testData, (value) => value <= 2)
  const res2 = binaryFindIndex(testData, (value) => value <= 2, { orderReverted: true })
  expect(res1).toBe(3)
  expect(res2).toBe(1)
})

test('createListFromArray', function () {
  const data = [1, 2, 3, 4, 5]
  const headNode = createListFromArray(data)
  expect(display(headNode)).toEqual([1, 2, 3, 4, 5])
})

test('reverseList', function () {
  const data = [1, 2, 3, 4, 5]
  let headNode = createListFromArray(data)
  headNode = reverseList(headNode)
  expect(display(headNode)).toEqual([5, 4, 3, 2, 1])
})

test('reverseList2', function () {
  const data = [1, 2, 3, 4, 5]
  let headNode = createListFromArray(data)
  headNode = reverseList2(headNode)
  expect(display(headNode)).toEqual([5, 4, 3, 2, 1])
})

test('reverseList3', function () {
  const data = [1, 2, 3, 4, 5]
  let headNode = createListFromArray(data)
  headNode = reverseList3(headNode)
  expect(display(headNode)).toEqual([5, 4, 3, 2, 1])
})

/** 打印链表 */
function display(node: ListNode | null): number[] {
  const res: number[] = []
  let logNode = node
  while (logNode !== null) {
    res.push(logNode.val)
    logNode = logNode.next
  }
  return res
}

/** 通过 Array 创建链表 */
function createListFromArray(arr: number[]) {
  const head = new HeadListNode()

  let lastNode = head.next
  arr.forEach((val) => {
    const node = new ListNode(val)
    lastNode.next = node
    lastNode = node
  })

  return head.next instanceof HeadListNode ? null : head.next
}
