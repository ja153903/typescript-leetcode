class MovingAverage {
  capacity: number;
  runningSum: number;
  values: number[];

  constructor(size: number) {
    this.runningSum = 0;
    this.values = [];
    this.capacity = size;
  }

  next(val: number): number {
    if (this.atCapacity()) {
      const front = this.values.shift();
      this.runningSum -= front;
    }

    this.values.push(val);
    this.runningSum += val;

    return this.runningSum / this.values.length;
  }

  isEmpty(): boolean {
    return this.values.length === 0;
  }

  atCapacity(): boolean {
    return this.values.length === this.capacity;
  }
}
