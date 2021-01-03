import { numIslands } from "../../src/microsoft/number-of-islands-200";

describe("200. Number of Islands", () => {
  test("case 1", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];

    expect(numIslands(grid)).toBe(1);
  });
});
