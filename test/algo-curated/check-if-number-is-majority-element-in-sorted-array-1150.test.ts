import { isMajorityElement } from "../../src/algo-curated/check-if-number-is-majority-element-in-sorted-array-1150";

describe("Check if number is", () => {
  test.each`
    i    | nums                           | target | result
    ${1} | ${[2, 4, 5, 5, 5, 5, 5, 6, 6]} | ${5}   | ${true}
    ${2} | ${[10, 100, 101, 101]}         | ${101} | ${false}
  `("Case #$i", ({ nums, target, result }) => {
    expect(isMajorityElement(nums, target)).toBe(result);
  });
});
