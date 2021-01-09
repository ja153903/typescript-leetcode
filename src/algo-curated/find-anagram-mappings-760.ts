function anagramMappings(A: number[], B: number[]): number[] {
  // since list can contain duplicates, we can return them in any order
  // we just have to modify our solution a little bit
  // so what we need here is to have a map where the key
  // is the value at index i, and the value of the map is a list
  // of indices where the key exists

  const map: Map<number, number[]> = new Map();

  B.forEach((value, index) => {
    if (map.has(value)) {
      map.get(value)?.push(index);
    } else {
      map.set(value, [index]);
    }
  });

  const result: number[] = [];

  for (const num of A) {
    const value = map.get(num) ?? [];

    if (value.length > 0) {
      const popped = value.pop() ?? -1;
      result.push(popped);
    }
  }

  return result;
}

export { anagramMappings };
