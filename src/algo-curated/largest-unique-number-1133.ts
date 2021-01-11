function largestUniqueNumber(A: number[]): number {
  const counter: Map<number, number> = new Map();

  A.forEach((num) => {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  });

  let max = -1;

  for (const [key, value] of counter) {
    if (value === 1) {
      max = Math.max(max, key);
    }
  }

  return max;
}

export { largestUniqueNumber };
