function swapPairs(head) {
  if (head?.next == null) {
    return head;
  }

  const newHead = head.next;
  head.next = newHead.next;
  newHead.next = head;

  for (let p = head; p.next?.next != null; p = p.next.next) {
    const tmp = p.next.next;
    p.next.next = tmp.next;
    tmp.next = p.next;
    p.next = tmp;
  }

  return newHead;
}
