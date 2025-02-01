function cloneGraph(node) {
  if (node == null) {
    return node;
  }

  const nodesMap = new Map([[node.val, new _Node(node.val, [])]]);

  let nodesToExplore = [node];
  while (nodesToExplore.length > 0) {
    const curNode = nodesToExplore.pop();

    curNode.neighbors.forEach((neighborNode) => {
      if (!nodesMap.has(neighborNode.val)) {
        nodesMap.set(neighborNode.val, new _Node(neighborNode.val, []));
        nodesToExplore.push(neighborNode);
      }
      nodesMap.get(curNode.val).neighbors.push(nodesMap.get(neighborNode.val));
    });
  }

  return nodesMap.get(node.val);
}
