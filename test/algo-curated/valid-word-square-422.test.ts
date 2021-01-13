import { validWordSquare } from "../../src/algo-curated/valid-word-square-422";

describe("Valid Word Square", () => {
  test.each`
    i    | words                               | result
    ${1} | ${["abcd", "bnrt", "crmy", "dtye"]} | ${true}
    ${2} | ${["abcd", "bnrt", "crm", "dt"]}    | ${true}
    ${3} | ${["ball", "area", "read", "lady"]} | ${false}
  `("Case #$i", ({ words, result }) => {
    expect(validWordSquare(words)).toBe(result);
  });
});
