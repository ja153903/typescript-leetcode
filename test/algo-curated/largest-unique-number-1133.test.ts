import { largestUniqueNumber } from "../../src/algo-curated/largest-unique-number-1133";

describe("Largest Unique Number", () => {
  test.each`
    i    | num                            | result
    ${1} | ${[5, 7, 3, 9, 4, 9, 8, 3, 1]} | ${8}
    ${2} | ${[9, 9, 8, 8]}                | ${-1}
  `("Case #$i", ({ num, result }) => {
    expect(largestUniqueNumber(num)).toBe(result);
  });
});
