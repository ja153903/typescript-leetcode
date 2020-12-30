import { arrayToListNode } from "../utils/listnode-utils";
import { isPalindrome } from "../../src/microsoft/palindrome-linked-list-234";

describe("234. Palindrome Linked List", () => {
  test("Case 1", () => {
    const numbers = [1, 2, 1];
    const head = arrayToListNode(numbers);

    expect(isPalindrome(head)).toBeTruthy();
  });
});
