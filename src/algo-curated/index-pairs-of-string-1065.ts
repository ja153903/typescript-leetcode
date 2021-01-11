function indexPairs(text: string, words: string[]): number[][] {
  const result: number[][] = [];

  for (const word of words) {
    const n: number = word.length;

    for (let i = 0; i <= text.length - n; i++) {
      if (text.substring(i, i + n) === word) {
        result.push([i, i + n - 1]);
      }
    }
  }

  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  return result;
}

export { indexPairs };
