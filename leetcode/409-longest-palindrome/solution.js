function longestPalindrome(s) {
  let curLongestPalindrome = 0;
  let chars = new Set();

  for (let i = 0; i < s.length; ++i) {
    const curChar = s[i];
    if (chars.has(curChar)) {
      curLongestPalindrome += 2;
      chars.delete(curChar);
    } else {
      chars.add(curChar);
    }
  }

  return chars.size > 0 ? curLongestPalindrome + 1 : curLongestPalindrome;
}
