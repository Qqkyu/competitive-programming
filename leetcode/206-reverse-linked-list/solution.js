function reverseList(head) {
  let prev = null;

  while (head) {
    const tmp = head.next;
    head.next = prev;
    prev = head;
    head = tmp;
  }

  return prev;
}
