/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  while (lists.length > 1) {
    const tmp = [];
    for (let i = 0; i < lists.length; i += 2) {
      tmp.push(mergeTwoLists(lists[i], i + 1 < lists.length ? lists[i + 1] : null));
    }
    lists = tmp;
  }

  return lists[0] ?? null;
}

function mergeTwoLists(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
