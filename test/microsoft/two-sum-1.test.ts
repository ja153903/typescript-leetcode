import { twoSum } from "../../src/microsoft/two-sum-1";

describe("1. Two Sum", () => {
  test("Case 1", () => {
    const nums: number[] = [2, 7, 11, 12];
    const target: number = 9;

    const expected: number[] = [0, 1];

    expect(twoSum(nums, target)).toEqual(expected);
  });
});
