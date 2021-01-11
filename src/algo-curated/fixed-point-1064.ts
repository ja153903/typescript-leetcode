function fixedPoint(A: number[]): number {
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    const mid = Math.floor(left + ((right - left) >> 1));

    if (A[mid] < mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return A[left] === left ? left : -1;
}

export { fixedPoint };
