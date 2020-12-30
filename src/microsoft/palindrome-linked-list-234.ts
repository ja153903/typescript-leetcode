import ListNode from "../data-structures/linked-list";

function isPalindrome(head: ListNode | null): boolean {
  // store the elements of the list in an array
  const numbers: number[] = [];

  while (head !== null) {
    numbers.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = numbers.length - 1; i <= j; i++, j--) {
    if (numbers[i] !== numbers[j]) {
      return false;
    }
  }

  return true;
}

export { isPalindrome };
