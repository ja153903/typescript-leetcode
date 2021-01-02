import { RandomizedSet } from "../../src/microsoft/insert-delete-getrandom-380";

describe("380. Insert Delete GetRandom O(1)", () => {
  test("Case  1", () => {
    const s1 = new RandomizedSet();
    expect(s1.insert(1)).toBeTruthy();
    expect(s1.remove(2)).toBeFalsy();
    expect(s1.insert(2)).toBeTruthy();
  });
});
