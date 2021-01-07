import { searchRange } from "../../src/microsoft/find-first-last-position-sorted-array-34";

describe("34. First Last Pos", () => {
  test.each`
    i    | nums                   | target | result
    ${1} | ${[1, 2, 3, 3, 4]}     | ${3}   | ${[2, 3]}
    ${2} | ${[5, 7, 7, 8, 8, 10]} | ${8}   | ${[3, 4]}
  `("Case #$i", ({ nums, target, result }) => {
    expect(searchRange(nums, target)).toEqual(result);
  });
});
