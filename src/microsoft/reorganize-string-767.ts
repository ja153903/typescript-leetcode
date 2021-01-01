interface KeyValuePair<T, S> {
  first: T;
  second: S;
}

function reorganizeString(s: string): string {
  const counter: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    counter.set(s[i], (counter.get(s[i]) ?? 0) + 1);
  }

  const mostCommon: KeyValuePair<string, number>[] = [...counter.keys()].map(
    (key) => {
      return { first: key, second: counter.get(key) ?? 0 };
    }
  );

  mostCommon.sort(
    (a: KeyValuePair<string, number>, b: KeyValuePair<string, number>) =>
      a.second - b.second
  );

  const result = new Array(s.length).fill("");
  const mostFrequent = mostCommon.pop();

  const mostFrequentChar = mostFrequent?.first;
  let mostFrequentCount = mostFrequent?.second ?? 0;

  if (mostFrequentCount > (s.length + 1) / 2) {
    return "";
  }

  let idx = 0;

  while (mostFrequentCount > 0) {
    result[idx] = mostFrequentChar;
    idx += 2;
    mostFrequentCount--;
  }

  while (mostCommon.length > 0) {
    const mostFrequent = mostCommon.pop();
    const mostFrequentChar = mostFrequent?.first;
    let mostFrequentCount = mostFrequent?.second ?? 0;

    while (mostFrequentCount > 0) {
      if (idx >= result.length) {
        idx = 1;
      }

      result[idx] = mostFrequentChar;
      idx += 2;
      mostFrequentCount--;
    }
  }

  return result.join("");
}

export { reorganizeString };
