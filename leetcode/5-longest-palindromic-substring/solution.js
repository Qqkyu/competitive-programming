/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let res = "";

  function expand(str, beg, end) {
    while (beg >= 0 && end < str.length && str[beg] === str[end]) {
      --beg;
      ++end;
    }
    return str.substring(beg + 1, end);
  }

  for (let i = 0; i < s.length; ++i) {
    const s1 = expand(s, i, i);
    const s2 = expand(s, i, i + 1);
    const longerPalindrome = s1.length > s2.length ? s1 : s2;

    if (longerPalindrome.length > res.length) {
      res = longerPalindrome;
    }
  }

  return res;
}
