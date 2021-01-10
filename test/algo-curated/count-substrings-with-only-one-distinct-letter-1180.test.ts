import { countLetters } from "../../src/algo-curated/count-substrings-with-only-one-distinct-letter-1180";

describe("Count Substrings with Only One Distinct Letter", () => {
  test.each`
    i    | S          | result
    ${1} | ${"aaaba"} | ${8}
  `("Case #$i", ({ S, result }) => {
    expect(countLetters(S)).toBe(result);
  });
});
