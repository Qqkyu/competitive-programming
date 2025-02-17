/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  if (root == null || root === p || root === q) {
    return root;
  }

  const leftSubtreeResult = lowestCommonAncestor(root.left, p, q);
  const rightSubtreeResult = lowestCommonAncestor(root.right, p, q);

  if (leftSubtreeResult && rightSubtreeResult) {
    return root;
  } else if (leftSubtreeResult) {
    return leftSubtreeResult;
  } else if (rightSubtreeResult) {
    return rightSubtreeResult;
  } else {
    return null;
  }
}
