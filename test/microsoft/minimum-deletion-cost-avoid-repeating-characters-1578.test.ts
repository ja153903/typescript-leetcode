import { minCost } from "../../src/microsoft/minimum-deletion-cost-avoid-repeating-characters-1578";

describe("1578. Minimum Deletion Cost to Avoid Repeating Characters", () => {
  test("Case 1", () => {
    const s = "abaac";
    const cost = [1, 2, 3, 4, 5];

    expect(minCost(s, cost)).toBe(3);
  });

  test("Case 2", () => {
    const s = "aaaaa";
    const cost = [6, 5, 4, 3, 2];

    expect(minCost(s, cost)).toBe(14);
  });

  test("Case 3", () => {
    const s = "bbbaaa";
    const cost = [4, 9, 3, 8, 8, 9];

    expect(minCost(s, cost)).toBe(23);
  });
});
