export class HeadListNode {
  public next: ListNode | HeadListNode

  public constructor(next?: ListNode) {
    this.next = next ?? this
  }
}

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head

  let left = null
  let right: ListNode | null = head

  while (right !== null) {
    const rightNext: ListNode | null = right.next
    right.next = left
    left = right
    right = rightNext
  }

  return left
}

// 使用递归实现
export function reverseList2(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head

  const last = reverseList2(head.next)
  head.next.next = head
  head.next = null

  return last
}

// 另一种双指针实现
export function reverseList3(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head

  let currentNode = head

  while (head.next !== null) {
    const tempNode: ListNode | null = head.next.next
    head.next.next = currentNode
    currentNode = head.next
    head.next = tempNode
  }

  return currentNode
}
