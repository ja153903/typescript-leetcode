import { calculateTime } from "../../src/algo-curated/single-row-keyboard-1165";

describe("Single Row Keyboard", () => {
  test.each`
    i    | keyboard                        | word          | result
    ${1} | ${"abcdefghijklmnopqrstuvwxyz"} | ${"cba"}      | ${4}
    ${2} | ${"pqrstuvwxyzabcdefghijklmno"} | ${"leetcode"} | ${73}
  `("Case #$i", ({ keyboard, word, result }) => {
    expect(calculateTime(keyboard, word)).toBe(result);
  });
});
