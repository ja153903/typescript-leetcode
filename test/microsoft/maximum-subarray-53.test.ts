import { maxSubArray } from "../../src/microsoft/maximum-subarray-53";

test("Maximum Subarray Case 1", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  expect(maxSubArray([1])).toBe(1);
  expect(maxSubArray([0])).toBe(0);
  expect(maxSubArray([-1])).toBe(-1);
});
