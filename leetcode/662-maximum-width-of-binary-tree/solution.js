function widthOfBinaryTree(root) {
  let curMaxWidth = 1;
  let levelNodes = [{ node: root, pos: 0 }];

  while (levelNodes.length) {
    const levelLength = levelNodes.length;
    const leftmostNode = levelNodes[0].pos;
    const rightmostNode = levelNodes.at(-1).pos;

    curMaxWidth = Math.max(curMaxWidth, rightmostNode - leftmostNode + 1);

    for (let i = 0; i < levelLength; ++i) {
      const { node, pos } = levelNodes.shift();
      if (node.left) {
        levelNodes.push({ node: node.left, pos: 2 * (pos - leftmostNode) });
      }
      if (node.right) {
        levelNodes.push({
          node: node.right,
          pos: 2 * (pos - leftmostNode) + 1,
        });
      }
    }
  }

  return curMaxWidth;
}
