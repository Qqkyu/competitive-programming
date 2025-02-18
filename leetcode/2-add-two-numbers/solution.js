/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const result = new ListNode();
  let carry = 0;
  for (let ptr = result; l1 || l2 || carry; ptr = ptr.next) {
    const curSum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    if (curSum > 9) {
      ptr.val = curSum - 10;
      carry = 1;
    } else {
      ptr.val = curSum;
      carry = 0;
    }

    l1 = l1?.next;
    l2 = l2?.next;
    ptr.next = l1 || l2 || carry ? new ListNode() : null;
  }
  return result;
}
