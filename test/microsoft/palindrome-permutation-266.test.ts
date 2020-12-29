import { canPermutePalindrome } from "../../src/microsoft/palindrome-permutation-266";

test("palindrome-permutation-266 case 1", () => {
  expect(canPermutePalindrome("code")).toBeFalsy();
  expect(canPermutePalindrome("aab")).toBeTruthy();
  expect(canPermutePalindrome("carerac")).toBeTruthy();
});
