import { maxNumberOfApples } from "../../src/algo-curated/how-many-apples-1196";

describe("How Many Apples", () => {
  test.each`
    i    | arr                                | result
    ${1} | ${[100, 200, 150, 1000]}           | ${4}
    ${2} | ${[900, 950, 800, 1000, 700, 800]} | ${5}
  `("Case #$i", ({ arr, result }) => {
    expect(maxNumberOfApples(arr)).toBe(result);
  });
});
