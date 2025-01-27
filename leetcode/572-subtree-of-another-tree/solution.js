function isEqual(root, subRoot) {
  if (root == null || subRoot == null) {
    return root == subRoot;
  }

  return (
    root.val === subRoot.val &&
    isEqual(root.left, subRoot.left) &&
    isEqual(root.right, subRoot.right)
  );
}

function isSubtree(root, subRoot) {
  if (root == null || subRoot == null) {
    return root == subRoot;
  }

  return (
    isEqual(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}
