function rightSideView(root) {
  if (root == null) {
    return [];
  }

  let result = [];

  let nodes = [root];
  while (nodes.length > 0) {
    result.push(nodes.at(-1).val);
    nodes = nodes.flatMap((node) => [node.left, node.right]).filter(Boolean);
  }

  return result;
}
