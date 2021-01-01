import { reorganizeString } from "../../src/microsoft/reorganize-string-767";

describe("767. Reorganize String", () => {
  test("Case 1", () => {
    expect(reorganizeString("aab")).toBe("aba");
  });

  test("Case 2", () => {
    expect(reorganizeString("aaab")).toBe("");
  });

  test("Case 3", () => {
    expect(reorganizeString("vvvlo")).toBe("vovlv");
  });
});
