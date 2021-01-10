import { arraysIntersection } from "../../src/algo-curated/intersection-of-three-sorted-arrays-1213";

describe("Intersection of three sorted arrays", () => {
  test.each`
    i    | arr1         | arr2      | arr3      | result
    ${1} | ${[1, 2, 3]} | ${[1, 2]} | ${[1, 5]} | ${[1]}
  `("Case #$i", ({ arr1, arr2, arr3, result }) => {
    expect(arraysIntersection(arr1, arr2, arr3)).toEqual(result);
  });
});
