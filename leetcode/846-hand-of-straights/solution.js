/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
function isNStraightHand(hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const heap = new MinHeap();
  hand.forEach((card) => {
    heap.add(card);
  });

  while (heap.length) {
    const num = heap.poll();

    for (let i = 1; i < groupSize; ++i) {
      if (heap.remove(num + i) == null) {
        return false;
      }
    }
  }

  return true;
}

class MinHeap {
  heap = [];

  add(num) {
    this.heap.push(num);

    let nodeIdx = this.heap.length - 1;
    while (nodeIdx > 0) {
      const parentIdx = Math.ceil(nodeIdx / 2) - 1;

      if (this.heap[parentIdx] <= this.heap[nodeIdx]) {
        break;
      }

      swap(this.heap, nodeIdx, parentIdx);
      nodeIdx = parentIdx;
    }
  }

  remove(num) {
    let nodeIdx = this.heap.indexOf(num);

    if (nodeIdx === -1) {
      return undefined;
    }

    if (nodeIdx === this.heap.length - 1) {
      this.heap.pop();
      return num;
    }

    this.heap[nodeIdx] = this.heap.pop();

    while (nodeIdx * 2 + 1 < this.heap.length) {
      const leftNodeIdx = nodeIdx * 2 + 1,
        rightNodeIdx = nodeIdx * 2 + 2;
      const smallerChildIdx =
        rightNodeIdx === this.heap.length || this.heap[leftNodeIdx] < this.heap[rightNodeIdx] ? leftNodeIdx : rightNodeIdx;

      if (this.heap[nodeIdx] < this.heap[smallerChildIdx]) {
        break;
      }

      swap(this.heap, nodeIdx, smallerChildIdx);
      nodeIdx = smallerChildIdx;
    }

    return num;
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minElement = this.heap[0];
    this.heap[0] = this.heap.pop();

    let nodeIdx = 0;
    while (nodeIdx * 2 + 1 < this.heap.length) {
      const leftNodeIdx = nodeIdx * 2 + 1,
        rightNodeIdx = nodeIdx * 2 + 2;
      const smallerChildIdx =
        rightNodeIdx === this.heap.length || this.heap[leftNodeIdx] < this.heap[rightNodeIdx] ? leftNodeIdx : rightNodeIdx;

      if (this.heap[nodeIdx] < this.heap[smallerChildIdx]) {
        break;
      }

      swap(this.heap, nodeIdx, smallerChildIdx);
      nodeIdx = smallerChildIdx;
    }

    return minElement;
  }

  get length() {
    return this.heap.length;
  }
}

function swap(arr, idx1, idx2) {
  const tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}
