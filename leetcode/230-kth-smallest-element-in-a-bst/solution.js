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
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  let n = 0;
  let ans = null;

  function inorder(root) {
    if (root == null || ans !== null) {
      return;
    }
    inorder(root.left);
    if (++n === k) {
      ans = root.val;
    }
    inorder(root.right);
  }

  inorder(root);
  return ans;
}
