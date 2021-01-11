import { fixedPoint } from "../../src/algo-curated/fixed-point-1064";

describe("1064. Fixed Point", () => {
  test.each`
    i    | nums                  | result
    ${1} | ${[-10, -5, 0, 3, 7]} | ${3}
  `("Case #$i", ({ nums, result }) => {
    expect(fixedPoint(nums)).toBe(result);
  });
});
