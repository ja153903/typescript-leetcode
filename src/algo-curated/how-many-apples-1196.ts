function maxNumberOfApples(arr: number[]): number {
  // sort the array
  arr.sort((a, b) => a - b);

  let result = 0;
  let total = 5000;

  for (const num of arr) {
    if (total - num >= 0) {
      total -= num;
      result++;
    } else {
      break;
    }
  }

  return result;
}

export { maxNumberOfApples };
