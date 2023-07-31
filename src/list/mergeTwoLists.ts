import { ListNode } from '.'

/** 合并两个有序链表 */
// 递归
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2
  if (list2 === null) return list1
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }
  list2.next = mergeTwoLists(list1, list2.next)
  return list2
}

/** 合并两个有序链表 */
// 迭代
export function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2
  if (list2 === null) return list1
  const prevHead = new ListNode()

  let tempNode = prevHead
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tempNode.next = list1
      list1 = list1.next
    } else {
      tempNode.next = list2
      list2 = list2.next
    }
    tempNode = tempNode.next
  }

  tempNode.next = list1 === null ? list2 : list1

  return prevHead.next
}
