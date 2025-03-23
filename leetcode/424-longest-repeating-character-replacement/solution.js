/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  let occurrences = {};
  let max = 0,
    maxFreq = 0,
    curBeg = 0;

  for (let idx = 0; idx < s.length; ++idx) {
    occurrences[s[idx]] = (occurrences[s[idx]] || 0) + 1;

    maxFreq = Math.max(maxFreq, occurrences[s[idx]]);

    if (maxFreq + k < idx - curBeg + 1) {
      occurrences[s[curBeg]]--;
      curBeg++;
    }

    max = Math.max(max, idx - curBeg + 1);
  }

  return max;
}
