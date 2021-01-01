function findDuplicate(nums: number[]): number {
  const counter: Map<number, number> = new Map();

  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }

  for (const [key, value] of counter) {
    if (value > 1) {
      return key;
    }
  }

  return -1;
}

export { findDuplicate };
