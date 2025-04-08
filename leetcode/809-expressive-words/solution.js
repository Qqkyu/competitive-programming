/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
function expressiveWords(s, words) {
  let result = 0;

  words.forEach((word) => {
    let isStretchy = true;

    let sIdx = 0,
      wordIdx = 0;
    while (sIdx < s.length && wordIdx < word.length) {
      if (s[sIdx] !== word[wordIdx]) {
        isStretchy = false;
        break;
      }

      let sCharCount = 0;
      do {
        ++sCharCount;
        ++sIdx;
      } while (sIdx < s.length && s[sIdx] === s[sIdx - 1]);

      let wordCharCount = 0;
      do {
        ++wordCharCount;
        ++wordIdx;
      } while (wordIdx < word.length && word[wordIdx] === word[wordIdx - 1]);

      if ((sCharCount < 3 && sCharCount > wordCharCount) || sCharCount < wordCharCount) {
        isStretchy = false;
        break;
      }
    }

    if (isStretchy && sIdx === s.length && wordIdx === word.length) {
      ++result;
    }
  });

  return result;
}
