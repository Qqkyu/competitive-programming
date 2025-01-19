// Function returns maximum depth of a subtree if it's height-balanced, -1 otherwise
function getMaximumDepth(root) {
  if (root.left && root.right) {
    const leftSubtreeDepth = getMaximumDepth(root.left);
    const rightSubtreeDepth = getMaximumDepth(root.right);

    if (
      leftSubtreeDepth === -1 ||
      rightSubtreeDepth === -1 ||
      Math.abs(leftSubtreeDepth - rightSubtreeDepth) > 1
    ) {
      return -1;
    }

    return Math.max(leftSubtreeDepth, rightSubtreeDepth) + 1;
  } else if (root.left) {
    return root.left.left || root.left.right ? -1 : 1;
  } else if (root.right) {
    return root.right.left || root.right.right ? -1 : 1;
  } else {
    return 0;
  }
}

function isBalanced(root) {
  const result = root ? getMaximumDepth(root) : true;
  return result !== -1;
}
