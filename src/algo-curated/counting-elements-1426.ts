function countElements(arr: number[]): number {
  const unique = new Set(arr);

  return arr.reduce((prev, num) => (unique.has(num + 1) ? prev + 1 : prev), 0);
}

export { countElements };
