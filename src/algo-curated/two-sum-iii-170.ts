class TwoSum {
  nums: number[];

  constructor() {
    this.nums = [];
  }

  add(num: number): void {
    this.nums.push(num);
  }

  find(value: number): boolean {
    if (this.nums.length < 2) {
      return false;
    }

    const seen: Set<number> = new Set();

    for (const num of this.nums) {
      if (seen.has(value - num)) {
        return true;
      }

      seen.add(num);
    }

    return false;
  }
}
