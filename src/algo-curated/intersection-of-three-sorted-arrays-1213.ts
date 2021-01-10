function arraysIntersection(
  arr1: number[],
  arr2: number[],
  arr3: number[]
): number[] {
  return intersection(intersection(arr1, arr2), arr3);
}

function intersection(arr1: number[], arr2: number[]): number[] {
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);

  const result = [];

  for (const a of s1) {
    if (s2.has(a)) {
      result.push(a);
    }
  }

  return result;
}

export { arraysIntersection };
