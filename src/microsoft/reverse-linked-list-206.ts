import ListNode from "../data-structures/linked-list";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    let next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

export { reverseList };
