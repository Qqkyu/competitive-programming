function invertTree(root) {
  if (root == null) {
    return root;
  }

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
