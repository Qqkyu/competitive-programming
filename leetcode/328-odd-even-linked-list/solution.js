function oddEvenList(head) {
  if (head == null) {
    return head;
  }

  const evenListHead = head.next;

  let oddPtr = head,
    evenPtr = evenListHead;
  while (evenPtr != null) {
    const tmp = evenPtr.next;
    evenPtr.next = tmp?.next ?? null;
    oddPtr.next = tmp;

    if (tmp) {
      oddPtr = oddPtr.next;
      evenPtr = oddPtr.next;
    } else {
      break;
    }
  }

  oddPtr.next = evenListHead;

  return head;
}
