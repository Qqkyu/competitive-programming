var MedianFinder = function () {
  this.maxHeap = new MaxHeap();
  this.minHeap = new MinHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.length === 0) {
    if (this.minHeap.length === 0 || this.minHeap.min > num) {
      this.maxHeap.add(num);
    } else {
      const curMin = this.minHeap.min;
      this.minHeap.replaceMin(num);
      this.maxHeap.add(curMin);
    }
  } else if (this.minHeap.length === 0) {
    if (this.maxHeap.length === 0 || this.maxHeap.max < num) {
      this.minHeap.add(num);
    } else {
      const curMax = this.maxHeap.max;
      this.maxHeap.replaceMax(num);
      this.minHeap.add(curMax);
    }
  } else if (num < this.maxHeap.max) {
    if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.add(num);
    } else {
      const curMax = this.maxHeap.max;
      this.maxHeap.replaceMax(num);
      this.minHeap.add(curMax);
    }
  } else if (num > this.minHeap.min) {
    if (this.minHeap.length < this.maxHeap.length) {
      this.minHeap.add(num);
    } else {
      const curMin = this.minHeap.min;
      this.minHeap.replaceMin(num);
      this.maxHeap.add(curMin);
    }
  } else {
    if (this.minHeap.length <= this.maxHeap.length) {
      this.minHeap.add(num);
    } else {
      this.maxHeap.add(num);
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.length === this.minHeap.length) {
    return (this.maxHeap.max + this.minHeap.min) / 2;
  } else if (this.maxHeap.length > this.minHeap.length) {
    return this.maxHeap.max;
  } else {
    return this.minHeap.min;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class MaxHeap {
  heap = [];

  get max() {
    return this.heap[0];
  }

  get length() {
    return this.heap.length;
  }

  add(elem) {
    this.heap.push(elem);
    this.#siftUp();
  }

  replaceMax(elem) {
    this.heap[0] = elem;
    this.#siftDown();
  }

  #siftUp() {
    let nodeIdx = this.heap.length - 1;
    while (nodeIdx > 0) {
      const parentIdx = Math.ceil(nodeIdx / 2) - 1;

      if (this.heap[parentIdx] >= this.heap[nodeIdx]) {
        break;
      }

      swap(this.heap, nodeIdx, parentIdx);
      nodeIdx = parentIdx;
    }
  }

  #siftDown() {
    let nodeIdx = 0;
    while (nodeIdx * 2 + 1 < this.heap.length) {
      const leftChildIdx = nodeIdx * 2 + 1,
        rightChildIdx = nodeIdx * 2 + 2;
      const biggerChildIdx =
        rightChildIdx === this.heap.length || this.heap[leftChildIdx] > this.heap[rightChildIdx] ? leftChildIdx : rightChildIdx;

      if (this.heap[biggerChildIdx] <= this.heap[nodeIdx]) {
        break;
      }

      swap(this.heap, nodeIdx, biggerChildIdx);
      nodeIdx = biggerChildIdx;
    }
  }
}

class MinHeap {
  heap = [];

  get min() {
    return this.heap[0];
  }

  get length() {
    return this.heap.length;
  }

  add(elem) {
    this.heap.push(elem);
    this.#siftUp();
  }

  replaceMin(elem) {
    this.heap[0] = elem;
    this.#siftDown();
  }

  #siftUp() {
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

  #siftDown() {
    let nodeIdx = 0;
    while (nodeIdx * 2 + 1 < this.heap.length) {
      const leftChildIdx = nodeIdx * 2 + 1,
        rightChildIdx = nodeIdx * 2 + 2;
      const smallerChildIdx =
        rightChildIdx === this.heap.length || this.heap[leftChildIdx] < this.heap[rightChildIdx] ? leftChildIdx : rightChildIdx;

      if (this.heap[smallerChildIdx] >= this.heap[nodeIdx]) {
        break;
      }

      swap(this.heap, nodeIdx, smallerChildIdx);
      nodeIdx = smallerChildIdx;
    }
  }
}

function swap(arr, idx1, idx2) {
  const tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}
