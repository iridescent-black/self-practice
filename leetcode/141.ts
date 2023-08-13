import { ListNode } from '../src/list'

/** 环形链表
 * @see https://leetcode.cn/problems/linked-list-cycle/description/
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false

  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast !== null && fast.next !== null && slow !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) return true
  }

  return false
}
