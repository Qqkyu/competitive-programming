/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  const wordsFrequencies = words.reduce((wordsFrequencies, word) => {
    wordsFrequencies[word] = (wordsFrequencies[word] ?? 0) + 1;
    return wordsFrequencies;
  }, {});

  const heap = [];
  for (const word in wordsFrequencies) {
    if (heap.length < k) {
      heap.push(word);
      heapifyUp(heap);
    } else if (isLessThan(heap[0], word)) {
      heap[0] = word;
      heapifyDown(heap);
    }
  }

  function isLessThan(a, b) {
    return wordsFrequencies[a] < wordsFrequencies[b] || (wordsFrequencies[a] === wordsFrequencies[b] && a > b);
  }

  function heapifyUp(heap) {
    let nodeIdx = heap.length - 1;
    while (nodeIdx > 0) {
      const parentIdx = Math.ceil(nodeIdx / 2) - 1;

      if (isLessThan(heap[parentIdx], heap[nodeIdx])) {
        break;
      }

      swap(heap, nodeIdx, parentIdx);
      nodeIdx = parentIdx;
    }
  }

  function heapifyDown(heap) {
    let nodeIdx = 0;
    while (nodeIdx * 2 + 1 < heap.length) {
      const leftChildIdx = nodeIdx * 2 + 1,
        rightChildIdx = nodeIdx * 2 + 2;

      const smallerChildIdx =
        rightChildIdx === heap.length || isLessThan(heap[leftChildIdx], heap[rightChildIdx]) ? leftChildIdx : rightChildIdx;

      if (!isLessThan(heap[smallerChildIdx], heap[nodeIdx])) {
        break;
      }

      swap(heap, nodeIdx, smallerChildIdx);
      nodeIdx = smallerChildIdx;
    }
  }

  const result = new Array(k);
  while (k > 0) {
    result[k - 1] = heap[0];
    heap[0] = heap.pop();
    heapifyDown(heap);
    --k;
  }

  return result;
}

function swap(arr, idx1, idx2) {
  const tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}
