import ListNode from "../data-structures/linked-list";

function deleteNodes(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  if (head === null) {
    return null;
  }

  const values: number[] = [];

  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  let buckets: number[][] = [];
  let bucket: number[] = [];

  for (let i = 0; i < values.length; i += m + n) {
    for (let j = i; j < i + m + n && j < values.length; j++) {
      bucket.push(values[j]);
    }

    buckets.push([...bucket]);
    bucket = [];
  }

  buckets = buckets.map((bucket: number[]) =>
    bucket.filter((_, index) => index < m)
  );

  const flattenedBucket: ListNode[] = buckets
    .reduce((prev, bucket) => [...prev, ...bucket], [])
    .map((node) => new ListNode(node));

  for (let i = 1; i < flattenedBucket.length; i++) {
    flattenedBucket[i - 1].next = flattenedBucket[i];
  }

  return flattenedBucket[0];
}

export { deleteNodes };
