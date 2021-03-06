function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet: Set<string> = new Set([...wordDict]);
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true; // empty string is true

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

export { wordBreak };
