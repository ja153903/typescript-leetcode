import { compress } from "../../src/microsoft/string-compression-443";

describe("443. String Compression", () => {
  test("Case 1", () => {
    const chars = ["a", "a", "b", "b", "c", "c", "c"];
    expect(compress(chars)).toBe(6);
  });

  test("Case 2", () => {
    const chars = ["a"];
    expect(compress(chars)).toBe(1);
  });

  test("Case 3", () => {
    const chars = [
      "a",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
    ];
    expect(compress(chars)).toBe(4);
  });

  test("Case 4", () => {
    const chars = ["a", "a", "a", "b", "b", "a", "a"];
    expect(compress(chars)).toBe(6);
  });
});
