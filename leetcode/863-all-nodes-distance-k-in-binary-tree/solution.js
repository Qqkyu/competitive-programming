/**
 * Definition for a bnary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
function distanceK(root, target, k) {
  if (k === 0) {
    return [target.val];
  }

  const result = [];

  function recurse(node, distance = undefined) {
    if (node == null) {
      return undefined;
    }

    if (distance === k) {
      result.push(node.val);
      return undefined;
    }

    if (target == node) {
      recurse(node.left, 1);
      recurse(node.right, 1);
      return 1;
    }

    const leftSubtreeDistance = recurse(node.left, distance == null ? undefined : distance + 1);
    if (leftSubtreeDistance != null) {
      if (leftSubtreeDistance === k) {
        result.push(node.val);
      } else {
        recurse(node.right, leftSubtreeDistance + 1);
        return leftSubtreeDistance + 1;
      }
    } else {
      const rightSubtreeDistance = recurse(node.right, distance == null ? undefined : distance + 1);
      if (rightSubtreeDistance != null) {
        if (rightSubtreeDistance === k) {
          result.push(node.val);
        } else {
          recurse(node.left, rightSubtreeDistance + 1);
          return rightSubtreeDistance + 1;
        }
      }
    }

    return undefined;
  }

  recurse(root);
  return result;
}
