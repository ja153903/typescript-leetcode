import TreeNode from "../data-structures/tree-node";

function closestValue(root: TreeNode | null, target: number): number {
  // if root > target, keep track of min and go left
  // if the root <= target, keep track of min then go right
  if (root === null) {
    return -1;
  }

  const [closest, _] = closestValueHelper(root, target, [
    Number.MAX_VALUE,
    Number.MAX_VALUE,
  ]);

  return closest;
}

function closestValueHelper(
  root: TreeNode | null,
  target: number,
  minPair: number[]
): number[] {
  if (root === null) {
    return minPair;
  }

  const [closest, min] = minPair;

  const currentMin = Math.abs(root.val - target);

  const currentMinPair = currentMin < min ? [root.val, currentMin] : minPair;

  if (root.val <= target) {
    return closestValueHelper(root.right, target, currentMinPair);
  }

  return closestValueHelper(root.left, target, currentMinPair);
}

export { closestValue };
