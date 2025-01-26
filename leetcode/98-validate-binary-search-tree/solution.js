function isValidBSTRecurse(root, min, max) {
  if (root == null) {
    return true;
  }

  if (root.val < min || root.val > max) {
    return false;
  }

  return (
    isValidBSTRecurse(root.left, min, root.val - 1) &&
    isValidBSTRecurse(root.right, root.val + 1, max)
  );
}

function isValidBST(root) {
  return isValidBSTRecurse(root, -Infinity, Infinity);
}
