export default class MyQueue {
  incoming: number[];
  outgoing: number[];

  constructor() {
    this.incoming = [];
    this.outgoing = [];
  }

  push(x: number): void {
    this.incoming.push(x);
  }

  pop(): number {
    if (this.empty()) {
      return -1;
    }

    while (this.incoming.length > 0) {
      const popped: number | undefined = this.incoming.pop();
      if (popped) {
        this.outgoing.push(popped);
      }
    }

    const value: number = this.outgoing.pop() || -1;

    while (this.outgoing.length > 0) {
      const popped: number | undefined = this.outgoing.pop();
      if (popped) {
        this.incoming.push(popped);
      }
    }

    return value;
  }

  peek(): number {
    return this.incoming[0];
  }

  empty(): boolean {
    return this.incoming.length === 0;
  }
}
