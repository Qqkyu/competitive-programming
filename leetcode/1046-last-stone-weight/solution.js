/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  const heap = [];
  stones.forEach((stone) => {
    heap.push(stone);
    heapifyUp(heap);
  });

  while (heap.length > 1) {
    const y = deleteMax(heap);
    const x = deleteMax(heap);

    if (x !== y) {
      heap.push(y - x);
      heapifyUp(heap);
    }
  }

  return heap.length ? heap[0] : 0;
}

function deleteMax(heap) {
  const max = heap[0];
  if (heap.length > 1) {
    heap[0] = heap.pop();
    heapifyDown(heap);
  } else {
    heap[0] = heap.shift();
  }
  return max;
}

function heapifyDown(heap) {
  let nodeIdx = 0;
  while (nodeIdx * 2 + 1 < heap.length) {
    const leftChildIdx = nodeIdx * 2 + 1,
      rightChildIdx = nodeIdx * 2 + 2;
    const biggerChildIdx = rightChildIdx === heap.length || heap[leftChildIdx] > heap[rightChildIdx] ? leftChildIdx : rightChildIdx;

    if (heap[biggerChildIdx] <= heap[nodeIdx]) {
      break;
    }

    swap(heap, nodeIdx, biggerChildIdx);
    nodeIdx = biggerChildIdx;
  }
}

function heapifyUp(heap) {
  let nodeIdx = heap.length - 1;
  while (nodeIdx > 0) {
    const parentIdx = Math.ceil(nodeIdx / 2) - 1;

    if (heap[parentIdx] >= heap[nodeIdx]) {
      break;
    }

    swap(heap, nodeIdx, parentIdx);
    nodeIdx = parentIdx;
  }
}

function swap(array, idx1, idx2) {
  const tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}
