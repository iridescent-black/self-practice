import { ListNode } from '../src/list'
import { PriorityQueue } from '../src/utils'

/** 合并 K 个升序链表
 * @description 每次都遍历 lists，取值最小的
 */
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  const head = new ListNode()
  let node = head

  type ReduceValue = {
    index: number
    node: ListNode | null
  }

  while (true) {
    const { node: minNode, index: minIndex } = lists.reduce<ReduceValue>(
      (prev, next, index) => {
        if (!next) return prev
        if (!prev.node || next.val < prev.node.val) return { node: next, index }
        return prev
      },
      { node: null, index: -1 },
    )
    if (minIndex === -1 || !minNode) break
    node.next = minNode
    node = node.next
    lists[minIndex] = minNode.next
  }

  return head.next
}

/** 使用优先队列实现 */
export function mergeKLists2(lists: Array<ListNode | null>): ListNode | null {
  const length = lists.length
  if (length === 0) return null

  // 构建最小堆
  const queue = new PriorityQueue<ListNode>((node1, node2) => node1.val - node2.val)
  for (const node of lists) {
    if (node !== null) queue.push(node)
  }

  const head = new ListNode()
  let tempNode = head
  while (queue.getRootItem()) {
    const minNode = queue.getRootItem()
    tempNode.next = minNode
    tempNode = minNode
    if (minNode.next !== null) {
      queue.push(minNode.next)
    }
    queue.shift()
  }

  return head.next
}

/** 通过 Array 创建链表 */
function createListFromArray(arr: number[]) {
  const head = new ListNode()

  let lastNode = head
  arr.forEach((val) => {
    const node = new ListNode(val)
    lastNode.next = node
    lastNode = node
  })

  return head.next
}

function display(node: ListNode | null): number[] {
  const res: number[] = []
  let logNode = node
  while (logNode !== null) {
    res.push(logNode.val)
    logNode = logNode.next
  }
  return res
}

const data = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
].map(createListFromArray)
console.log(display(mergeKLists2(data)))
