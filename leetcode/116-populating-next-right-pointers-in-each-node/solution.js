var connect = function (root) {
  if (root?.left == null) {
    return;
  }
  root.left.next = root.right;
  root.right.next = root.next?.left;
  connect(root.left);
  connect(root.right);
  return root;
};
