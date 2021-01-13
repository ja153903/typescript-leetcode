import { areSentencesSimilar } from "../../src/algo-curated/sentence-similarity-734";

describe("Sentence Similarity", () => {
  test.each`
    i    | sentence1                        | sentence2                      | similarPairs                                                      | result
    ${1} | ${["great", "acting", "skills"]} | ${["fine", "drama", "talent"]} | ${[["great", "fine"], ["drama", "acting"], ["skills", "talent"]]} | ${true}
    ${2} | ${["great"]}                     | ${["great"]}                   | ${[]}                                                             | ${true}
    ${3} | ${["great"]}                     | ${["doubleplus", "good"]}      | ${[["great", "doubleplus"]]}                                      | ${false}
  `("Case #$i", ({ sentence1, sentence2, similarPairs, result }) => {
    expect(areSentencesSimilar(sentence1, sentence2, similarPairs)).toBe(
      result
    );
  });
});
