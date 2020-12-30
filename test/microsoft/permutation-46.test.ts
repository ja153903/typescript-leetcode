import { permute } from "../../src/microsoft/permutations-46";

describe("46. Permutations", () => {
  test("Case 1", () => {
    const nums: number[] = [1, 2, 3];
    const expected: number[][] = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];

    expect(permute(nums)).toEqual(expected);
  });
});
