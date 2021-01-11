import { shortestDistance } from "../../src/algo-curated/shortest-word-distance-243";

describe("Shortest Distance", () => {
  test.each`
    i    | words                                                  | word1       | word2         | result
    ${1} | ${["practice", "makes", "perfect", "coding", "makes"]} | ${"coding"} | ${"practice"} | ${3}
  `("Case #$i", ({ words, word1, word2, result }) => {
    expect(shortestDistance(words, word1, word2)).toBe(result);
  });
});
