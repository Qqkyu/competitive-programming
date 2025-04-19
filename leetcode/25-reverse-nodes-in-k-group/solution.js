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
function reverseKGroup(head, k) {
  if (k === 1) {
    return head;
  }

  let resultHead = null;

  let prevGroupTail = null;
  let sp = head,
    fp = head;
  while (true) {
    for (let i = 1; i < k && fp; ++i) {
      fp = fp?.next;
    }

    if (fp == null) {
      break;
    }

    if (resultHead == null) {
      resultHead = fp;
    }

    const groupHead = sp;
    const nextGroupNode = fp.next;

    let node = sp.next;
    while (node != nextGroupNode) {
      const tmp = node.next;
      node.next = sp;
      sp = node;
      node = tmp;
    }

    if (prevGroupTail) {
      prevGroupTail.next = node;
    }

    prevGroupTail = groupHead;
    groupHead.next = nextGroupNode;

    sp = nextGroupNode;
    fp = nextGroupNode;
  }

  return resultHead;
}
