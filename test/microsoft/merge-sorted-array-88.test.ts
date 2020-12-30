import { merge } from "../../src/microsoft/merge-sorted-array-88";

describe("88. Merge Sorted Array", () => {
  test("Case 1", () => {
    let nums1: number[] = [1, 2, 3, 0, 0, 0];
    let m = 3;
    let nums2: number[] = [2, 5, 6];
    let n = 3;

    let expected: number[] = [1, 2, 2, 3, 5, 6];

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual(expected);
  });
});
