/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (right - left === 0) {
    return head;
  }

  let lastNotReversedNode = left === 1 ? null : head;
  for (let i = 1; i < left - 1; ++i) {
    lastNotReversedNode = lastNotReversedNode.next;
  }

  const reversedSectionEnd = lastNotReversedNode?.next ?? head;

  let lastReverseNode = reversedSectionEnd;
  let curNode = reversedSectionEnd.next;
  for (let i = left; i < right; ++i) {
    const nextNode = curNode.next;
    curNode.next = lastReverseNode;
    lastReverseNode = curNode;
    curNode = nextNode;
  }

  if (lastNotReversedNode) {
    lastNotReversedNode.next = lastReverseNode;
  }
  reversedSectionEnd.next = curNode;

  return left === 1 ? lastReverseNode : head;
};
