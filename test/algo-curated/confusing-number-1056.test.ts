import { confusingNumber } from "../../src/algo-curated/confusing-number-1056";

describe("Confusing Number", () => {
  test.each`
    i    | num   | result
    ${1} | ${6}  | ${true}
    ${2} | ${89} | ${true}
    ${3} | ${11} | ${false}
  `("Case #$i", ({ num, result }) => {
    expect(confusingNumber(num)).toBe(result);
  });
});
