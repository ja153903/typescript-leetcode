class MaxStack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    return this.stack.pop() ?? -1;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  peekMax(): number {
    let max: number = -Number.MAX_VALUE;

    for (const num of this.stack) {
      max = Math.max(num, max);
    }

    return max;
  }

  popMax(): number {
    const max = this.peekMax();

    const idx = this.stack.lastIndexOf(max);

    this.stack.splice(idx, 1);

    return max;
  }
}

export default MaxStack;
