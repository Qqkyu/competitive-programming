function middleNode(head) {
  for (let fp = head.next; fp != null; fp = fp.next?.next) {
    head = head.next;
  }
  return head;
}
