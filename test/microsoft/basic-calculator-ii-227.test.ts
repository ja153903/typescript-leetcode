import { calculate } from "../../src/microsoft/basic-calculator-ii-227";

describe("227. Basic Calculator II", () => {
  test.each`
    i    | input           | result
    ${1} | ${"3+2*2"}      | ${7}
    ${2} | ${" 3/2 "}      | ${1}
    ${3} | ${"  3+5 / 2 "} | ${5}
    ${4} | ${"14-3/2"}     | ${13}
  `("Case #$i", ({ input, result }) => {
    expect(calculate(input)).toBe(result);
  });
});
