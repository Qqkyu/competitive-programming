/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
  const nodesNeighbors = edges.reduce(
    (nodesNeighbors, edge) => {
      nodesNeighbors[edge[0]].add(edge[1]);
      nodesNeighbors[edge[1]].add(edge[0]);
      return nodesNeighbors;
    },
    Array.from(new Array(n), () => new Set()),
  );

  function explore(node) {
    if (nodesNeighbors[node].size === 0) {
      return;
    }

    nodesNeighbors[node].forEach((neighborNode) => {
      nodesNeighbors[node].delete(neighborNode);
      nodesNeighbors[neighborNode].delete(node);
      explore(neighborNode);
    });
  }

  let connectedComponents = nodesNeighbors.reduce(
    (nodesWithoutEdges, nodeNeighbors) => (nodeNeighbors.size > 0 ? nodesWithoutEdges : nodesWithoutEdges + 1),
    0,
  );

  for (let i = 0; i < n; ++i) {
    if (nodesNeighbors[i].size) {
      explore(i);
      ++connectedComponents;
    }
  }

  return connectedComponents;
}
