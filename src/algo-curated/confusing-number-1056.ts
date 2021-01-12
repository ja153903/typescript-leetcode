function confusingNumber(N: number): boolean {
  const validNums = new Set([0, 1, 6, 8, 9]);
  const rotationMap = new Map([
    [1, 1],
    [0, 0],
    [6, 9],
    [8, 8],
    [9, 6],
  ]);

  let copy: number = N;
  let rotated: number = 0;

  while (N > 0) {
    if (!validNums.has(N % 10)) {
      return false;
    }

    rotated = rotated * 10 + (rotationMap.get(N % 10) ?? 0);

    N = Math.floor(N / 10);
  }

  return copy !== rotated;
}

export { confusingNumber };
