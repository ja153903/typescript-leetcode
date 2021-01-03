import Node from "../data-structures/random-node";

function copyRandomList(head: Node | null): Node | null {
  // keep the copy of the nodes in a hashmap
  const copies: Map<Node | null, Node | null> = new Map();

  let current: Node | null = head;

  while (current !== null) {
    copies.set(current, new Node(current.val));
    current = current.next;
  }

  // once we have the copies we should iterate over it again
  current = head;

  while (current !== null) {
    const currentNode = copies.get(current) ?? null;
    if (currentNode === null) {
      break;
    }

    currentNode.next = copies.get(current.next) ?? null;
    currentNode.random = copies.get(current.random) ?? null;
    current = current.next;
  }

  return copies.get(head) ?? null;
}

export { copyRandomList };
