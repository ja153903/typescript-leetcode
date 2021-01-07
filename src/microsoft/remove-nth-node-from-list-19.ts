import ListNode from "../data-structures/node";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null;
  }

  let nums: number[] = [];

  while (head !== null) {
    nums.push(head.val);
    head = head.next;
  }

  // nth from end is nums.length - n
  nums = nums.filter((_, index) => index !== nums.length - n);
  const newHead: ListNode | null = new ListNode(0);
  let runner = newHead;

  for (let i = 0; i < nums.length; i++) {
    runner.next = new ListNode(nums[i]);
    runner = runner.next;
  }

  return newHead.next;
}

export { removeNthFromEnd };
