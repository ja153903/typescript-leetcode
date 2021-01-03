import Node from "../data-structures/node";

function connect(root: Node | null): Node | null {
  // For this problem, we want to do a level order traversal
  // then once we have all the levels, we want to make sure
  // that each node is pointing the proper next node within that level
  if (root === null) {
    return null;
  }

  const queue: Node[] = [];
  const result: Node[][] = [];

  queue.push(root);

  while (queue.length > 0) {
    const n = queue.length;
    const level: Node[] = [];

    for (let i = 0; i < n; i++) {
      const front = queue.shift() ?? null;

      if (front === null) {
        break;
      }

      level.push(front);

      if (front.left !== null) {
        queue.push(front.left);
      }

      if (front.right !== null) {
        queue.push(front.right);
      }
    }

    result.push(level);
  }

  for (const level of result) {
    for (let i = 1; i < level.length; i++) {
      level[i - 1].next = level[i];
    }
  }

  return root;
}

export { connect };
