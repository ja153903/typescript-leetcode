function isMajorityElement(nums: number[], target: number): boolean {
  // create a counter of all elements in the array
  const counter: Map<number, number> = new Map();

  nums.forEach((num) => {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  });

  if (!counter.has(target)) {
    return false;
  }

  const targetValue = counter.get(target) ?? 0;

  return targetValue > Math.floor(nums.length / 2);
}

export { isMajorityElement };
