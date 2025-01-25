function traverse(root, result, curLevel) {
  if (root == null) {
    return result;
  }

  if (result[curLevel] == null) {
    result.push([root.val]);
  } else {
    result[curLevel].push(root.val);
  }

  traverse(root.left, result, curLevel + 1);
  traverse(root.right, result, curLevel + 1);

  return result;
}

function levelOrder(root) {
  return traverse(root, [], 0);
}
