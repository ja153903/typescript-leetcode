function areSentencesSimilar(
  sentence1: string[],
  sentence2: string[],
  similarPairs: string[][]
): boolean {
  if (sentence1.length !== sentence2.length) {
    return false;
  }

  const similarity: Map<string, Set<string>> = new Map();

  for (const [x, y] of similarPairs) {
    if (similarity.has(x)) {
      similarity.get(x)?.add(y);
    } else {
      similarity.set(x, new Set([y]));
    }

    if (similarity.has(y)) {
      similarity.get(y)?.add(x);
    } else {
      similarity.set(y, new Set([x]));
    }
  }

  for (let i = 0; i < sentence1.length; i++) {
    if (sentence1[i] === sentence2[i]) {
      continue;
    }

    if (similarity.size === 0 && sentence1[i] !== sentence2[i]) {
      return false;
    }

    if (
      !similarity.get(sentence1[i])?.has(sentence2[i]) &&
      !similarity.get(sentence2[i])?.has(sentence1[i])
    ) {
      return false;
    }
  }

  return true;
}

export { areSentencesSimilar };
