import { findDuplicate } from "../../src/microsoft/find-the-duplicate-number-287";

describe("287. Find the Duplicate Number", () => {
  test("Case 1", () => {
    const nums = [1, 3, 4, 2, 2];
    expect(findDuplicate(nums)).toBe(2);
  });
});
