import { anagramMappings } from "../../src/algo-curated/find-anagram-mappings-760";

describe("Find anagram mappings", () => {
  test.each`
    i    | A                       | B                       | result
    ${1} | ${[12, 28, 46, 32, 50]} | ${[50, 12, 32, 46, 28]} | ${[1, 4, 3, 2, 0]}
    ${2} | ${[12, 12, 24]}         | ${[24, 12, 12]}         | ${[2, 1, 0]}
  `("Case #$i", ({ A, B, result }) => {
    expect(anagramMappings(A, B)).toEqual(result);
  });
});
