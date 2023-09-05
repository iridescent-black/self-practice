/** 剑指 Offer 06. 从尾到头打印链表
 * @see https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */
export function reversePrint(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head
  while (current) {
    result.push(current.val)
    current = current.next
  }
  return result.reverse()
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
