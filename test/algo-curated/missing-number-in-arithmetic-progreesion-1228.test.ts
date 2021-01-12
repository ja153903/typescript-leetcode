import { missingNumber } from "../../src/algo-curated/missing-number-in-arithmetic-progression-1228";

describe("Missing Number", () => {
  test.each`
    i    | arr                | result
    ${1} | ${[1, 2, 3, 5, 6]} | ${4}
    ${2} | ${[7, 5, 1, -1]}   | ${3}
    ${3} | ${[15, 13, 12]}    | ${14}
  `("Case #$i", ({ arr, result }) => {
    expect(missingNumber(arr)).toBe(result);
  });
});
