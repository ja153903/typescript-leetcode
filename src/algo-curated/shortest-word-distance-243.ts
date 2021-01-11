function shortestDistance(
  words: string[],
  word1: string,
  word2: string
): number {
  const mp: Map<string, number[]> = new Map();

  words.forEach((word, i) => {
    if (mp.has(word)) {
      mp.get(word)?.push(i);
    } else {
      mp.set(word, [i]);
    }
  });

  const wordIndices1 = mp.get(word1) ?? [];
  const wordIndices2 = mp.get(word2) ?? [];

  let min = Number.MAX_VALUE;

  for (let i = 0; i < wordIndices1.length; i++) {
    for (let j = 0; j < wordIndices2.length; j++) {
      min = Math.min(min, Math.abs(wordIndices1[i] - wordIndices2[j]));
    }
  }

  return min;
}

function optimal(words: string[], word1: string, word2: string): number {
  let p1 = -1;
  let p2 = -1;
  let min = Number.MAX_VALUE;

  words.forEach((word, i) => {
    if (word === word1) {
      p1 = i;
    }

    if (word === word2) {
      p2 = i;
    }

    if (p1 !== -1 && p2 !== -1) {
      min = Math.min(min, Math.abs(p1 - p2));
    }
  });

  return min;
}

export { shortestDistance };
