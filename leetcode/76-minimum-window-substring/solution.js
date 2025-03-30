/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const tCharsLeft = new Array(52).fill(0);

  for (let i = 0; i < t.length; ++i) {
    tCharsLeft[charToIdx(t[i])]++;
  }

  tCharsLeft[charToIdx(s[0])]--;
  let curBeg = 0,
    curEnd = curBeg + 1,
    curMinimumSubstring = undefined;
  while (curEnd <= s.length) {
    const windowHasAllCharacters = tCharsLeft.every((count) => count <= 0);

    if (windowHasAllCharacters && (curMinimumSubstring == null || curMinimumSubstring.length > curEnd - curBeg)) {
      curMinimumSubstring = s.substring(curBeg, curEnd);
    }

    if (windowHasAllCharacters || (curMinimumSubstring != null && curMinimumSubstring.length < curEnd - curBeg)) {
      tCharsLeft[charToIdx(s[curBeg])]++;
      ++curBeg;
    } else {
      if (curEnd < s.length) {
        tCharsLeft[charToIdx(s[curEnd])]--;
      }
      ++curEnd;
    }
  }

  return curMinimumSubstring == null ? "" : curMinimumSubstring;
}

function charToIdx(char) {
  const charCode = char.charCodeAt(0);
  if (charCode <= "z".charCodeAt(0) && charCode >= "a".charCodeAt(0)) {
    return charCode - "a".charCodeAt(0);
  } else {
    return charCode - "A".charCodeAt(0) + 26;
  }
}
