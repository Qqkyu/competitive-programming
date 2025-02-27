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
 * @return {number}
 */
function goodNodes(root) {
  return 1 + countGoodNodes(root.left, root.val) + countGoodNodes(root.right, root.val);
}

function countGoodNodes(root, curMax) {
  if (root == null) {
    return 0;
  }
  const newMax = Math.max(root.val, curMax);
  return (root.val >= curMax ? 1 : 0) + countGoodNodes(root.left, newMax) + countGoodNodes(root.right, newMax);
}
