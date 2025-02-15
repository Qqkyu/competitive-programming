function reorderList(head) {
  let middleElem = head,
    fp = head.next?.next;
  while (fp) {
    middleElem = middleElem.next;
    fp = fp.next?.next;
  }

  const tmp = middleElem.next;
  middleElem.next = null;

  let curr = tmp,
    prev = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  while (head && prev) {
    const tmpHeadSuc = head.next;
    const tmpPrevSuc = prev.next;
    head.next = prev;
    prev.next = tmpHeadSuc;
    head = prev.next;
    prev = tmpPrevSuc;
  }
}
