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
function maxPathSum(root) {
  let result = -1001;

  function recurse(root) {
    if (root == null) {
      return 0;
    }

    const leftSubtreeSum = recurse(root.left);
    const rightSubtreeSum = recurse(root.right);

    result = Math.max(result, root.val, leftSubtreeSum + root.val, rightSubtreeSum + root.val, leftSubtreeSum + root.val + rightSubtreeSum);

    return Math.max(leftSubtreeSum + root.val, root.val, root.val + rightSubtreeSum);
  }

  recurse(root);

  return result;
}
