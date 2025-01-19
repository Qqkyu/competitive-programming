function findCycle(slowPointer, fastPointer) {
  if (fastPointer === slowPointer || fastPointer.next === slowPointer) {
    return true;
  }

  slowPointer = slowPointer.next;
  fastPointer = fastPointer.next?.next;

  return slowPointer && fastPointer
    ? findCycle(slowPointer, fastPointer)
    : false;
}

function hasCycle(head) {
  let fp = head?.next;
  return head?.next ? findCycle(head, head.next) : false;
}
