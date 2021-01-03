import { searchMatrix } from "../../src/microsoft/search-a-2d-matrix-ii-240";

describe("240. Search a 2D Matrix II", () => {
  test("Case 1", () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ];
    const target = 5;

    expect(searchMatrix(matrix, target)).toBeTruthy();
  });

  test("Case 2", () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ];
    const target = 20;

    expect(searchMatrix(matrix, target)).toBeFalsy();
  });
});
