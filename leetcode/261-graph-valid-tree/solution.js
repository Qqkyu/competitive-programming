/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
function validTree(n, edges) {
  const vertexEdges = Array.from(new Array(n), () => []);
  edges.forEach(([src, dest]) => {
    vertexEdges[src].push(dest);
    vertexEdges[dest].push(src);
  });

  const visited = new Set();

  function hasCycles(node, parent) {
    if (visited.has(node)) {
      return true;
    }

    visited.add(node);
    for (let i = 0; i < vertexEdges[node].length; ++i) {
      const neighbor = vertexEdges[node][i];
      if (neighbor !== parent && hasCycles(neighbor, node)) {
        return true;
      }
    }

    return false;
  }

  return !hasCycles(0, undefined) && visited.size === n;
}
