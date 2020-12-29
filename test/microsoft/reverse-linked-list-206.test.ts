import ListNode from "../../src/data-structures/linked-list";
import { reverseList } from "../../src/microsoft/reverse-linked-list-206";
import { arrayToListNode, listNodeToArray } from "../utils/listnode-utils";

test("reverse-linked-list-206 case 1", () => {
  const nums: number[] = [1, 2, 3, 4, 5];
  const head: ListNode | null = arrayToListNode(nums);

  const result: ListNode | null = reverseList(head);
  const resultList: number[] = listNodeToArray(result);

  expect(resultList).toEqual(nums.reverse());
});
