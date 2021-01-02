// For this problem, we need to do a couple things
// we can try to create every single subset
// of combinations
function maxLength(arr: string[]): number {
  const dp: Set<string>[] = [new Set()];

  for (const s of arr) {
    const sSet = new Set(s.split(""));
    if (sSet.size < s.length) {
      continue; // we continue here because this means that there are dups in the string
    }

    // we want to work on a copy of the current list because we would then
    // run into an issue of continuously iterating on a growing array
    const currentDp = [...dp];

    for (const cSet of currentDp) {
      // if there's an intersection between cSet and sSet
      // then we continue
      if (hasIntersection(cSet, sSet)) {
        continue;
      }

      // else we should add the union of characters into the same set
      dp.push(union(cSet, sSet));
    }
  }

  return dp
    .map((s) => s.size)
    .reduce((prev: number, curr: number) => (prev < curr ? curr : prev));
}

function hasIntersection(a: Set<string>, b: Set<string>): boolean {
  // suppose that these values are currently just characters
  const intersection: Set<string> = new Set();

  for (const c of a) {
    if (b.has(c)) {
      intersection.add(c);
    }
  }

  return intersection.size > 0;
}

function union(a: Set<string>, b: Set<string>): Set<string> {
  return new Set([...a.values(), ...b.values()]);
}

export { maxLength };
