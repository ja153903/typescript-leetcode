function minCost(s: string, cost: number[]): number {
  // we can iterate through the entire string
  // while the current character is the same as the previous
  // make sure that we keep the maximum cost left over
  // and eat the rest
  let i = 0;

  let deletionCost = 0;

  while (i < s.length) {
    let prev = s[i];
    let minCost: number[] = [];
    let count = 0;

    while (prev === s[i]) {
      minCost.push(cost[i]);
      count++;
      i++;
    }

    if (count > 1) {
      const max = Math.max(...minCost);
      const toIgnore = minCost.findIndex((num) => num === max);
      deletionCost += minCost
        .filter((_, index) => index !== toIgnore)
        .reduce((acc, curr) => acc + curr, 0);
    }

    if (count === 0) {
      i++;
    }
  }

  return deletionCost;
}

export { minCost };
