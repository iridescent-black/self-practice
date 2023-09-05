/** 剑指 Offer 09. 用两个栈实现队列
 * @see https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */
export class Queue {
  private stack1: number[] = []
  private stack2: number[] = []

  constructor() {}

  appendTail(value: number): void {
    this.stack1.push(value)
  }

  deleteHead(): number {
    if (this.stack2.length) return this.stack2.pop()!
    if (this.stack1.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!)
      }
      return this.stack2.pop()!
    }
    return -1
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
