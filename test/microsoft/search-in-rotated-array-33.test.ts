import { search } from "../../src/microsoft/search-in-rotated-array-33";

describe("Search in Rotated Sorted Array", () => {
  test.each`
    i    | nums                     | target | result
    ${1} | ${[4, 5, 6, 7, 0, 1, 2]} | ${0}   | ${4}
  `("Case #$i", ({ nums, target, result }) => {
    expect(search(nums, target)).toBe(result);
  });
});
