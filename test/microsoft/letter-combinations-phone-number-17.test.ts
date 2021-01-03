import { letterCombinations } from "../../src/microsoft/letter-combinations-phone-number-17";

describe("17. Letter Combinations", () => {
  test("Case 1", () => {
    const input: string = "23";
    const expected: string[] = [
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ];

    expect(letterCombinations(input)).toEqual(expected);
  });
});
