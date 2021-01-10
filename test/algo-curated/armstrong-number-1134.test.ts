import { isArmstrong } from "../../src/algo-curated/armstrong-number-1134";

describe("Armstrong Number", () => {
  test.each`
    i    | N      | result
    ${1} | ${153} | ${true}
    ${2} | ${123} | ${false}
  `("Case #$i", ({ N, result }) => {
    expect(isArmstrong(N)).toBe(result);
  });
});
