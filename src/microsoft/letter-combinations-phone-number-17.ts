function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const queue: string[] = [""];
  const map: Map<string, string> = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  // once we have this map constructed, the next thing we should do
  // is to construct all possible combinations
  for (const digit of digits.split("")) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const front = queue.shift() ?? "";

      for (const letter of map.get(digit) ?? "") {
        queue.push(`${front}${letter}`);
      }
    }
  }

  return queue;
}

export { letterCombinations };
