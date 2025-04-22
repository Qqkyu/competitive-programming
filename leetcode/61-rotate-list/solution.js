/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
  let listLen = 0,
    tail = null;
  for (let ptr = head; ptr != null; ptr = ptr.next) {
    ++listLen;
    if (ptr.next == null) {
      tail = ptr;
    }
  }

  const rotations = k % listLen;

  if (listLen === 0 || rotations === 0) {
    return head;
  }

  let newTail = head;
  for (let i = 0; i < listLen - rotations - 1; ++i) {
    newTail = newTail.next;
  }

  tail.next = head;

  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}
