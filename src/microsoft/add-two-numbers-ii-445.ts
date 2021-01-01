import ListNode from "../data-structures/linked-list";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  }

  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  const l1Nodes: number[] = [];
  const l2Nodes: number[] = [];

  while (l1 !== null) {
    l1Nodes.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    l2Nodes.push(l2.val);
    l2 = l2.next;
  }

  l1Nodes.reverse();
  l2Nodes.reverse();

  const result: number[] = [];

  let i = 0;
  let j = 0;
  let carry = 0;

  while (i < l1Nodes.length || j < l2Nodes.length) {
    let currentValue = carry;

    if (i < l1Nodes.length) {
      currentValue += l1Nodes[i];
      i++;
    }

    if (j < l2Nodes.length) {
      currentValue += l2Nodes[j];
      j++;
    }

    result.push(currentValue % 10);
    carry = Math.floor(currentValue / 10);
  }

  if (carry > 0) {
    result.push(carry);
  }

  result.reverse();

  const head = new ListNode(0);
  let runner = head;

  result.forEach((value) => {
    runner.next = new ListNode(value);
    runner = runner.next;
  });

  return head.next;
}

export { addTwoNumbers };
