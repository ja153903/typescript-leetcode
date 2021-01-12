function missingNumber(arr: number[]): number {
  // difference between the first and last number
  // 12 - 15 = -3 / (nums.length - 1) = -1
  // 13 - 5 = 8 / (nums.length - 1) = 2

  const n: number = arr.length;

  const first = arr[0];
  const last = arr[n - 1];

  const step = Math.floor((last - first) / n);

  if (step === 0) {
    return first;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + step !== arr[i]) {
      return arr[i - 1] + step;
    }
  }

  return arr[0];
}

export { missingNumber };
