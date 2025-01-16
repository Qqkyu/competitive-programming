function hasPathSum(node, targetSum) {
  if (node == undefined) {
    return false;
  }

  if (
    node.val === targetSum &&
    node.left == undefined &&
    node.right == undefined
  ) {
    return true;
  }

  return (
    hasPathSum(node.left, targetSum - node.val) ||
    hasPathSum(node.right, targetSum - node.val)
  );
}
