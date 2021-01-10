import { highFive } from "../../src/algo-curated/high-five-1086";

describe("High Five", () => {
  test.each`
    i    | items                                                                                                    | result
    ${1} | ${[[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]} | ${[[1, 87], [2, 88]]}
  `("Case #$i", ({ items, result }) => {
    expect(highFive(items)).toEqual(result);
  });
});
