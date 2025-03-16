/**
 * @param {number} k
 * @param {number[]} nums
 */
function KthLargest(k, nums) {
  this.heap = [];
  this.k = k;

  let curIdx = 0;
  while (curIdx < Math.min(k, nums.length)) {
    this.heap.push(nums[curIdx]);
    heapifyUp(this.heap);
    ++curIdx;
  }

  while (curIdx < nums.length) {
    if (nums[curIdx] > this.heap[0]) {
      this.heap[0] = nums[curIdx];
      heapifyDown(this.heap);
    }
    ++curIdx;
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.heap.length < this.k) {
    this.heap.push(val);
    heapifyUp(this.heap);
  } else if (val > this.heap[0]) {
    this.heap[0] = val;
    heapifyDown(this.heap);
  }
  return this.heap[0];
};

function heapifyUp(heap) {
  let nodeIdx = heap.length - 1;
  while (nodeIdx > 0) {
    const parentNodeIdx = Math.ceil(nodeIdx / 2) - 1;

    if (heap[parentNodeIdx] <= heap[nodeIdx]) {
      break;
    }

    swap(heap, parentNodeIdx, nodeIdx);
    nodeIdx = parentNodeIdx;
  }
}

function heapifyDown(heap) {
  let nodeIdx = 0;
  while (nodeIdx * 2 + 1 < heap.length) {
    const leftChildIdx = nodeIdx * 2 + 1,
      rightChildIdx = nodeIdx * 2 + 2;
    const smallerChildIdx = rightChildIdx === heap.length || heap[leftChildIdx] < heap[rightChildIdx] ? leftChildIdx : rightChildIdx;

    if (heap[smallerChildIdx] >= heap[nodeIdx]) {
      break;
    }

    swap(heap, nodeIdx, smallerChildIdx);
    nodeIdx = smallerChildIdx;
  }
}

function swap(arr, idx1, idx2) {
  const tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}
