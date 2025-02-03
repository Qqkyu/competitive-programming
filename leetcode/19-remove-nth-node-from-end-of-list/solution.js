function removeNthFromEnd(head, n) {
  let fp = head,
    sp = head;
  for (let i = 0; i < n; ++i) {
    fp = fp.next;
  }

  if (fp == null) {
    return head.next;
  }

  while (fp.next) {
    fp = fp.next;
    sp = sp.next;
  }

  sp.next = sp.next.next;
  return head;
}
