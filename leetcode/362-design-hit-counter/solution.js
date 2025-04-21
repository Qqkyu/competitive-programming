var HitCounter = function () {
  this.heap = [];
  this.hits = 0;
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  const lastHit = this.heap.at(-1);
  if (timestamp === lastHit?.timestamp) {
    lastHit.counter++;
  } else {
    this.heap.push({ timestamp, counter: 1 });
  }

  this.hits++;
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  while (this.heap.length > 0 && timestamp - this.heap[0].timestamp >= 300) {
    this.hits -= this.heap[0].counter;

    const latestHit = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = latestHit;
    }

    let nodeIdx = 0;
    while (nodeIdx * 2 + 1 < this.heap.length) {
      const leftChildIdx = nodeIdx * 2 + 1,
        rightChildIdx = nodeIdx * 2 + 2;
      const smallerChildIdx =
        rightChildIdx === this.heap.length || this.heap[leftChildIdx].timestamp < this.heap[rightChildIdx].timestamp
          ? leftChildIdx
          : rightChildIdx;

      if (this.heap[nodeIdx].timestamp <= this.heap[smallerChildIdx].timestamp) {
        break;
      }

      const tmp = this.heap[nodeIdx];
      this.heap[nodeIdx] = this.heap[smallerChildIdx];
      this.heap[smallerChildIdx] = tmp;

      nodeIdx = smallerChildIdx;
    }
  }

  return this.hits;
};
