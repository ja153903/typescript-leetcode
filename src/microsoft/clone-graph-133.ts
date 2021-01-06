import Node from "../data-structures/graph-node";

function cloneGraph(node: Node | null): Node | null {
  if (node === null) {
    return null;
  }
  // Similar to the cloning of the linked list
  // for this problem we should store all the nodes in a hashmap
  // and do a bfs twice
  const copies: Map<Node, Node> = new Map();
  const visited: Set<number> = new Set();

  let queue: Node[] = [];
  queue.push(node);
  visited.add(node.val);

  while (queue.length > 0) {
    const front: Node | null = queue.shift() ?? null;

    if (front === null) {
      // This case should not really happen
      break;
    }

    // children should be set on the second iteration
    copies.set(front, new Node(front.val));

    for (const neighbor of front.neighbors) {
      if (!visited.has(neighbor.val)) {
        queue.push(neighbor);
        visited.add(neighbor.val);
      }
    }
  }

  visited.clear();

  queue = [];
  queue.push(node);
  visited.add(node.val);

  while (queue.length > 0) {
    const front: Node | null = queue.shift() ?? null;

    if (front === null) {
      break;
    }

    for (const neighbor of front.neighbors) {
      copies
        .get(front)
        ?.neighbors.push(copies.get(neighbor) ?? new Node(neighbor.val));

      if (!visited.has(neighbor.val)) {
        queue.push(neighbor);
        visited.add(neighbor.val);
      }
    }
  }

  return copies.get(node) ?? null;
}

export { cloneGraph };
