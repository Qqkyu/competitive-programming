/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
  let result = 0;

  function expand(beg, end) {
    while (beg >= 0 && end < s.length && s[beg] === s[end]) {
      result++;
      --beg;
      ++end;
    }
  }

  for (let i = 0; i < s.length; ++i) {
    expand(i, i);
    expand(i, i + 1);
  }

  return result;
}
