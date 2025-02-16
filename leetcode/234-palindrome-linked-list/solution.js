/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let middleElem = head,
    fp = head.next?.next;
  while (fp) {
    middleElem = middleElem.next;
    fp = fp.next?.next;
  }

  let prev = null,
    cur = middleElem.next;
  while (cur) {
    const tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }

  middleElem = prev;
  while (middleElem) {
    if (middleElem.val != head.val) {
      return false;
    }
    middleElem = middleElem.next;
    head = head.next;
  }

  return true;
}
