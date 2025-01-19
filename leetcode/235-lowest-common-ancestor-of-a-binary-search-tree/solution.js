function walk(root, lowerBound, upperBound) {
  console.log({ root: root.val, lowerBound, upperBound });
  if (lowerBound <= root.val && upperBound >= root.val) {
    return root;
  }

  return walk(
    upperBound < root.val ? root.left : root.right,
    lowerBound,
    upperBound,
  );
}

function lowestCommonAncestor(root, p, q) {
  return p.val < q.val ? walk(root, p.val, q.val) : walk(root, q.val, p.pval);
}
