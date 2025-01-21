function maxDepth(root) {
  if (root == null) {
    return 0;
  }

  const leftSubtreeMaxDepth = root.left ? maxDepth(root.left) : 0;
  const rightSubtreeMaxDepth = root.right ? maxDepth(root.right) : 0;

  return Math.max(leftSubtreeMaxDepth, rightSubtreeMaxDepth) + 1;
}
