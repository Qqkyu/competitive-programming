/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const edges = Array.from({ length: numCourses }, () => []);
  const indegrees = new Array(numCourses).fill(0);

  prerequisites.forEach(([course, prerequisite]) => {
    indegrees[course]++;
    edges[prerequisite].push(course);
  });

  const queue = [];

  indegrees.forEach((indegree, node) => {
    if (indegree === 0) {
      queue.push(node);
    }
  });

  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    edges[node].forEach((neighbor) => {
      indegrees[neighbor]--;
      if (indegrees[neighbor] === 0) {
        queue.push(neighbor);
      }
    });
  }

  return result.length === numCourses ? result : [];
}
