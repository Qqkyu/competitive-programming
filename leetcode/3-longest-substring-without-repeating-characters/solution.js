function lengthOfLongestSubstring(s) {
  const curSubstringChars = new Set();
  let curSubstringBeg = 0,
    result = 0;

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    if (curSubstringChars.has(char)) {
      while (curSubstringBeg < i && s[curSubstringBeg] !== char) {
        curSubstringChars.delete(s[curSubstringBeg]);
        ++curSubstringBeg;
      }
      curSubstringBeg++;
    } else {
      const curSubstringLength = i - curSubstringBeg + 1;
      result = Math.max(curSubstringLength, result);
      curSubstringChars.add(char);
    }
  }

  return result;
}
