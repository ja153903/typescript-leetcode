function highFive(items: number[][]): number[][] {
  const mp: Map<number, number[]> = new Map();

  for (const item of items) {
    const [key, grade] = item;
    const values = mp.get(key) ?? [];
    values.push(grade);

    mp.set(key, values);
  }

  for (const [key, value] of mp) {
    value.sort((a, b) => b - a);
    value.splice(5);
    mp.set(key, value);
  }

  const result = [...mp.entries()].map(([key, value]) => {
    return [key, Math.floor(value.reduce((prev, curr) => prev + curr) / 5)];
  });

  result.sort((a, b) => a[0] - b[0]);

  return result;
}

export { highFive };
