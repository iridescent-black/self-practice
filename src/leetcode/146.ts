interface CustomNode {
  prev: CustomNode | null
  next: CustomNode | null
  data: { key: number; value: number }
}

export class LRUCache {
  public capacity: number
  private cache: Map<number, CustomNode>
  private head: CustomNode | null
  private tail: CustomNode | null

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()
    this.head = null
    this.tail = null
  }

  get(key: number): number {
    const node = this.cache.get(key)
    if (node === undefined) return -1

    this.addNodeToTail(node)

    return node.data.value
  }

  put(key: number, value: number): void {
    const cacheNode = this.cache.get(key)

    // 如果 node 已经存在，把 node 移到链表尾部，更新 value
    if (cacheNode) {
      this.addNodeToTail(cacheNode)
      cacheNode.data = { key, value }
      return
    }

    // 已知 capacity >= 1，所以不需要处理 capacity === 0 的情况
    // 如果缓存满了，删除链表头部节点
    if (this.cache.size === this.capacity) {
      const head = this.head!
      this.cache.delete(head.data.key)

      this.head = head.next
      if (this.head) this.head.prev = null
      if (this.tail === head) this.tail = null
    }

    // 如果 key 不存在，创建新节点，同时放到链表尾部
    const node = {
      prev: this.tail,
      next: null,
      data: { key, value },
    }
    if (this.tail) this.tail.next = node
    this.tail = node
    this.cache.set(key, node)
    if (!this.head) this.head = node
  }

  /** 把节点放到尾部，需要保证链表不能为空 */
  private addNodeToTail(node: CustomNode): void {
    // 链表只有一个元素时，不需要处理
    if (this.head === this.tail) return

    // 处理 node 后驱节点
    // 如果 node 没有后驱，那么 node 就是尾节点，不需要处理
    if (!node.next) return
    node.next.prev = node.prev

    // 处理 node 的前驱节点
    if (node.prev) {
      node.prev.next = node.next
    }

    // 处理头结点
    if (node === this.head) {
      this.head = node.next
    }

    // 处理 node 自己
    // node 一定不是 tail，因为 node 有后驱
    // this.tail 一定存在，因为 node 存在，说明链表一定不为空
    this.tail!.next = node
    node.prev = this.tail
    node.next = null
    this.tail = node
  }
}

const testFlow = ['LRUCache', 'get', 'put', 'get', 'put', 'put', 'get', 'get']
const paramsFlow = [[2], [2], [2, 6], [1], [1, 5], [1, 2], [1], [2]]

// const testFlow = ['LRUCache', 'put', 'put', 'get']
// const paramsFlow = [[2], [1, 0], [2, 2], [1]]

const cache = new LRUCache(paramsFlow[0][0])
const result: (null | number)[] = [null]
for (let i = 1; i < testFlow.length; i++) {
  const methodName = testFlow[i]
  const params = paramsFlow[i]
  if (methodName === 'get') {
    const res = cache.get(params[0])
    result.push(res)
  }
  if (methodName === 'put') {
    cache.put(params[0], params[1])
    result.push(null)
  }
}
console.log(result)

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
