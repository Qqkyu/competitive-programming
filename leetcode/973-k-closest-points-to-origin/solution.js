function distance([x, y]) {
  return Math.pow(x, 2) + Math.pow(y, 2);
}

function weightFunction(x, y) {
  return distance(x) - distance(y);
}

class MaxHeap {
  #heap;
  #maxLength;

  constructor(maxLength) {
    this.#maxLength = maxLength;
  }

  insert(point) {
    if (this.#heap.length >= this.#maxLength && distance(point) > distance(this.#heap[0])) {
      return;
    }
    this.#heap.push(point);
    this.#heapifyUp();
    if (this.#heap.length > this.#maxLength) {
      this.deleteMax();
    }
  }

  deleteMax() {
    const maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#heapifyDown();
    return maxValue;
  }

  get heap() {
    return this.#heap;
  }

  #heapifyUp() {
    for (
      let i = this.#heap.length - 1;
      this.#getParent(i) != null && weightFunction(this.#heap[i], this.#getParent(i)) > 0;
      i = this.#getParentIdx(i)
    ) {
      const tmp = this.#getParent(i);
      this.#heap[this.#getParentIdx(i)] = this.#heap[i];
      this.#heap[i] = tmp;
    }
  }

  #heapifyDown() {
    for (let i = 0; this.#getLeftChildIdx(i) < this.#heap.length; ) {
      const smallertChildIdx =
        this.#getRightChild(i) && weightFunction(this.#getRightChild(i), this.#getLeftChild(i)) > 0
          ? this.#getRightChildIdx(i)
          : this.#getLeftChildIdx(i);

      if (weightFunction(this.#heap[i], this.#heap[smallertChildIdx]) < 0) {
        break;
      } else {
        const tmp = this.#heap[i];
        this.#heap[i] = this.#heap[smallertChildIdx];
        this.#heap[smallertChildIdx] = tmp;
      }

      i = smallertChildIdx;
    }
  }

  #getParent(idx) {
    return this.#heap[this.#getParentIdx(idx)];
  }

  #getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  #getLeftChildIdx(idx) {
    return 2 * idx + 1;
  }

  #getLeftChild(idx) {
    return this.#heap[this.#getLeftChildIdx(idx)];
  }

  #getRightChildIdx(idx) {
    return 2 * idx + 2;
  }

  #getRightChild(idx) {
    return this.#heap[this.#getRightChildIdx(idx)];
  }
}

function kClosest(points, k) {
  const distanceHeap = new MinHeap(k);
  points.forEach(([x, y]) => distanceHeap.insert([x, y]));
  return distanceHeap;
}
