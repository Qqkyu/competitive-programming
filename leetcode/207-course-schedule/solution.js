function hasCycle(vertex, adjacencyList, visited, recStack) {
  visited[vertex] = true;
  recStack[vertex] = true;

  for (let neighbor of adjacencyList[vertex]) {
    if (
      recStack[neighbor] ||
      (!visited[neighbor] &&
        hasCycle(neighbor, adjacencyList, visited, recStack))
    ) {
      return true;
    }
  }

  recStack[vertex] = false;
  return false;
}

function canFinish(numCourses, prerequisites) {
  const adjacencyList = prerequisites.reduce(
    (adjacencyList, [source, destination]) => {
      adjacencyList[source].push(destination);
      return adjacencyList;
    },
    Array.from({ length: numCourses }, () => []),
  );

  const visited = new Array(numCourses).fill(false);
  const recStack = new Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; ++i) {
    if (!visited[i] && hasCycle(i, adjacencyList, visited, recStack)) {
      return false;
    }
  }

  return true;
}
