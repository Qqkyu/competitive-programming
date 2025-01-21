function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  function walk(root) {
    if (root.left == null && root.right == null) {
      return 0;
    }
    const leftSubtreeHeight = root.left ? walk(root.left) + 1 : 0;
    const rightSubtreeHeight = root.right ? walk(root.right) + 1 : 0;

    maxDiameter = Math.max(maxDiameter, leftSubtreeHeight + rightSubtreeHeight);

    return Math.max(leftSubtreeHeight, rightSubtreeHeight);
  }

  walk(root);

  return maxDiameter;
}
