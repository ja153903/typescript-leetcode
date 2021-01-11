import { stringShift } from "../../src/algo-curated/perform-string-shifts-1427";

describe("Perform String Shifts", () => {
  test.each`
    i    | s               | shift                                                                               | result
    ${1} | ${"abc"}        | ${[[0, 1], [1, 2]]}                                                                 | ${"cab"}
    ${2} | ${"xqgwkiqpif"} | ${[[1, 4], [0, 7], [0, 8], [0, 7], [0, 6], [1, 3], [0, 1], [1, 7], [0, 5], [0, 6]]} | ${"qpifxqgwki"}
  `("Case #$i", ({ s, shift, result }) => {
    expect(stringShift(s, shift)).toBe(result);
  });
});
