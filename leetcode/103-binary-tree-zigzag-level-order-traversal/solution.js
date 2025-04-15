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
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  if (root == null) {
    return [];
  }

  const result = [];
  const nodes = [root];

  let traverseLeftToRight = true;

  while (nodes.length > 0) {
    const levelNodesLength = nodes.length;
    const levelNodes = [];

    if (traverseLeftToRight) {
      for (let i = levelNodesLength; i > 0; --i) {
        const node = nodes.shift();
        levelNodes.push(node.val);
        node.left && nodes.push(node.left);
        node.right && nodes.push(node.right);
      }
    } else {
      for (let i = levelNodesLength; i > 0; --i) {
        const node = nodes.pop();
        levelNodes.push(node.val);
        node.right && nodes.unshift(node.right);
        node.left && nodes.unshift(node.left);
      }
    }

    result.push(levelNodes);
    traverseLeftToRight = !traverseLeftToRight;
  }

  return result;
}
