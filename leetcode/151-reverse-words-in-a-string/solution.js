const SPACE = " ";

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let reversedString = "";
  for (let i = 0; i < s.length; ++i) {
    let word = s.charAt(i);
    if (word != SPACE) {
      let j = i + 1;
      while (j < s.length && s.charAt(j) != SPACE) {
        word += s.charAt(j);
        ++j;
      }
      reversedString = reversedString ? `${word} ${reversedString}` : word;
      i = j - 1;
    }
  }
  return reversedString;
};
