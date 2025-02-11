function pathSum(root, targetSum, depth = 0) {
  if (root?.left == null && root?.right == null) {
    if (root?.val === targetSum) {
      const path = new Array(depth + 1);
      path[depth] = root.val;
      return [path];
    } else {
      return [];
    }
  }

  const subtreePaths = [...pathSum(root.left, targetSum - root.val, depth + 1), ...pathSum(root.right, targetSum - root.val, depth + 1)];
  subtreePaths.forEach((path) => (path[depth] = root.val));
  return subtreePaths;
}
