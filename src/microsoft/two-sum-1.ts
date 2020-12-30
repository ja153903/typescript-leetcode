function twoSum(numbers: number[], target: number): number[] {
  const seen: Map<number, number> = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(target - numbers[i])) {
      const value = seen.get(target - numbers[i]) ?? -1;

      return [value, i];
    }

    seen.set(numbers[i], i);
  }

  return [];
}

export { twoSum };
