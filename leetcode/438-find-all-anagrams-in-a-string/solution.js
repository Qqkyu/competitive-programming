/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const chars = {};

  for (let i = 0; i < p.length; ++i) {
    chars[p[i]] = (chars[p[i]] ?? 0) + 1;
  }

  const startIdxs = [];
  let curStart = 0;
  for (let i = 0; i < s.length; ++i) {
    const leftChars = chars[s[i]];

    if (leftChars) {
      chars[s[i]]--;

      if (i - curStart === p.length - 1) {
        startIdxs.push(curStart);
        chars[s[curStart]]++;
        curStart++;
      }
    } else {
      if (leftChars == null) {
        while (curStart < i) {
          chars[s[curStart]]++;
          curStart++;
        }
      } else {
        while (s[curStart] !== s[i]) {
          chars[s[curStart]]++;
          curStart++;
        }
      }
      ++curStart;
    }
  }

  return startIdxs;
}
