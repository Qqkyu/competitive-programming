/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
function pathSum(root, targetSum) {
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1);

  function searchPaths(node, currentSum) {
    if (node == null) {
      return 0;
    }

    currentSum += node.val;
    let count = prefixSumCount.get(currentSum - targetSum) ?? 0;

    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) ?? 0) + 1);

    count += searchPaths(node.left, currentSum);
    count += searchPaths(node.right, currentSum);

    prefixSumCount.set(currentSum, prefixSumCount.get(currentSum) - 1);
    return count;
  }

  return searchPaths(root, 0);
}
