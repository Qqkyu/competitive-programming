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
var sumNumbers = function (root) {
  let total = 0;

  function getPathSum(node, sum) {
    sum = sum * 10 + node.val;

    if (node.left == null && node.right == null) {
      total += sum;
      return;
    }

    node.left && getPathSum(node.left, sum);
    node.right && getPathSum(node.right, sum);
  }

  getPathSum(root, 0);
  return total;
};
