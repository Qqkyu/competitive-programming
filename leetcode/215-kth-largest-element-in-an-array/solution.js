/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const heap = [];

  for (let i = 0; i < k; ++i) {
    heap.push(nums[i]);
    heapifyUp(heap);
  }

  for (let i = k; i < nums.length; ++i) {
    const num = nums[i];

    if (num > heap[0]) {
      heap[0] = num;
      heapifyDown(heap);
    }
  }

  return heap[0];
}

function heapifyUp(heap) {
  let idx = heap.length - 1;

  while (idx > 0) {
    const parentIdx = Math.ceil(idx / 2) - 1;

    if (heap[parentIdx] < heap[idx]) {
      break;
    }

    swap(heap, parentIdx, idx);
    idx = parentIdx;
  }
}

function heapifyDown(heap) {
  let idx = 0;

  while (idx * 2 + 1 < heap.length) {
    const leftChildIdx = idx * 2 + 1,
      rightChildIdx = idx * 2 + 2;
    const smallerChildIdx = rightChildIdx === heap.length || heap[leftChildIdx] <= heap[rightChildIdx] ? leftChildIdx : rightChildIdx;

    if (heap[smallerChildIdx] < heap[idx]) {
      swap(heap, smallerChildIdx, idx);
      idx = smallerChildIdx;
    } else {
      break;
    }
  }
}

function swap(array, idx1, idx2) {
  const tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}
