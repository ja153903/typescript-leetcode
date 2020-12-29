import ListNode from "../../src/data-structures/linked-list";

function arrayToListNode(nums: number[]): ListNode | null {
  if (nums.length === 0) {
    return null;
  }

  const head: ListNode | null = new ListNode(0);
  let current = head;

  nums.forEach((num: number) => {
    current.next = new ListNode(num);
    current = current.next;
  });

  return head.next;
}

function listNodeToArray(node: ListNode | null): number[] {
  if (node === null) {
    return [];
  }

  const nums: number[] = [];

  while (node !== null) {
    nums.push(node.val);
    node = node.next;
  }

  return nums;
}

export { arrayToListNode, listNodeToArray };
