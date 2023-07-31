import { BinaryFindFallbackDirection, BinaryFindFoundBehavior, binaryFindIndex } from '../src/utils'
import { test, expect } from '@jest/globals'
import {
  HeadListNode,
  ListNode,
  reverseList,
  reverseList2,
  reverseList3,
} from '../src/utils/reverseList'

test('binaryFindIndex', function () {
  const testData = [0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 5]
  const testData2 = [4, 3, 3, 2, 2, 2, 2, 2, 1, 1, 0]
  const isValueBiggerThanTwo = (value: number) => value > 2
  const isValueSmallThanOrEqualToTwo = (value: number) => value <= 2
  const testOptionsArray: [
    number[],
    (value: number) => boolean,
    BinaryFindFallbackDirection,
    BinaryFindFoundBehavior,
    number,
  ][] = [
    [testData, isValueSmallThanOrEqualToTwo, 'left', 'return', 6],
    [testData, isValueSmallThanOrEqualToTwo, 'left', 'searchLeft', 0],
    [testData, isValueSmallThanOrEqualToTwo, 'left', 'searchRight', 7],
    [testData, isValueBiggerThanTwo, 'right', 'return', 9],
    [testData, isValueBiggerThanTwo, 'right', 'searchLeft', 8],
    [testData, isValueBiggerThanTwo, 'right', 'searchRight', 11],
    [testData2, isValueSmallThanOrEqualToTwo, 'right', 'return', 5],
    [testData2, isValueSmallThanOrEqualToTwo, 'right', 'searchLeft', 3],
    [testData2, isValueSmallThanOrEqualToTwo, 'right', 'searchRight', 10],
  ]
  testOptionsArray.forEach(([array, predicate, fallbackDirection, foundBehavior, expectedRes]) => {
    expect(binaryFindIndex(array, predicate, { fallbackDirection, foundBehavior })).toBe(
      expectedRes,
    )
  })
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
