function longestCommonPrefix(strs) {
  return strs.reduce((curPrefix, str) => {
    let i = 0;
    while (i < str.length && str[i] === curPrefix[i]) {
      i++;
    }
    return curPrefix.substring(0, i);
  });
}
