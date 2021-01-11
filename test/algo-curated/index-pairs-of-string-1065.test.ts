import { indexPairs } from "../../src/algo-curated/index-pairs-of-string-1065";

describe("Index Pairs", () => {
  test.each`
    i    | text                         | words                             | result
    ${1} | ${"thestoryofleetcodeandme"} | ${["story", "fleet", "leetcode"]} | ${[[3, 7], [9, 13], [10, 17]]}
    ${2} | ${"ababa"}                   | ${["aba", "ab"]}                  | ${[[0, 1], [0, 2], [2, 3], [2, 4]]}
  `("Case #$i", ({ text, words, result }) => {
    expect(indexPairs(text, words)).toEqual(result);
  });
});
