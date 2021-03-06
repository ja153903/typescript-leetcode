function numWays(n: number, k: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return k;
  }

  if (n === 2) {
    return k * k;
  }

  const dp: number[] = new Array(n + 1).fill(0);
  dp[1] = k;
  dp[2] = k * k;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) * (k - 1);
  }

  return dp[n];
}

export { numWays };
