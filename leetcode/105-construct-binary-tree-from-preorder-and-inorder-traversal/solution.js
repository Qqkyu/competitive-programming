/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  function buildSubtree(preorderIdx, inorderStart, inorderEnd) {
    if (inorderStart >= inorderEnd) {
      return null;
    }

    const subtreeRoot = new TreeNode(preorder[preorderIdx]);

    const inorderSubtreeRootIdx = inorder.indexOf(preorder[preorderIdx], inorderStart);
    subtreeRoot.left = buildSubtree(preorderIdx + 1, inorderStart, inorderSubtreeRootIdx);
    subtreeRoot.right = buildSubtree(preorderIdx + inorderSubtreeRootIdx - inorderStart + 1, inorderSubtreeRootIdx + 1, inorderEnd);

    return subtreeRoot;
  }

  return buildSubtree(0, 0, inorder.length);
}
