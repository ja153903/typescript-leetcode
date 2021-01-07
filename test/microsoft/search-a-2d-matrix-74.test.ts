import { searchMatrix } from "../../src/microsoft/search-a-2d-matrix-74";

describe("74. Search a 2D Matrix", () => {
  test.each`
    i    | matrix                                                | target | result
    ${1} | ${[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 24, 60]]} | ${3}   | ${true}
  `("Case #$i", ({ matrix, target, result }) => {
    expect(searchMatrix(matrix, target)).toBe(result);
  });
});
