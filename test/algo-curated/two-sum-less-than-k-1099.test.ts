import { twoSumLessThanK } from "../../src/algo-curated/two-sum-less-than-k-1099";

describe("Two Sum Less Than K", () => {
  test.each`
    i    | nums                              | k     | result
    ${1} | ${[34, 23, 1, 24, 75, 33, 54, 8]} | ${60} | ${58}
    ${2} | ${[10, 20, 30]}                   | ${15} | ${-1}
  `("Case #$i", ({ nums, k, result }) => {
    expect(twoSumLessThanK(nums, k)).toBe(result);
  });
});
