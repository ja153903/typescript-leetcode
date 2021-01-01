import { addTwoNumbers } from "../../src/microsoft/add-two-numbers-ii-445";
import { arrayToListNode, listNodeToArray } from "../utils/listnode-utils";

describe("445. Add Two Numbers II", () => {
  test("Case 1", () => {
    const l1 = arrayToListNode([1, 2, 3]);
    const l2 = arrayToListNode([1, 2, 3]);

    const result = addTwoNumbers(l1, l2);

    const resultArr = listNodeToArray(result);

    expect(resultArr).toEqual([2, 4, 6]);
  });
});
