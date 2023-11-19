/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagrams = {};
  strs.forEach((str) => {
    const charCounts = new Array(26).fill(0);
    for (let i = 0; i < str.length; ++i) {
      charCounts[str.charCodeAt(i) - 97]++;
    }
    const anagramHash = charCounts.join("#");
    if (anagrams[anagramHash]) {
      anagrams[anagramHash].push(str);
    } else {
      anagrams[anagramHash] = [str];
    }
  });
  return Object.values(anagrams);
};
