function isSymmetricRecurse(p, q) {
  if (p == null || q == null) {
    return p == q;
  }
  return (
    p.val === q.val &&
    isSymmetricRecurse(p.left, q.right) &&
    isSymmetricRecurse(p.right, q.left)
  );
}

function isSymmetric(root) {
  return isSymmetricRecurse(root.left, root.right);
}
