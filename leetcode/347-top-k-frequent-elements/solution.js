/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const occurrences = nums.reduce((hashMap, num) => {
    hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
    return hashMap;
  }, new Map());

  const heap = [];
  for (let [num, numOccurrences] of occurrences) {
    if (heap.length < k) {
      heap.push(num);

      let nodeIdx = heap.length - 1;
      while (nodeIdx > 0) {
        const parentIdx = Math.ceil(nodeIdx / 2) - 1;
        if (occurrences.get(heap[parentIdx]) <= occurrences.get(heap[nodeIdx])) {
          break;
        }

        swap(heap, nodeIdx, parentIdx);
        nodeIdx = parentIdx;
      }
    } else if (numOccurrences > occurrences.get(heap[0])) {
      heap[0] = num;

      let nodeIdx = 0;
      while (nodeIdx * 2 + 1 < heap.length) {
        const leftChildIdx = nodeIdx * 2 + 1,
          rightChildIdx = nodeIdx * 2 + 2;
        const smallerChildIdx =
          rightChildIdx === heap.length || occurrences.get(heap[leftChildIdx]) < occurrences.get(heap[rightChildIdx])
            ? leftChildIdx
            : rightChildIdx;

        if (occurrences.get(heap[smallerChildIdx]) >= occurrences.get(heap[nodeIdx])) {
          break;
        }

        swap(heap, nodeIdx, smallerChildIdx);
        nodeIdx = smallerChildIdx;
      }
    }
  }
  return heap;
}

function swap(array, idx1, idx2) {
  const tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}
