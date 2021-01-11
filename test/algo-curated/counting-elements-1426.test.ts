import { countElements } from "../../src/algo-curated/counting-elements-1426";

describe("Counting Elements", () => {
  test.each`
    i    | nums                        | result
    ${1} | ${[1, 2, 3]}                | ${2}
    ${2} | ${[1, 1, 3, 3, 5, 5, 7, 7]} | ${0}
    ${3} | ${[1, 3, 2, 3, 5, 0]}       | ${3}
    ${4} | ${[1, 1, 2, 2]}             | ${2}
  `("Case #$i", ({ nums, result }) => {
    expect(countElements(nums)).toBe(result);
  });
});
