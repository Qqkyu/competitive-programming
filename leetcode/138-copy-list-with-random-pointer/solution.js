/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
function copyRandomList(head) {
  const map = new Map();

  for (let ptr = head; ptr != null; ptr = ptr.next) {
    map.set(ptr, new Node(ptr.val));
  }

  for (let ptr = head; ptr != null; ptr = ptr.next) {
    const node = map.get(ptr);
    node.next = map.get(ptr.next) ?? null;
    node.random = map.get(ptr.random) ?? null;
  }

  return map.get(head);
}
