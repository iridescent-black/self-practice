export class MinStack {
  public arr: number[] = []
  public minArr: number[] = []

  push(x: number): void {
    this.arr.push(x)
    if (this.minArr.length === 0 || this.minArr.at(-1)! >= x) this.minArr.push(x)
  }

  pop(): void {
    const poppedValue = this.arr.pop()
    if (this.minArr.at(-1) === poppedValue) this.minArr.pop()
  }

  top(): number | undefined {
    return this.arr[0]
  }

  min(): number | undefined {
    return this.minArr.at(-1)
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
