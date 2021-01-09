import { spiralOrder } from "../../src/microsoft/spiral-matrix-54";

describe("54. Spiral Matrix", () => {
  test.each`
    i    | matrix                                           | result
    ${1} | ${[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}             | ${[1, 2, 3, 6, 9, 8, 7, 4, 5]}
    ${2} | ${[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]} | ${[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]}
  `("Case #$i", ({ matrix, result }) => {
    expect(spiralOrder(matrix)).toEqual(result);
  });
});
