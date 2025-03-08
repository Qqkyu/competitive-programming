/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const charsMap = new Map();
  for (let i = 0; i < s1.length; ++i) {
    charsMap.set(s1[i], (charsMap.get(s1[i]) ?? 0) + 1);
  }

  let leftPtr = 0,
    rightPtr = 0;
  while (rightPtr < s2.length) {
    const curCharLeft = charsMap.get(s2[rightPtr]);

    if (curCharLeft == null) {
      while (leftPtr < rightPtr) {
        charsMap.set(s2[leftPtr], charsMap.get(s2[leftPtr]) + 1);
        ++leftPtr;
      }
      ++leftPtr;
      ++rightPtr;
      continue;
    }

    if (curCharLeft === 0) {
      while (leftPtr <= rightPtr && charsMap.get(s2[rightPtr]) === 0) {
        charsMap.set(s2[leftPtr], charsMap.get(s2[leftPtr]) + 1);
        ++leftPtr;
      }
    }

    charsMap.set(s2[rightPtr], charsMap.get(s2[rightPtr]) - 1);

    if (rightPtr - leftPtr + 1 === s1.length) {
      return true;
    }

    ++rightPtr;
  }

  return false;
}
