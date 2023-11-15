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
var rotateRight = function (head, k) {
  if (head == null) {
    return null;
  }

  let listTail = head;
  for (let i = 0; i < k; ++i) {
    if (listTail.next == null) {
      k %= i + 1;
      i = -1;
      listTail = head;
    } else {
      listTail = listTail.next;
    }
  }

  if (k == 0) {
    return head;
  }

  let rotatedListTail = head;
  while (listTail.next != null) {
    listTail = listTail.next;
    rotatedListTail = rotatedListTail.next;
  }

  const newHead = rotatedListTail.next;
  rotatedListTail.next = null;
  listTail.next = head;

  return newHead;
};
